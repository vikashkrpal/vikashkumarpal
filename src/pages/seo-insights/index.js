import BlogCardContainer from "@/components/molecules/blogCardContainer";
import HeaderDescContainer from "@/components/molecules/headerDescContainer";
import NewLetterComponent from "@/components/organisms/newLetterComponent";
import Template from "../../components/atom/template";
import React from "react";
import {getPageQuery} from "../../services/queryLibrary";
import {registeredPages} from "../../utils/constants";
import {loadHomePageData} from "../../services/siteServies";
import {checkNotUndefined, formatDate, loadImageFromData} from "../../utils/globalFunctions";

export async function getServerSideProps() {
    const pageQuery = getPageQuery(registeredPages.BLOG);
    const currentPageData = await loadHomePageData(pageQuery);

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
            {"SEO Insights":'null'},
        ]} urlBar={true} urlDetails={{
        title:'SEO Insights',
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
                        category={post.node.categories.nodes[0].name}
                        avtar={post.node.author.node.avatar.url}
                        header={post.node.title}
                        desc={post.node.excerpt}
                        key={index}
                        time={formatDate(post.node.date)}
                    />)
                }

            </div>

        </section>


    </Template>
}

export default Blog;
