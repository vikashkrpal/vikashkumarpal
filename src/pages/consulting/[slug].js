import React from "react";
import dynamic from "next/dynamic";

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
const ImageWithSideContent = dynamic(() =>
  import("../../components/organisms/imageWithSideContent")
);
const ThemeButton = dynamic(() => import("../../components/atom/themeButton"));
const FeaturePowerUpComponent = dynamic(() =>
  import("../../components/organisms/featurePowerUpComponent")
);
const HeaderDescContainer = dynamic(() =>
  import("../../components/molecules/headerDescContainer")
);
const IconCardContainer = dynamic(() =>
  import("../../components/molecules/IconCardContainer")
);
const TestimonialsSlider = dynamic(() =>
  import("../../components/organisms/testimonialsSlider")
);
const FaqQuestions = dynamic(() =>
  import("../../components/organisms/faqQuestions")
);
const BrandSliderWithSideContent = dynamic(() =>
  import("../../components/organisms/brandSliderWithSideContent")
);
const SimpleNewsLetterForm = dynamic(() =>
  import("../../components/molecules/simpleNewsLetterForm")
);
const VerticalSwiper = dynamic(() =>
  import("../../components/organisms/verticalSwiper")
);
import { loadHomePageData } from "../../services/siteServies";
import { getPageQuery } from "../../services/queryLibrary";
import { registeredPages } from "../../utils/constants";

import { isNotNull, loadImageFromData } from "../../utils/globalFunctions";
const CaseStudiesSlider = dynamic(() =>
  import("../../components/organisms/caseStudiesSlider")
);
const FeaturesSection = dynamic(() =>
  import("../../components/organisms/featuresSection")
);
const DarkContentWithSideImage = dynamic(() =>
  import("../../components/organisms/darkContentWithSideImage")
);

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const currentPageData = await loadHomePageData(
    getPageQuery(registeredPages.DETAILED_CONSULTING_SERVICES, slug)
  );
  // console.log("reyurn =", currentPageData)
  return {
    props: {
      currentPageData,
    },
  };
}

const SeoConsultant = ({ currentPageData }) => {
  const consultingVars = currentPageData[registeredPages.CONSULTING_SERVICES];

  if (!isNotNull(consultingVars)) return <h1>No Data Found</h1>;

  const pageVars = consultingVars[registeredPages.DETAILED_CONSULTING_SERVICES];
  return (
    <Template
      currentPageData={currentPageData}
      slug={registeredPages.CONSULTING_SERVICES}
      urlStrings={[
        { Consulting: "/consulting" },
        {
          [currentPageData[registeredPages.CONSULTING_SERVICES].title]: "null",
        },
      ]}
      urlBar={true}
      urlDetails={{
        title: [currentPageData[registeredPages.CONSULTING_SERVICES].title],
        desc: pageVars.consultingServicesBannerPc,
      }}
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
        heading={pageVars.consultingServicesHeading1}
        content={pageVars.consultingServicesPc1}
        ImageData={{
          url: loadImageFromData(pageVars.consultingServicesImage1),
          altText: pageVars.consultingServicesImage1.altText,
        }}
        addClass="mt-2"
        buttonData={{
          buttonText:
            pageVars.consultingServicesCtaButton1
              .consultingServicesButtonLabel1,
          action:
            pageVars.consultingServicesCtaButton1.consultingServicesButtonLink1,
        }}
        pointsArray={pageVars.consultingServicesPc1Points.map((p, i) => {
          return {
            header: p.consultingServicesPc1PointsName,
            desc: p.consultingServicesPc1PointsDescription,
          };
        })}
      />
      <BrandSlider currentPageData={currentPageData} />

      <ImageWithSideContent
        heading={pageVars.consultingServicesHeading2}
        content={pageVars.consultingServicesPc2}
        ImageData={{
          url: loadImageFromData(pageVars.consultingServicesImage2),
          altText: pageVars.consultingServicesImage2.altText,
        }}
        contentListing={1}
        buttonData={{
          buttonText:
            pageVars.consultingServicesCtaButton2
              .consultingServicesButtonLabel2,
          action:
            pageVars.consultingServicesCtaButton2.consultingServicesButtonLink2,
        }}
      />

      <FeaturesSection
        header={pageVars.consultingServicesHeading3}
        desc={pageVars.consultingServicesPc3}
        button={{
          buttonText:
            pageVars.consultingServicesCtaButton3
              .consultingServicesButtonLabel3,
          action:
            pageVars.consultingServicesCtaButton3.consultingServicesButtonLink3,
        }}
        pointArray={pageVars.consultingServicesFeaturesComp.map((p) => {
          return {
            header: p.consultingServicesFeatureName,
            desc: p.consultingServicesFeatureDescription,
          };
        })}
      />

      <div>
        <div className="row align-items-center pt-5">
          <div className="col-lg-9 col-md-8">
            <div
              dangerouslySetInnerHTML={{
                __html: pageVars.consultingServicesHeading4,
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: pageVars.consultingServicesPc4,
              }}
            />
          </div>

          <div className="col-lg-3 col-md-4 text-lg-center my-auto d-flex justify-content-end">
            <ThemeButton
              text={
                pageVars.consultingServicesCtaButton4
                  .consultingServicesButtonLabel4
              }
              addStyle={{ minWidth: "30%", fontSize: 18 }}
              href={
                pageVars.consultingServicesCtaButton4
                  .consultingServicesButtonLink4
              }
            />
          </div>
        </div>
      </div>
      <VerticalSwiper
        sliderData={pageVars.consultingServicesVerticalSlider.map((c) => {
          return {
            header: c.consultingServicesVerticalSliderHeading,
            desc: c.consultingServicesVerticalSliderPc,
            image: c.consultingServicesVerticalSliderImage,
            button: {
              buttonText:
                c.consultingServicesVerticalSliderCtaButton
                  .consultingServicesVerticalSliderButtonLabel,
              action:
                c.consultingServicesVerticalSliderCtaButton
                  .consultingServicesVerticalSliderButtonLink,
            },
          };
        })}
      />
      <section className={"pt-5"}>
        <CaseStudiesSlider currentPageData={currentPageData} />
      </section>

      <FeaturePowerUpComponent
        header={pageVars.consultingServicesHeading5}
        desc={pageVars.consultingServicesPc5}
        button={{
          buttonText:
            pageVars.consultingServicesCtaButton5
              .consultingServicesButtonLabel5,
          action:
            pageVars.consultingServicesCtaButton5.consultingServicesButtonLink5,
        }}
        pointsArray={pageVars.consultingServicesOfferings.map((p) => {
          return {
            icon: p.consultingServicesOfferingIcon,
            name: p.consultingServicesOfferingPointName,
            desc: p.consultingServicesOfferingPointDescription,
          };
        })}
      />

      <section className={"pt-5"}>
        <HeaderDescContainer
          header={pageVars.consultingServicesHeading6}
          desc={pageVars.consultingServicesPc6}
          showButton={true}
          buttonData={{
            buttonText:
              pageVars.consultingServicesCardCta.consultingServicesCardCtaLabel,
            action:
              pageVars.consultingServicesCardCta.consultingServicesCardCtaLink,
          }}
        />

        <div className="row">
          {pageVars.consultingServicesCardComp.map((card, i) => (
            <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
              <IconCardContainer
                icon={loadImageFromData(card.consultingServicesCardIcon)}
                altText={card.consultingServicesCardIcon.altText}
                heading={card.consultingServicesCardName}
                desc={card.consultingServicesCardDescription}
                listData={card.consultingServicesCardPoints.map((c, i) => {
                  return {
                    servicePointName: c.consultingServicesCardBulletPoints,
                  };
                })}
              />
            </div>
          ))}
        </div>
      </section>

      <DarkContentWithSideImage currentPageData={currentPageData} />

      <TestimonialsSlider currentPageData={currentPageData} />

      <div style={{ marginTop: "-5%" }}>
        <FaqQuestions
          header={pageVars.consultingServicesHeading7}
          desc={pageVars.consultingServicesPc7}
          faqArray={pageVars.consultingServicesFaqQuestionAnswer.map((f) => {
            return {
              question: f.consultingServicesFaqQuestion,
              answer: f.consultingServicesFaqAnswer,
            };
          })}
          buttonData={{
            buttonText:
              pageVars.consultingServicesFaqCtaButton
                .consultingServicesFaqCtaButtonLabel,
            action:
              pageVars.consultingServicesFaqCtaButton
                .consultingServicesFaqCtaButtonLink,
          }}
        />
      </div>

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

export default SeoConsultant;
