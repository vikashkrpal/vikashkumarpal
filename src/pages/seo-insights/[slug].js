import React from "react";
import Template from "../../components/atom/template";
import Image from "next/image";
import ThemeButton from "../../components/atom/themeButton";
import { FaHeart } from "react-icons/fa";
import { BiHeart, BiSolidHeartCircle } from "react-icons/bi";
import BlogCardContainer from "../../components/molecules/blogCardContainer";
import BrandSliderWithSideContent from "../../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../../components/molecules/simpleNewsLetterForm";
import {getPageQuery} from "../../services/queryLibrary";
import {registeredPages} from "../../utils/constants";
import {loadHomePageData} from "../../services/siteServies";
import {
  calculateReadTime,
  checkNotUndefined,
  formatDate,
  isNotNull,
  loadImageFromData
} from "../../utils/globalFunctions";
import DarkContentWithSideImage from "../../components/organisms/darkContentWithSideImage";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const currentPageData = await loadHomePageData(getPageQuery(registeredPages.SINGLE_BLOG, slug));
  // console.log("reyurn =", currentPageData)
  return {
    props: {
      currentPageData,
    },
  };
}
const BlogOne = ({ currentPageData }) => {
  const [postLiked, setPostLiked] = React.useState(false);
  const [postCount, setPostCount] = React.useState(35);
  const pageVars = currentPageData[registeredPages.SINGLE_BLOG]


  if (!isNotNull(pageVars))
    return <h1>No Data Found</h1>
  return (
    <Template currentPageData={currentPageData}  slug={registeredPages.SINGLE_BLOG}>
      <div className="w-res-85 mx-auto">
        <section className=" mt-5 mx-auto">
          <Link
            className="badge bg-primary p-2 "
            style={{ borderRadius: 30, fontSize: 15 }}
            href={"/seo-insights/category/"+pageVars.categories.nodes[0].slug}
          >
            {pageVars.categories.nodes[0].name}
          </Link>
          <h1>{pageVars.title}</h1>
          <div dangerouslySetInnerHTML={{ __html:pageVars.excerpt }} />

          <hr />
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 ">
              <div className="row">
                <div className="col-auto my-auto pe-0 ">
                  <Image
                    src={pageVars.author.node.avatar.url}
                    width={55}
                    height={55}
                    className="img-fluid rounded-circle"
                    alt="Client Avatar Icon"
                  />{" "}
                </div>
                <div className="card-title col my-auto">
                  <Link href={"/author/"+pageVars.author.node.slug}>
                  <p className="theme-color my-0 py-0 font-b">
                    {pageVars.author.node.name}
                  </p>
                  </Link>
                  <p
                    className="theme-color2 my-0 py-0"
                    style={{ fontSize: 13 }}
                  >
                    {formatDate(pageVars.date)} | {calculateReadTime(pageVars.content)} min read

                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  row d-lg-flex justify-content-lg-end justify-content-md-end mt-lg-0 mt-md-0 mt-4">
              <div className="col-auto d-lg-flex justify-content-end">
                <ThemeButton href={pageVars.blogPost.blogPostCtaButton.blogPostButtonLink} text={pageVars.blogPost.blogPostCtaButton.blogPostButtonLabel} />
              </div>
              <div
                className="col-auto d-lg-flex justify-lg-content-end align-items-center"
                style={{ borderLeft: "0.2px solid white" }}
              >
                <span style={{ fontSize: 20 }}>
                  {postLiked ? (
                    <FaHeart
                      style={{ fontSize: 26, cursor: "pointer" }}
                      onClick={() => {
                        setPostLiked(!postLiked);
                        setPostCount(postCount - 1);
                      }}
                    />
                  ) : (
                    <BiHeart
                      style={{ fontSize: 26, cursor: "pointer" }}
                      onClick={() => {
                        setPostLiked(!postLiked);
                        setPostCount(postCount + 1);
                      }}
                    />
                  )}
                  &nbsp;{postCount}
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="mt-4 pb-2  mx-auto">
          <div className="text-lg-center pt-4 pb-5">
            <Image
              src={loadImageFromData(pageVars.featuredImage.node.mediaItemUrl)}
              width={1000}
              height={550}
              className="img-fluid mx-auto"
              style={{ borderRadius:20 }}
            />
          </div>
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html:pageVars.content }} />


        </div>

      </div>

      <section>
      <hr />

      <div className=" mx-auto mt-5 " style={{ borderRadius: 20 }}>
          <div className="row align-items-center">
            <div className="col-lg-auto col-md-auto ">
              <Image
                src={pageVars.author.node.avatar.url}
                width={110}
                height={110}
                className="img-fluid rounded-circle"
                alt="Client Avatar Icon"
              />{" "}
            </div>
            <div className="col-lg-10 col-md-7 mt-2 mt-lg-0">
              <div className=" mb-0">
                <p className="font-weight-bold text-secondary mb-0">
                  Written by
                </p>
                <p className="mt-0 mb-2 font-b">{pageVars.author.node.name}</p>
                <p>
                  {pageVars.author.node.description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <DarkContentWithSideImage currentPageData={currentPageData} />
      </section>
      <div>
        <div className="row align-items-center pt-5">
          <div className="col-lg-6 col-md-8">
            <h2>Explore Our Expert SEO Blog Posts</h2>
          </div>

          <div className="col-lg-6 col-md-4 text-lg-center my-auto d-flex justify-content-end">
            <ThemeButton text={"Visit our blog >"} href={"/seo-insights"} />
          </div>
        </div>
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
                slug={post.node.categories.nodes[0].slug}
                authorSlug={post.node.author.node.slug}
                postSlug={post.node.slug}

            />)
          }
        </div>

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
      </div>
    </Template>
  );
};

export default BlogOne;
