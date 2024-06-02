import Template from "@/components/atom/template";
import BlogCardContainer from "@/components/molecules/blogCardContainer";
import HeaderDescContainer from "@/components/molecules/headerDescContainer";
import SimpleNewsLetterForm from "@/components/molecules/simpleNewsLetterForm";
import BrandSliderWithSideContent from "@/components/organisms/brandSliderWithSideContent";
import Image from "next/image";
import React from "react";
import ThemeButton from "../../../components/atom/themeButton";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import {getPageQuery} from "../../../services/queryLibrary";
import {registeredPages} from "../../../utils/constants";
import {loadHomePageData} from "../../../services/siteServies";
import {checkNotUndefined, formatDate, loadImageFromData} from "../../../utils/globalFunctions";


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

    let testimonialsDetails = {
        comment:
            " Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ",
        image:
            "https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg",
        name: "Maia Kennedy",
        position: "May 20, 2021 | 2 min read ",
    };
  return (
    <Template currentPageData={currentPageData} slug={registeredPages.AUTHOR}>
        <div style={{ width: '100%', height: 300, overflow:'hidden', borderBottom:1, borderRadius:20, marginTop:-20 }} >
            <div style={{ position: "relative", width: "100%", height: "100%",  }}>
                <Image
                    src={"https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"}
                    layout="fill" objectFit="cover"
                />
            </div>
        </div>
        <div className="card p-4 mx-lg-4 mx-md-3 mx-1 responsive-blog-hero" style={{ borderRadius:20 }}>
            <div className="row align-items-start d-flex justify-content-center">
                <div className="col-lg-auto col-md-auto mt-3">
                    <Image
                        src={loadImageFromData(pageVars.avatar.url)}
                        width={110}
                        height={110}
                        className="img-fluid rounded-circle"
                        alt="Client Avatar Icon"
                    />{" "}
                </div>
                <div className="col-lg-8 col-md-12 mt-3">
                            <h3 className="mt-0 mb-2 font-b">{pageVars.name}</h3>
                            <p>
                                {pageVars.description}
                            </p>
                    <div className="">
                        {
                            [
                                {
                                    title:<FaInstagram />,
                                    link:'https://www.insta.com/'+pageVars.name
                                },{
                                title:<FaTwitter />,
                                link:'https://twitter.com/'+pageVars.name
                            },{
                                title:<FaFacebook />,
                                link:'https://facebook.com/'+pageVars.name
                            },{
                                title:<FaLinkedin />,
                                link:'https://www.linkedin.com/'+pageVars.name
                            }
                            ].map((iconDetails, index) => <Link key={index} href={iconDetails.link} className="elementor-icon hover-dark me-4">{iconDetails.title}</Link>)
                        }


                    </div>
                </div>

                <div className="col-lg-auto col-md-12 col-sm-12 mt-3">
                    <div className="d-flex justify-content-lg-end align-items-lg-end">
                        <ThemeButton text={"Book a strategic call >"} href={"#"} addClass="" />
                    </div>
                </div>
            </div>
        </div>

        <HeaderDescContainer
        header={`<h2>Blogs by ${pageVars.name} </h2>`}
        desc={blogPageVars.blogNewsletterPc}

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
