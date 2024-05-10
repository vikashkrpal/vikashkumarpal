import React from 'react';
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import ImageWithSideIconContents from "../components/molecules/imageWithSideIconContents";
import BrandSlider from "../components/organisms/brandSlider";
import CaseStudiesSlider from "../components/organisms/caseStudiesSlider";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import ImageWithSideSortContent from "../components/organisms/imageWithSideSortContent";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import CaseStudyCardContainer from "../components/molecules/caseStudyCardContaienr";

const CaseStudy = () => {
    return (
        <Template urlStrings={[
            {"Case Study":'null'}
        ]} urlBar={true} urlDetails={{
            title:'Case Study',
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
                highligter={"Real Success Stories"}
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
                        image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fda38b99db3443ac96239_image-blog-post-02-growth-template.jpg"}
                        category={"General Seo"}
                        header={"Legal Mastery"}
                        desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                        column={false}
                    />
                </div>
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
                        image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fda38b99db3443ac96239_image-blog-post-02-growth-template.jpg"}
                        category={"General Seo"}
                        header={"Legal Mastery"}
                        desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                        column={false}
                    />
                </div>
            </div>
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
            <TestimonialsSlider />
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

export default CaseStudy;
