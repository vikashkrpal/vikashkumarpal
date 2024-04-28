import Template from "../components/atom/template";
import React from "react";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import HeaderWithSideButton from "../components/molecules/headerWithSideButton";
import IconCardContainer from "../components/molecules/IconCardContainer";
import BrandSlider from "../components/organisms/brandSlider";
import ImageWithSideContent from "../components/organisms/imageWithSideContent";
import ImageWithSideSortContent from "../components/organisms/imageWithSideSortContent";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";


const About = () => {
    return (
        <Template urlBar={true} urlStrings={[
            {About: "null"}
        ]} urlDetails={{
            title:'About',
            desc:"Elevate your online presence with our top-notch SEO services. As a leading organic SEO services company, we specialize in providing professional and tailored solutions to boost your websites visibility. Trust our experienced team to optimize your online strategy and enhance your businesss digital success."
        }}>
            <ContentWithSideRowCounts />

            <HeaderWithSideButton
                header={"<h2>Voices of Trust: Why Clients Choose improveFX for SEO Solutions</h2>"}
                buttonDetails={{ buttonText:"Start your seo journey today >", action:'#' }}
                desc={"<p>Explore Voices of Trust to see why improveFX is the chosen partner for SEO. Our clients stories reflect our commitment to authentic, result-driven SEO solutions that foster business growth and digital success.</p>"}
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
                <BrandSlider />
                <ImageWithSideContent
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
                    contentListing={1}
                />
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
    )
}

export default About;
