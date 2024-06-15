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
import {checkNotUndefined, formatDate, isNotNull, loadImageFromData} from "../../../utils/globalFunctions";


export async function getServerSideProps(context) {
    const { slug } = context.params;
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.CATEGORY, slug));
    // console.log("reyurn =", currentPageData)
    return {
        props: {
            currentPageData
        },
    };
}


const BlogCategory = ({ currentPageData }) => {
    const pageVars = currentPageData[registeredPages.CATEGORY]
    const blogPageVars = currentPageData.page[registeredPages.BLOG]

    if (!isNotNull(pageVars))
        return <h1>No Data Found</h1>
    return   <Template
        urlStrings={[
            {"Seo Insights":'/seo-insights/'},
            {[pageVars.name]:'null'},
        ]} urlBar={true} urlDetails={{
        title:pageVars.name,
        desc: `<p>${pageVars.description}</p>`
    }}
        currentPageData={currentPageData}
        slug={registeredPages.CATEGORY}
    >

        <div className={"mt-lg-5 mt-md-5"} />
        <NewLetterComponent
            heading={blogPageVars.blogNewsletterHeading}
            desc={blogPageVars.blogNewsletterPc}
            imageUrl={loadImageFromData(blogPageVars.blogImage1)}
        />
        <HeaderDescContainer
            header={blogPageVars.blogHeading}
            desc={blogPageVars.blogPc}
        />

        <section className="staff-card">
            <div className="row">
                {
                    checkNotUndefined(pageVars.posts) && (pageVars.posts.edges).map((post,index) => <BlogCardContainer
                        image={post.node.featuredImage.node.mediaItemUrl}
                        category={post.node.categories.nodes[0].name}
                        avtar={post.node.author.node.avatar.url}
                        header={post.node.title}
                        desc={post.node.excerpt}
                        key={index}
                        time={formatDate(post.node.date)}
                        slug={post.node.categories.nodes[0].slug}
                        authorSlug={post.node.author.node.slug}
                        postSlug={post.node.slug}

                    />)
                }

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

export default BlogCategory;
