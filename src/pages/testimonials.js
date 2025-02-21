import React from 'react';
import Template from "../components/atom/template";
import BrandSlider from "../components/organisms/brandSlider";
import TestimonialCardContainer from "../components/molecules/testimonialCardContainer";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import HeaderWithSideButton from "../components/molecules/headerWithSideButton";
import ContentWithSideRowCounts from '../components/organisms/ContentWithSideRowCounts';
import {getPageQuery} from "../services/queryLibrary";
import {registeredPages} from "../utils/constants";
import {loadHomePageData} from "../services/siteServies";
import DarkContentWithSideImage from "../components/organisms/darkContentWithSideImage";

export async function getServerSideProps() {
  const currentPageData = await loadHomePageData(
    getPageQuery(registeredPages.TESTIMONIALS)
  );
  return {
    props: {
      currentPageData,
    },
  };
}

const Testimonials = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.TESTIMONIALS]
    return (
        <Template urlBar={true} urlStrings={[
            {Testimonials: "null"}
        ]}
                  urlDetails={{
                      title:[currentPageData.page.title],
                      desc:pageVars.tpBannerPc
                  }}
                  currentPageData={currentPageData}
        >
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

      <BrandSlider currentPageData={currentPageData} />

            <HeaderWithSideButton
                header={pageVars.tpHeading1}
                buttonDetails={{ buttonText:pageVars.tpButton.tpButtonLabel, action:pageVars.tpButton.tpButtonLink }}
                desc={pageVars.tpPc1}
            />
            <div className="row">
                {
                    pageVars.tpTestimonialCard.map((card,index) =>   <TestimonialCardContainer testimonialsDetails={{
                        comment:card.tpReviewContent,
                        image: card.tpClientImage.mediaItemUrl,
                        name:card.tpClientName,
                        position:card.tpDesigCoName
                    }} key={index} col={" col-lg-6 col-md-6 col-sm-8 "} />)
                }

            </div>

           <DarkContentWithSideImage currentPageData={currentPageData} />

      <BrandSliderWithSideContent
        addClass="mt-5 mb-3"
        currentPageData={currentPageData}
      />

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

export default Testimonials;
