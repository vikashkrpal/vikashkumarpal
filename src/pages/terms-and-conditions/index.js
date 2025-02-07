import dynamic from 'next/dynamic';

// Dynamically import Template component
const Template = dynamic(() => import("../../components/atom/template"));

// Regular imports for utility and data-fetching functions
import { loadHomePageData } from "../../services/siteServies";
import { getPageQuery } from "../../services/queryLibrary";
import { registeredPages } from "../../utils/constants";


export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.TERMS_OF_SERVICE));
    return {
        props: {
            currentPageData,
        },
    };
}
const Index = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.TERMS_OF_SERVICE]

    return (
        <Template
            currentPageData={currentPageData}
            urlStrings={[
                {[currentPageData.page.title]:'null'}
            ]} urlBar={true} urlDetails={{
            title:[currentPageData.page.title],
            desc:pageVars.tncBannerParagraph
        }}
        >
            <div className={"container mt-5 pt-5"} dangerouslySetInnerHTML={{ __html:currentPageData.page.content }} />

        </Template>
    );
};

export default Index;
