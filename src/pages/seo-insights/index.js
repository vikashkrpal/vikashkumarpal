import dynamic from "next/dynamic";
import React from "react";
import { getPageQuery } from "../../services/queryLibrary";
import { registeredPages } from "../../utils/constants";

// Dynamically imported components
const BlogCardContainer = dynamic(() => import("../../components/molecules/blogCardContainer"));
const HeaderDescContainer = dynamic(() => import("../../components/molecules/headerDescContainer"));
const NewLetterComponent = dynamic(() => import("../../components/organisms/newLetterComponent"));
const Template = dynamic(() => import("../../components/atom/template"));
const { loadHomePageData } = dynamic(() => import("../../services/siteServies"));
const { checkNotUndefined, formatDate, loadImageFromData } = dynamic(() => import("../../utils/globalFunctions"));


export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.BLOG));
    return {
        props: {
            currentPageData,
        },
    };
}

const Blog = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.BLOG]
    return   <Template
        urlStrings={[
            {'SEO Insights':'null'},
        ]} urlBar={true} urlDetails={{
        title:[currentPageData.page.title],
        desc: pageVars.blogBannerPc
    }}
        currentPageData={currentPageData}
    >

        <div className={"mt-lg-5 mt-md-5"}  />
        <NewLetterComponent
            heading={pageVars.blogNewsletterHeading}
            desc={pageVars.blogNewsletterPc}
            imageUrl={loadImageFromData(pageVars.blogImage1)}
        />
        <HeaderDescContainer
            header={pageVars.blogHeading}
            desc={pageVars.blogPc}
        />

        <section className="staff-card">
            <div className="row">
                {
                    checkNotUndefined(currentPageData.posts) && (currentPageData.posts.edges).map((post,index) => <BlogCardContainer
                        image={post.node.featuredImage.node.mediaItemUrl}
                        altText={post.node.featuredImage.node.altText}
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


    </Template>
}

export default Blog;
