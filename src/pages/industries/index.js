import dynamic from "next/dynamic";
import React from "react";
import { getPageQuery } from "../../services/queryLibrary";
import { registeredPages } from "../../utils/constants";
import { loadHomePageData } from "../../services/siteServies";
import { loadImageFromData } from "../../utils/globalFunctions";

// Dynamically imported components
const Template = dynamic(() => import("../../components/atom/template"));
const ContentWithSideRowCounts = dynamic(() =>
  import("../../components/organisms/ContentWithSideRowCounts")
);
const ImageWithSideIconContents = dynamic(() =>
  import("../../components/molecules/imageWithSideIconContents")
);
const BrandSlider = dynamic(() =>
  import("../../components/organisms/brandSlider")
);
const HeaderDescContainer = dynamic(() =>
  import("../../components/molecules/headerDescContainer")
);
const IconCardContainer = dynamic(() =>
  import("../../components/molecules/IconCardContainer")
);
const CaseStudiesSlider = dynamic(() =>
  import("../../components/organisms/caseStudiesSlider")
);
const TestimonialsSlider = dynamic(() =>
  import("../../components/organisms/testimonialsSlider")
);
const BrandSliderWithSideContent = dynamic(() =>
  import("../../components/organisms/brandSliderWithSideContent")
);
const SimpleNewsLetterForm = dynamic(() =>
  import("../../components/molecules/simpleNewsLetterForm")
);
const FaqQuestions = dynamic(() =>
  import("../../components/organisms/faqQuestions")
);
const DarkContentWithSideImage = dynamic(() =>
  import("../../components/organisms/darkContentWithSideImage")
);

export async function getServerSideProps() {
  const currentPageData = await loadHomePageData(
    getPageQuery(registeredPages.INDUSTRIES)
  );
  return {
    props: {
      currentPageData,
    },
  };
}

const Index = ({ currentPageData }) => {
  const pageVars = currentPageData.page[registeredPages.INDUSTRIES];

  return (
    <Template
      urlStrings={[{ Industries: "null" }]}
      urlBar={true}
      urlDetails={{
        title: [currentPageData.page.title],
        desc: pageVars.industriesBannerPc,
      }}
      currentPageData={currentPageData}
    >
      <div className="pt-5">
        <ContentWithSideRowCounts
          heading={
            currentPageData.siteOption.siteOptions.resultsHighlightHeading
          }
          desc={currentPageData.siteOption.siteOptions.resultsHighlightPara}
          points={currentPageData.siteOption.siteOptions.deliveredNumbers.map(
            (item, index) => ({
              count: item.highlightNumbers,
              desc: item.highlightTxt,
              key: index,
            })
          )}
        />
      </div>

      <ImageWithSideIconContents
        heading={pageVars.industriesHeading1}
        content={pageVars.industriesPc1}
        ImageData={{
          url: loadImageFromData(pageVars.industriesImage1),
          altText: pageVars.industriesImage1.altText,
        }}
        buttonData={{
          buttonText: pageVars.industriesCtaButton1.industriesCtaButtonLabel1,
          action: pageVars.industriesCtaButton1.industriesCtaButtonLink1,
        }}
        pointsArray={pageVars.industriesPcHighlightPoints.map((p, i) => {
          return {
            header: p.industriesPcPointName,
            desc: p.industriesPcPointDescription,
          };
        })}
      />

      <BrandSlider currentPageData={currentPageData} />

      <HeaderDescContainer
        header={pageVars.industriesHeading2}
        desc={pageVars.industriesPc2}
        showButton={true}
        buttonData={{
          buttonText:
            pageVars.industriesCardSecCtaButton.industriesCardSecCtaButtonLabel,
          action:
            pageVars.industriesCardSecCtaButton.industriesCardSecCtaButtonLink,
        }}
      />
      <div className="row">
        {pageVars.industriesCardsComp.map((card, i) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
            <IconCardContainer
              icon={loadImageFromData(card.industriesCardCompIcon)}
              altText={card.industriesCardCompIcon.altText}
              heading={card.industriesCardCompServiceName}
              desc={card.industriesCardCompServiceDescription}
              listData={card.industriesCardCompHighlightPoints.map((c, i) => {
                return { servicePointName: c.industriesCardCompHighlight };
              })}
            />
          </div>
        ))}
      </div>

      <CaseStudiesSlider currentPageData={currentPageData} />
      <TestimonialsSlider currentPageData={currentPageData} />

      <DarkContentWithSideImage currentPageData={currentPageData} />

      <FaqQuestions
        header={pageVars.industriesHeading3}
        desc={pageVars.industriesPc3}
        faqArray={pageVars.industriesFaqs.map((f) => {
          return {
            question: f.industriesFaqQuestion,
            answer: f.industriesFaqAnswer,
          };
        })}
        buttonData={{
          buttonText:
            pageVars.industriesFaqCtaButton.industriesFaqCtaButtonLabel,
          action: pageVars.industriesFaqCtaButton.industriesFaqCtaButtonLink,
        }}
      />

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

export default Index;
