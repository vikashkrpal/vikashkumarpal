import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically imported components
const Template = dynamic(() => import("../../components/atom/template"));
const ContentWithSideRowCounts = dynamic(() => import("../../components/organisms/ContentWithSideRowCounts"));
const HeaderDescContainer = dynamic(() => import("../../components/molecules/headerDescContainer"));
const ImageWithSideContent = dynamic(() => import("../../components/organisms/imageWithSideContent"));
const BrandSliderWithSideContent = dynamic(() => import("../../components/organisms/brandSliderWithSideContent"));
const SimpleNewsLetterForm = dynamic(() => import("../../components/molecules/simpleNewsLetterForm"));
const TestimonialReviewContainer = dynamic(() => import("../../components/organisms/testimonialReviewContainer"));
const DarkContentWithSideImage = dynamic(() => import("../../components/organisms/darkContentWithSideImage"));

// Regular imports for utility and data fetching functions
import { loadHomePageData } from "../../services/siteServies";
import { getPageQuery } from "../../services/queryLibrary";
import { registeredPages } from "../../utils/constants";
import { isNotNull, loadImageFromData } from "../../utils/globalFunctions";


export async function getServerSideProps(context) {
    const { slug } = context.params;
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.DETAILED_CASE_STUDY, slug));
    // console.log("reyurn =", currentPageData)
    return {
        props: {
            currentPageData,
        },
    };
}

const SingleCaseStudy = ({ currentPageData }) => {

    const caseStudyVars = currentPageData[registeredPages.CASE_STUDY]

    if (!isNotNull(caseStudyVars))
        return <h1>No Data Found</h1>

    const pageVars = caseStudyVars[registeredPages.DETAILED_CASE_STUDY]
    return (
        <Template
            currentPageData={currentPageData}
            urlStrings={[
                {"Case Study":'/case-study'},
                {[currentPageData.caseStudy.title]:'null'}
            ]} urlBar={true} urlDetails={{
            title:[currentPageData.caseStudy.title],
            desc:pageVars.dcsBannerPc
        }}
            slug={registeredPages.CASE_STUDY}

        >
            <div className="pt-5">
                <ContentWithSideRowCounts
                    heading={pageVars.dcsHeading1}
                    desc={pageVars.dcsPc1}
                    points={pageVars.dcsImpactNumbers.map((item, index) => ({
                        count: item.dcsHighlightNumber,
                        desc: item.dcsHighlightText,
                        key: index,
                    }))}
                />

            </div>

            <HeaderDescContainer
                header={pageVars.dcsHeading2}
                desc={pageVars.dcsPc2}
            />
            <TestimonialReviewContainer testimonialsDetails={{
                comment: pageVars.dcsClientReviewContent,
                image: loadImageFromData(pageVars.dcsClientIcon),
                name: pageVars.dcsClientName,
                position: pageVars.dcsClientDesignation,
                highlightPoints: pageVars.dcsImpactNumbers
            }} />

            {
                pageVars.dcsCaseStudyContent.map((card,index) => <ImageWithSideContent
                    heading={card.dcsHeading3}
                    content={card.dcsPc3}
                    ImageData={{
                        url: loadImageFromData(card.dcsImage),
                        altText: card.dcsImage.altText,
                    }}
                    contentListing={index%2}
                    buttonData={{
                        buttonText: card.dcsCtaButton.dcsButtonLabel,
                        action: card.dcsCtaButton.dcsButtonLink,
                    }}
                    key={index}
                />)
            }


           <DarkContentWithSideImage currentPageData={currentPageData} />

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
    );
};

export default SingleCaseStudy;
