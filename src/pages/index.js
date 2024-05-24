import React from "react";
import ImageWithSideContent from "@/components/organisms/imageWithSideContent";
import BrandSlider from "@/components/organisms/brandSlider";
import HeaderDescContainer from "@/components/molecules/headerDescContainer";
import IconCardContainer from "@/components/molecules/IconCardContainer";
import CaseStudiesSlider from "@/components/organisms/caseStudiesSlider";
import ThemeButton from "@/components/atom/themeButton";
import ContentWithSidePoint from "@/components/organisms/contentWithSidePoints";
import TestimonialsSlider from "@/components/organisms/testimonialsSlider";
import ImageWithSideSortContent from "@/components/organisms/imageWithSideSortContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import BlogCardContainer from "../components/molecules/blogCardContainer";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import {registeredPages} from "../utils/constants";
import {reducers} from "../redux/reducers";
import {checkNotUndefined, loadImageFromData} from "../utils/globalFunctions";
import {useSelector} from "react-redux";

const App = () => {
    const { currentPageData} = useSelector(state => state[reducers.SITE_DATA]);
    const pageData = currentPageData.page !== undefined ? currentPageData.page[registeredPages.HOMEPAGE] : {};

    return(
        <Template pageName={registeredPages.HOMEPAGE}>
            <ImageWithSideContent
                headingHighlight={pageData.hpHh1}
                heading={pageData.hpHeading1}
                content={pageData.hpPc1}
                ImageData={  {
                    url: loadImageFromData(pageData.hpImage1),
                    alert: "Award winning SEO experts",
                }}
                contentListing={0}
                buttonData={{
                    buttonText: pageData.hpBannerButtonLabel,
                    action: pageData.hpBannerButtonLink
                }}
            />

            <BrandSlider/>

            <HeaderDescContainer
                highligter={pageData.hpHh2}
                header={pageData.hpHeading2}
                desc={pageData.hpPc2}
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

            {
                checkNotUndefined(pageData.hpContentArea1) && (pageData.hpContentArea1).map((data, index) =>  <ImageWithSideContent
                    headingHighlight={data.hpHh3}
                    heading={data.hpHeading3}
                    content={data.hpPc3}
                    ImageData={{
                        url: loadImageFromData(data.hpImage2),
                        alert: "Award winning SEO experts",
                    }}
                    contentListing={index%2}
                    buttonData={{
                        buttonText: "Let's go >",
                        action: "#",
                    }}
                    key={index}
                />)
            }
            <ContentWithSideRowCounts/>

            <HeaderDescContainer
                highligter={pageData.hpHh4}
                header={pageData.hpHeading4}
                desc={pageData.hpPc4}
            />

            <CaseStudiesSlider/>

            <ContentWithSidePoint
                headerDetails={{
                    highligter: pageData.hpHh5,
                    header:pageData.hpHeading5,
                    desc: pageData.hpPc5,
                    textAlignCenter: false,
                }}
                buttonDetails={{
                    text: pageData.hpButtonLabel2,
                    action: pageData.hpButtonLink2,
                }}
                pointsArray={pageData.hpPointComp}
            />

            <TestimonialsSlider/>

            <section>
                <div
                    className=" bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0"
                    style={{borderRadius: 20}}
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

            <div className="row align-items-center pt-5">

                <div className="col-lg-6 col-md-8">
                    <h2>Explore Our Expert SEO Blog Posts</h2>
                </div>

                <div className="col-lg-6 col-md-4 text-lg-center my-auto d-flex justify-content-end">
                    <ThemeButton text={"Visit our blog >"}/>
                </div>
            </div>
            <div className="row">
                <BlogCardContainer
                    image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"}
                    category={"Category name"}
                    avtar={"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Female-Avatar1.svg"}
                    header={"5 great content marketing ideas to for your Instagram account"}
                    desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                />
                <BlogCardContainer
                    image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"}
                    category={"Category name"}
                    avtar={"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Female-Avatar1.svg"}
                    header={"5 great content marketing ideas to for your Instagram account"}
                    desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                />
                <BlogCardContainer
                    image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"}
                    category={"Category name"}
                    avtar={"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Female-Avatar1.svg"}
                    header={"5 great content marketing ideas to for your Instagram account"}
                    desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                />

            </div>


            <BrandSliderWithSideContent/>

            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6 col-sm-12">
                    <h2>
                        Subscribe to our newsletter and stay updated on the latest news
                    </h2>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 ps-lg-5 ps-md-5 ">
                    <SimpleNewsLetterForm/>
                </div>
            </div>

        </Template>
    );
};

export default App;
