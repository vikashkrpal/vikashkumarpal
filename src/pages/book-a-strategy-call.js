import React from "react";
import dynamic from "next/dynamic";
import { InlineWidget } from "react-calendly";
import { getPageQuery } from "../services/queryLibrary";
import { registeredPages } from "../utils/constants";
import { loadHomePageData } from "../services/siteServies";

// Dynamically imported components
const Template = dynamic(() => import("../components/atom/template"));
const HeaderDescContainer = dynamic(() => import("../components/molecules/headerDescContainer"));
const ContentWithSideRowCounts = dynamic(() => import("../components/organisms/ContentWithSideRowCounts"));
const TestimonialsSlider = dynamic(() => import("../components/organisms/testimonialsSlider"));
const BrandSliderWithSideContent = dynamic(() => import("../components/organisms/brandSliderWithSideContent"));


export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.BOOK_A_STRATEGY_CALL));
    return {
        props: {
            currentPageData,
        },
    };
}

const bookAStrategyCall = ({ currentPageData }) =>{
    const pageVars = currentPageData.page[registeredPages.BOOK_A_STRATEGY_CALL];

    return (
    <Template currentPageData={currentPageData} >
        <section>
            <HeaderDescContainer
                header={pageVars.bascHeading}
                addClass={"w-res-50 mx-aut  o"}
                desc={pageVars.bascPc}
                textAlignCenter={true}
            />


            <InlineWidget url="https://cal.com/vikashkumarpal/"  />

        </section>

        <div className="pt-5">
            <ContentWithSideRowCounts
                heading={currentPageData.siteOption.siteOptions.resultsHighlightHeading}
                desc={currentPageData.siteOption.siteOptions.resultsHighlightPara}
                points={currentPageData.siteOption.siteOptions.deliveredNumbers.map((item, index) => ({
                    count: item.highlightNumbers,
                    desc: item.highlightTxt,
                    key: index,
                }))}
            />

        </div>

        <TestimonialsSlider currentPageData={currentPageData} />

        <BrandSliderWithSideContent currentPageData={currentPageData} />

    </Template>
    );
}

export default bookAStrategyCall;
