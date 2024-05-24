import React from 'react';
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../components/molecules/imageWithSideIconContents";
import BrandSlider from "../components/organisms/brandSlider";
import ImageWithSideContent from "../components/organisms/imageWithSideContent";
import ThemeButton from "../components/atom/themeButton";
import {FaUser} from "react-icons/fa";
import {FaHandshakeSimple} from "react-icons/fa6";
import FeaturePowerUpComponent from "../components/organisms/featurePowerUpComponent";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import CaseStudyCardContainer from "../components/molecules/caseStudyCardContaienr";
import IconCardContainer from "../components/molecules/IconCardContainer";
import ImageWithSideSortContent from "../components/organisms/imageWithSideSortContent";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import FaqQuestions from "../components/organisms/faqQuestions";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";

const SeoApproach = () => {
    return (
        <Template
            urlStrings={[
                {"Seo Approach":'null'}
            ]} urlBar={true} urlDetails={{
            title:'Seo Approach',
            desc:'Explore our portfolio to witness the depth and range of our SEO expertise. Each project is a story of challenge, innovation, and success.'
        }}
        >
            <ContentWithSideRowCounts />

            <ImageWithSideIconContents
                heading={
                    "<h1>Data-Driven Custom SEO Services That Drive Revenue!</h1>"
                }
                content={
                    "<p>Choose improveFX as your SEO agency and unlock high-impact search results by dominating your market with custom result driven SEO strategies to take your business to new heights with our award-winning SEO Experts.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/award-winning-seo-experts-1.webp",
                    alert: "Award winning SEO experts",
                }}
                addClass="mt-2"
            />
            <BrandSlider />

            <FeaturePowerUpComponent />

            <section className={"pt-lg-5"}>
                <HeaderDescContainer
                    header={"<h2>improveFX results speak for themselves</h2>"}
                    desc={
                        "<p>Explore our diverse case studies to witness firsthand the transformative impact of improveFX's SEO services. Each case study is a testament to our strategic approach, showcasing significant increases in traffic, sales, and online presence for our clients. These success stories reflect our commitment to not just meeting but exceeding SEO goals.</p>"
                    }
                />
                <div className="row">
                    <div className="col-12 col-lg-6 col-md-12">
                        <CaseStudyCardContainer
                            image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fda38b99db3443ac96239_image-blog-post-02-growth-template.jpg"}
                            category={"General Seo"}
                            header={"Legal Mastery"}
                            desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                            column={false}
                        />
                    </div>
                    <div className="col-12 col-lg-6 col-md-12">
                        <CaseStudyCardContainer
                            image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"}
                            category={"Local Seo"}
                            header={"Legal Expertise Meets SEO Mastery"}
                            desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                            column={false}
                        />
                    </div>

                </div>
            </section>

            <div>
                <div className="row align-items-center pt-5">
                    <div className="col-lg-6 col-md-8">
                        <h2>Create your tecbit account</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-4 text-lg-center my-auto d-lg-flex justify-content-end">
                        <ThemeButton text={"Get Started >"} addStyle={{  minWidth:'30%', fontSize:18 }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <div  style={{ borderLeft:"0.2px solid white" }} className={"ps-4"}>
                            <span className="font-b" style={{ fontWeight:'bold', fontSize:20 }}>01</span>
                            <p className={" mb-1 text-primary font-b"} style={{ fontSize:20, fontWeight:'bold' }}>create your own account</p>

                            <p> Lorem ipsum dolor sit amet, consecteturor adipiscing elit</p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <div  style={{ borderLeft:"0.2px solid white" }} className={"ps-4"}>
                            <span className="font-b" style={{ fontWeight:'bold', fontSize:20 }}>02</span>
                            <p className={" mb-1 text-primary font-b"} style={{ fontSize:20, fontWeight:'bold' }}>create your own account</p>

                            <p> Lorem ipsum dolor sit amet, consecteturor adipiscing elit</p>
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-3">
                        <div  style={{ borderLeft:"0.2px solid white" }} className={"ps-4"}>
                            <span className="font-b" style={{ fontWeight:'bold', fontSize:20 }}>03</span>
                            <p className={" mb-1 text-primary font-b"} style={{ fontSize:20, fontWeight:'bold' }}>create your own account</p>

                            <p> Lorem ipsum dolor sit amet, consecteturor adipiscing elit</p>
                        </div>

                    </div>

                </div>
            </div>
            <ImageWithSideContent
                headingHighlight={
                    "Innovative and Affordable SEO Services for Every Business"
                }
                heading={"<h2>What Makes Our SEO Company Different?</h2>"}
                content={
                    "<p>improveFX distinguishes itself as a professional SEO agency by delivering unique and effective SEO solutions. Our approach as a top SEO agency includes creating bespoke SEO campaigns that cater specifically to your business goals. Whether you're looking for a small business SEO agency or an organic SEO agency with a broader scope, improveFX is equipped to deliver. Our commitment as an affordable and proficient website SEO agency sets us apart in the competitive market.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/SEO-Company.webp",
                    alert: "Award winning SEO experts",
                }}
                contentListing={0}
                buttonData={{
                    buttonText: "Start your journey",
                    action: "#",
                }}
            />

            <TestimonialsSlider />
            <section>
                <div
                    className=" bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0"
                    style={{ borderRadius: 20 }}
                >
                    <ImageWithSideSortContent
                        headingHighlight={"Start your SEO project"}
                        heading={"<h2>Want to work with me?</h2>"}
                        content={
                            "<p>Get in touch so I can learn more about your brand and project requirements. Unfortunately, I have limited availability, so book a call to make sure you don't miss out.</p>"
                        }
                        ImageData={{
                            url: "https://admin.improvefx.com/wp-content/uploads/2024/03/SEO-services-agency.webp",
                            alert: "Award winning SEO experts",
                        }}
                        contentListing={0}
                        buttonData={{
                            buttonText: "Contact >",
                            action: "#",
                        }}
                    />
                </div>
            </section>

            <BrandSliderWithSideContent />

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

export default SeoApproach;
