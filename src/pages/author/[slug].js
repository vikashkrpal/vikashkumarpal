import Template from "@/components/atom/template";
import BlogCardContainer from "@/components/molecules/blogCardContainer";
import HeaderDescContainer from "@/components/molecules/headerDescContainer";
import SimpleNewsLetterForm from "@/components/molecules/simpleNewsLetterForm";
import BrandSliderWithSideContent from "@/components/organisms/brandSliderWithSideContent";
import Image from "next/image";
import React from "react";
import ThemeButton from "../../components/atom/themeButton";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {getPageQuery} from "../../services/queryLibrary";
import {registeredPages} from "../../utils/constants";
import {loadHomePageData} from "../../services/siteServies";
import {checkNotUndefined, formatDate, isNotNull, loadImageFromData} from "../../utils/globalFunctions";
import {BsTwitterX} from "react-icons/bs";


export async function getServerSideProps(context) {
    const { slug } = context.params;
    const pageQuery = getPageQuery(registeredPages.AUTHOR, slug);
    // console.log("query>", pageQuery)

    const currentPageData = await loadHomePageData(pageQuery);

    // console.log("reyurn =", currentPageData)
    return {
        props: {
            currentPageData,
        },
    };



}

const Index = ({ currentPageData }) => {
    const pageVars = currentPageData[registeredPages.AUTHOR]
    const blogPageVars = currentPageData.page[registeredPages.BLOG]
    const authorPageVars = pageVars.authorPage
    if (!isNotNull(pageVars))
        return <h1>No Data Found</h1>
  return (
    <Template currentPageData={currentPageData} slug={registeredPages.AUTHOR}>
        <div style={{ width: '100%', height: 300, overflow:'hidden', borderBottom:1, borderRadius:20, marginTop:-20 }} >
            <div style={{ position: "relative", width: "100%", height: "100%",  }}>
                <Image
                    src={loadImageFromData(authorPageVars.apBg.mediaItemUrl)}
                    layout="fill" objectFit="cover"
                />
            </div>
        </div>
        <div className="card p-4 mx-lg-4 mx-md-3 mx-1 responsive-blog-hero" style={{ borderRadius:20 }}>
            <div className="row align-items-start d-flex justify-content-center">
                <div className="col-lg-auto col-md-auto mt-3">
                    <Image
                        src={loadImageFromData(authorPageVars.apImage)}
                        width={110}
                        height={110}
                        className="img-fluid rounded-circle"
                        alt="Client Avatar Icon"
                    />{" "}
                </div>
                <div className="col-lg-8 col-md-12 mt-3">
                            <h1 className="mt-0 mb-2 font-b">{pageVars.name}</h1>
                    <div dangerouslySetInnerHTML={{ __html:authorPageVars.apAbout }} />
                    <div className="">
                        {
                            [
                                {
                                    title:<FaInstagram />,
                                    link:authorPageVars.apSocialMediaProfiles.apInstagram
                                },{
                                title:<BsTwitterX size={15} />,
                                link:authorPageVars.apSocialMediaProfiles.apTwitterX
                            },{
                                title:<FaFacebook />,
                                link:authorPageVars.apSocialMediaProfiles.apFacebook
                            },{
                                title:<FaLinkedin />,
                                link:authorPageVars.apSocialMediaProfiles.apLinkedin
                            }
                            ].map((iconDetails, index) => <a key={index} href={iconDetails.link} className="elementor-icon hover-dark me-4" target={"_blank"}>{iconDetails.title}</a>)
                        }


                    </div>
                </div>

                <div className="col-lg-auto col-md-12 col-sm-12 mt-3">
                    <div className="d-flex justify-content-lg-end align-items-lg-end">
                        <ThemeButton text={authorPageVars.apCtaButton.apButtonLabel} href={authorPageVars.apCtaButton.apButtonLink} addClass="" />
                    </div>
                </div>
            </div>
        </div>

        <HeaderDescContainer
        header={authorPageVars.apHeading}
        desc={authorPageVars.apParagraphContent}

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
  );
};

export default Index;
