import React from 'react';
import Template from "../../components/atom/template";
import ContentWithSideRowCounts from "../../components/organisms/ContentWithSideRowCounts";
import HeaderDescContainer from "../../components/molecules/headerDescContainer";
import ImageWithSideSortContent from "../../components/organisms/imageWithSideSortContent";
import ImageWithSideContent from "../../components/organisms/imageWithSideContent";
import BrandSliderWithSideContent from "../../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../../components/molecules/simpleNewsLetterForm";
import TestimonialReviewContainer from "../../components/organisms/testimonialReviewContainer";

const SingleCaseStudy = () => {
    return (
        <Template
            urlStrings={[
                {"Case Study":'/case-study'},
                {"RMC Education’s SEO Revolution: From Local Firm to Market Leader":'null'}
            ]} urlBar={true} urlDetails={{
            title:'RMC Education’s SEO Revolution: From Local Firm to Market Leader',
            desc:'Explore our portfolio to witness the depth and range of our SEO expertise. Each project is a story of challenge, innovation, and success.'
        }}

        >
            <ContentWithSideRowCounts />

            <HeaderDescContainer
                header={"<h2>Milestones in RMC Education's SEO Journey</h2>"}
                desc={
                    "<p>Delve into the story of RMC Education's rise, driven by a tailored SEO strategy that catapulted their online traffic and keyword rankings.</p>"
                }
            />
            <TestimonialReviewContainer />

            <ImageWithSideContent
                headingHighlight={"Your Partner for Tailored SEO Solutions"}
                heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
                content={
                    "<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp",
                    alert: "Award winning SEO experts",
                }}
                contentListing={0}
                buttonData={{
                    buttonText: "Let's go >",
                    action: "#",
                }}
            />
            <ImageWithSideContent
                headingHighlight={"Your Partner for Tailored SEO Solutions"}
                heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
                content={
                    "<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp",
                    alert: "Award winning SEO experts",
                }}
                contentListing={1}
                buttonData={{
                    buttonText: "Let's go >",
                    action: "#",
                }}
            />
            <ImageWithSideContent
                headingHighlight={"Your Partner for Tailored SEO Solutions"}
                heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
                content={
                    "<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp",
                    alert: "Award winning SEO experts",
                }}
                contentListing={0}
                buttonData={{
                    buttonText: "Let's go >",
                    action: "#",
                }}
            />
            <ImageWithSideContent
                headingHighlight={"Your Partner for Tailored SEO Solutions"}
                heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
                content={
                    "<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp",
                    alert: "Award winning SEO experts",
                }}
                contentListing={1}
                buttonData={{
                    buttonText: "Let's go >",
                    action: "#",
                }}
            />
            <ImageWithSideContent
                headingHighlight={"Your Partner for Tailored SEO Solutions"}
                heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
                content={
                    "<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp",
                    alert: "Award winning SEO experts",
                }}
                contentListing={0}
                buttonData={{
                    buttonText: "Let's go >",
                    action: "#",
                }}
            />
            <ImageWithSideContent
                headingHighlight={"Your Partner for Tailored SEO Solutions"}
                heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
                content={
                    "<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"
                }
                ImageData={{
                    url: "https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp",
                    alert: "Award winning SEO experts",
                }}
                contentListing={1}
                buttonData={{
                    buttonText: "Let's go >",
                    action: "#",
                }}
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
    );
};

export default SingleCaseStudy;
