import React, { useState } from "react";
import dynamic from "next/dynamic";
import { registeredPages } from "../utils/constants";
import { loadHomePageData } from "../services/siteServies";
import { getPageQuery } from "../services/queryLibrary";

// Dynamically imported components
const Template = dynamic(() => import("../components/atom/template"));
const ImageWithSideContent = dynamic(() => import("../components/organisms/imageWithSideContent"));
const TestimonialsSlider = dynamic(() => import("../components/organisms/testimonialsSlider"));
const CaseStudiesSlider = dynamic(() => import("../components/organisms/caseStudiesSlider"));
const BrandSliderWithSideContent = dynamic(() => import("../components/organisms/brandSliderWithSideContent"));
const SimpleNewsLetterForm = dynamic(() => import("../components/molecules/simpleNewsLetterForm"));



export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.THANK_YOU));
    return {
        props: {
            currentPageData,
        },
    };
}
const ThankYou = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.THANK_YOU];

    return <Template currentPageData={currentPageData}>
        <ImageWithSideContent

            heading={pageVars.thanksHeading1}
            content={pageVars.thanksParagraphContent1}
            ImageData={{
                url: pageVars.thanksImage1.mediaItemUrl,
                altText: pageVars.thanksImage1.altText,
            }}
            contentListing={0}
            showButton={false}
        />
        <TestimonialsSlider currentPageData={currentPageData} />
        <CaseStudiesSlider currentPageData={currentPageData} />
        <BrandSliderWithSideContent currentPageData={currentPageData} />
        <div className="row align-items-center">
            <div className="col-lg-7 col-md-6 col-sm-12">
                <h2>
                    Subscribe to our newsletter and stay updated on the latest news
                </h2>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 ps-lg-5 ps-md-5 ">
                <SimpleNewsLetterForm />
            </div>
        </div>

    </Template>
};

export default ThankYou;
