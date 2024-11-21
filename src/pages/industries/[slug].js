import React from 'react';
import Template from "../../components/atom/template";
import ContentWithSideRowCounts from "../../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../../components/molecules/imageWithSideIconContents";
import BrandSlider from "../../components/organisms/brandSlider";
import ImageWithSideContent from "../../components/organisms/imageWithSideContent";
import ThemeButton from "../../components/atom/themeButton";
import {FaUser} from "react-icons/fa";
import {FaHandshakeSimple} from "react-icons/fa6";
import FeaturePowerUpComponent from "../../components/organisms/featurePowerUpComponent";
import HeaderDescContainer from "../../components/molecules/headerDescContainer";
import CaseStudyCardContainer from "../../components/molecules/caseStudyCardContaienr";
import IconCardContainer from "../../components/molecules/IconCardContainer";
import ImageWithSideSortContent from "../../components/organisms/imageWithSideSortContent";
import TestimonialsSlider from "../../components/organisms/testimonialsSlider";
import FaqQuestions from "../../components/organisms/faqQuestions";
import BrandSliderWithSideContent from "../../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../../components/molecules/simpleNewsLetterForm";
import VerticalSwiper from "../../components/organisms/verticalSwiper";
import {loadHomePageData} from "../../services/siteServies";
import {getPageQuery} from "../../services/queryLibrary";
import {registeredPages} from "../../utils/constants";
import {isNotNull, loadImageFromData} from "../../utils/globalFunctions";
import FeaturesSection from "../../components/organisms/featuresSection";
import DarkContentWithSideImage from "../../components/organisms/darkContentWithSideImage";
import CaseStudiesSlider from "../../components/organisms/caseStudiesSlider";

export async function getServerSideProps(context) {
    const { slug } = context.params;
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.DETAILED_INDUSTRY_SERVICES, slug));
    // console.log("reyurn =", currentPageData)
    return {
        props: {
            currentPageData,
        },
    };
}

const SeoIndustry = ({ currentPageData }) => {
    const seoIndustryVar = currentPageData[registeredPages.SINGLE_INDUSTRY]

    if (!isNotNull(seoIndustryVar))
        return <h1>No Data Found</h1>

    const pageVars = seoIndustryVar[registeredPages.DETAILED_INDUSTRY_SERVICES]
    return (
        <Template
            currentPageData={currentPageData}
            urlStrings={[
                {"Industries":'/industries'},
                {[currentPageData[registeredPages.SINGLE_INDUSTRY].title]:'null'}
            ]} urlBar={true} urlDetails={{
            title:[currentPageData[registeredPages.SINGLE_INDUSTRY].title],
            desc:pageVars.industryServicesBannerPc
        }}
            slug={registeredPages.SINGLE_INDUSTRY}
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

            <ImageWithSideIconContents
                heading={pageVars.industryServicesHeading1}
                content={pageVars.industryServicesPc1}
                ImageData={{
                    url: loadImageFromData(pageVars.industryServicesImage1),
                    alert: pageVars.industryServicesImage1.altText,
                }}
                addClass="mt-2"
                buttonData={{
                    buttonText:pageVars.industryServicesCtaButton1.industryServicesButtonLabel1,
                    action:pageVars.industryServicesCtaButton1.industryServicesButtonLink1
                }}
                pointsArray={pageVars.industryServicesPc1Points.map(c => {
                    return {
                        header:c.industryServicesPc1PointsName,
                        desc:c.industryServicesPc1PointsDescription
                    }
                })}

            />
            <BrandSlider currentPageData={currentPageData} />

            <ImageWithSideContent

                heading={pageVars.industryServicesHeading2}
                content={pageVars.industryServicesPc2}
                ImageData={{
                    url: loadImageFromData(pageVars.industryServicesImage2),
                    altText: pageVars.industryServicesImage2.altText,
                }}
                contentListing={1}
                buttonData={{
                    buttonText: pageVars.industryServicesCtaButton2.industryServicesButtonLabel2,
                    action: pageVars.industryServicesCtaButton2.industryServicesButtonLink2,
                }}
            />

            <FeaturesSection
                header={pageVars.industryServicesHeading3}
                desc={pageVars.industryServicesPc3}
                button={{ buttonText:pageVars.industryServicesCtaButton3.industryServicesButtonLabel3, action: pageVars.industryServicesCtaButton3.industryServicesButtonLink3}}
                pointArray={pageVars.industryServicesFeaturesComp.map(p => {
                    return{
                        header:p.industryServicesFeatureName,
                        desc:p.industryServicesFeatureDescription
                    }
                })}
            />


            <FeaturePowerUpComponent
                header={pageVars.industryServicesHeading5}
                desc={pageVars.industryServicesPc5}
                button={{
                    buttonText : pageVars.industryServicesCtaButton5.industryServicesButtonLabel5,
                    action : pageVars.industryServicesCtaButton5.industryServicesButtonLink5
                }}
                pointsArray={pageVars.industryServicesOfferings.map(p => {return {
                    icon:p.industryServicesOfferingIcon,
                    name:p.industryServicesOfferingPointName,
                    desc:p.industryServicesOfferingPointDescription
                }})}
            />

           <CaseStudiesSlider currentPageData={currentPageData} />

            <div className={"pt-5"}>
                <HeaderDescContainer
                    header={pageVars.industryServicesHeading4}
                    desc={pageVars.industryServicesPc4 }
                    showButton={true}
                    buttonData={{
                        buttonText:pageVars.industryServicesCtaButton4.industryServicesButtonLabel4,
                        action:pageVars.industryServicesCtaButton4.industryServicesCtaButtonLink4
                    }}
                />
            </div>
            <VerticalSwiper sliderData={pageVars.industryServicesVerticalSlider.map(c => {
                return {
                    header:c.industryServicesVerticalSliderHeading,
                    desc:c.industryServicesVerticalSliderPc,
                    image:c.industryServicesVerticalSliderImage,
                    button:{
                        buttonText:c.industryServicesVerticalSliderCtaButton.industryServicesVerticalSliderButtonLabel,
                        action:c.industryServicesVerticalSliderCtaButton.industryServicesVerticalSliderButtonLink
                    }
                }
            })} />

            <section className={"pt-5"}>
                <HeaderDescContainer
                    header={pageVars.industryServicesHeading6}
                    desc={pageVars.industryServicesPc6}
                    showButton={true}
                    buttonData={{
                        buttonText: pageVars.industryServicesCardCta.industryServicesCardCtaLabel,
                        action: pageVars.industryServicesCardCta.industryServicesCardCtaLink
                    }}
                />

                <div className="row">
                    {
                        pageVars.industryServicesCardComp.map((card,i) => <div className="col-lg-4 col-md-6 col-sm-12 col-12" key={i}>
                            <IconCardContainer
                                icon={loadImageFromData(card.industryServicesCardIcon)}
                                altText={card.industryServicesCardIcon.altText}
                                heading={card.industryServicesCardName}
                                desc={card.industryServicesCardDescription}
                                listData={card.industryServicesCardPoints.map((c,i) => {return {servicePointName: c.industryServicesCardBulletPoints}})}
                            />
                        </div>)
                    }

                </div>
            </section>



            {
                pageVars.industryServicesAltContentWithImage.map((card,index) => <ImageWithSideContent
                    heading={card.industryServicesHeading7}
                    content={card.industryServicesPc7}
                    ImageData={{
                        url: loadImageFromData(card.industryServicesImage3),
                        alert: card.industryServicesImage3.altText,
                    }}
                    contentListing={index%2}
                    buttonData={{
                        buttonText: card.industryServicesCtaButton5.industryServicesButtonLabel5,
                        action: card.industryServicesCtaButton5.industryServicesButtonLink5,
                    }}
                    key={index}
                />)
            }

            <DarkContentWithSideImage currentPageData={currentPageData} />

            <TestimonialsSlider currentPageData={currentPageData} />

            <FaqQuestions
                header={pageVars.industryServicesHeading8}
                desc={pageVars.industryServicesPc8}
                faqArray={pageVars.industryServicesFaqQuestionAnswer.map(f => {return {
                    question:f.industryServicesFaqQuestion,
                    answer:f.industryServicesFaqAnswer
                }})}
                buttonData={{
                    buttonText:pageVars.industryServicesFaqCtaButton.industryServicesFaqCtaButtonLabel,
                    action:pageVars.industryServicesFaqCtaButton.industryServicesFaqCtaButtonLink
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

export default SeoIndustry;
