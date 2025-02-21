import React, {useState} from 'react';
import Template from "../components/atom/template";
import {registeredPages} from "../utils/constants";
import ImageWithSideContent from "../components/organisms/imageWithSideContent";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import CaseStudiesSlider from "../components/organisms/caseStudiesSlider";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import {loadHomePageData} from "../services/siteServies";
import {getPageQuery} from "../services/queryLibrary";


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
