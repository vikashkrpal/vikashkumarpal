import React from 'react';
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../components/molecules/imageWithSideIconContents";
import BrandSlider from "../components/organisms/brandSlider";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import CaseStudiesSlider from "../components/organisms/caseStudiesSlider";
import ImageWithSideSortContent from "../components/organisms/imageWithSideSortContent";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import IconCardContainer from "../components/molecules/IconCardContainer";
import ThemeButton from "../components/atom/themeButton";
import IconCardWithoutPointsContainer from "../components/molecules/IconCardWithoutPointsContainer";

const WorkWithMe = () => {
    return (
        <Template urlStrings={[
            {"Work With Me":'null'}
        ]} urlBar={true} urlDetails={{
            title:'Work With Me',
            desc:'Explore our portfolio to witness the depth and range of our SEO expertise. Each project is a story of challenge, innovation, and success.'
        }} >
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
            />
            <BrandSlider />

            <HeaderDescContainer
                highligter={"Top-Rated Professional SEO Company"}
                header={"<h2>We Help You Define Your SEO Objectives</h2>"}
                desc={
                    "<p>Discover unparalleled SEO success with our top-rated professional SEO agency. We specialize in affordable, organic SEO solutions for small to large businesses. Our expert team crafts effective SEO campaigns, enhancing your Google visibility and website performance. Achieve your online visibility goals with our expert SEO team's strategic SEO plans that propel your business objectives forward.</p>"
                }
            />

            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <IconCardContainer
                        icon={
                            "https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"
                        }
                        heading={"SEO Audit"}
                        desc={
                            "<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"
                        }
                        listData={[
                            "New opportunities for freshers",
                            "Identify growth opportunities",
                            "Uncover hidden website issues",
                        ]}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <IconCardContainer
                        icon={
                            "https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"
                        }
                        heading={"SEO Audit"}
                        desc={
                            "<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"
                        }
                        listData={[
                            "New opportunities for freshers",
                            "Identify growth opportunities",
                            "Uncover hidden website issues",
                        ]}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                    <IconCardContainer
                        icon={
                            "https://admin.improvefx.com/wp-content/uploads/2023/12/SEO-Audit.webp"
                        }
                        heading={"SEO Audit"}
                        desc={
                            "<p>Elevate your website's performance with our comprehensive SEO audit, uncovering valuable insights and strategic paths to outshine competitors and boost rankings.</p>"
                        }
                        listData={[
                            "New opportunities for freshers",
                            "Identify growth opportunities",
                            "Uncover hidden website issues",
                        ]}
                    />
                </div>
            </div>

            <HeaderDescContainer
                highligter={"Real Success Stories"}
                header={"<h2>improveFX results speak for themselves</h2>"}
                desc={
                    "<p>Explore our diverse case studies to witness firsthand the transformative impact of improveFX's SEO services. Each case study is a testament to our strategic approach, showcasing significant increases in traffic, sales, and online presence for our clients. These success stories reflect our commitment to not just meeting but exceeding SEO goals.</p>"
                }
            />
            <CaseStudiesSlider />

            <section>
            <div className="row mt-5 align-items-center">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <h2>Features to power-up your business</h2>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className="row mt-lg-0 mt-3 d-lg-flex justify-content-end">
                        <div className="col-auto ">
                            <ThemeButton text={"Get Started >"}  href={"#"} />
                        </div>
                        <div className="col col-lg-auto ">
                            <ThemeButton text={"Browse all features >"}  href={"#"} />
                        </div>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <IconCardWithoutPointsContainer
                            icon={
                                "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf65136f9b44e9136149_realtime-analytics-icon-advertising-webflow-ecommerce-template.png"
                            }
                            heading={"Realtime analytics"}
                            desc={
                                "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                            }
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <IconCardWithoutPointsContainer
                            icon={
                                "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf6572b2cbe137e35258_user-journey-icon-advertising-webflow-ecommerce-template.png"
                            }
                            heading={"Realtime analytics"}
                            desc={
                                "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                            }
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <IconCardWithoutPointsContainer
                            icon={
                                "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf65604b7716ebd0620b_integrations-icon-advertising-webflow-ecommerce-template.png"
                            }
                            heading={"Realtime analytics"}
                            desc={
                                "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                            }
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <IconCardWithoutPointsContainer
                            icon={
                                "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf650ef08821afac5aad_machine-learning-icon-advertising-webflow-ecommerce-template.png"
                            }
                            heading={"Realtime analytics"}
                            desc={
                                "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                            }
                        />
                    </div>
                </div>

            </section>

            <TestimonialsSlider />
            <section>
                <div
                    className="conatiner bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0"
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

export default WorkWithMe;
