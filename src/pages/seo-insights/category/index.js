import BlogCardContainer from "@/components/molecules/blogCardContainer";
import HeaderDescContainer from "@/components/molecules/headerDescContainer";
import NewLetterComponent from "@/components/organisms/newLetterComponent";
import Template from "@/components/atom/template";
import React from "react";
import BrandSliderWithSideContent from "../../../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../../../components/molecules/simpleNewsLetterForm";
import {getPageQuery} from "../../../services/queryLibrary";
import {registeredPages} from "../../../utils/constants";
import {loadHomePageData} from "../../../services/siteServies";


export async function getServerSideProps() {
    const pageQuery = getPageQuery(registeredPages.AUTHOR);
    const currentPageData = await loadHomePageData(pageQuery);

    return {
        props: {
            currentPageData,
        },
    };
}


const Blog = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.AUTHOR]

    return   <Template
        urlStrings={[
            {"General SEO":'null'},
        ]} urlBar={true} urlDetails={{
        title:'General SEO',
        desc: pageVars.blogBannerPc
    }}
        currentPageData={currentPageData}
    >

        <div className={"mt-lg-5 mt-md-5"} />
        <NewLetterComponent
            heading="Stay Ahead in SEO: Subscribe Now"
            desc={"<p>Get the latest SEO tips and updates straight to your inbox. Subscribe to our newsletter and never miss out on valuable insights.</p>"}
            imageUrl={"https://admin.improvefx.com/wp-content/uploads/2024/02/market-leader-with-seo-feature-image.png"}
        />
        <HeaderDescContainer
            header={"<h2>Explore Our Expert SEO Blog Posts</h2>"}
            desc={"<p>Browse our collection of SEO blog posts to gain deeper insights into the world of digital marketing. Our articles showcase our expertise and offer practical advice for businesses and SEO enthusiasts.</p>"}
        />

        <section className="staff-card">
            <div className="row">
                <BlogCardContainer
                    image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"}
                    category={"Category name"}
                    avtar={"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Female-Avatar1.svg"}
                    header={"5 great content marketing ideas to for your Instagram account"}
                    desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                />
                <BlogCardContainer
                    image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fda38b99db3443ac96239_image-blog-post-02-growth-template.jpg"}
                    category={"Category name"}
                    avtar={"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Female-Avatar1.svg"}
                    header={"Is Snapchat dying? Our analysis to answer this important question"}
                    desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                />

            </div>

        </section>
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
}

export default Blog;
