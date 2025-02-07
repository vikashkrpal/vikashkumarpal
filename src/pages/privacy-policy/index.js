import dynamic from "next/dynamic";
import React from "react";

// Dynamically imported components
const Template = dynamic(() => import("../../components/atom/template"));
const { loadHomePageData } = dynamic(() => import("../../services/siteServies"));
const { getPageQuery } = dynamic(() => import("../../services/queryLibrary"));
const { registeredPages } = dynamic(() => import("../../utils/constants"));


export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.PRIVACY_POLICY));
    return {
        props: {
            currentPageData,
        },
    };
}
const Index = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.PRIVACY_POLICY]

    return (
        <Template
            currentPageData={currentPageData}
            urlStrings={[
                {[currentPageData.page.title]:'null'}
            ]} urlBar={true} urlDetails={{
            title:[currentPageData.page.title],
            desc:pageVars.privacyPolicyBannerParagraph
        }}
        >
            <div className={"container mt-5 pt-5"} dangerouslySetInnerHTML={{ __html:currentPageData.page.content }} />

        </Template>
    );
};

export default Index;
