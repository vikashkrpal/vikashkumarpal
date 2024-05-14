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

const Index = () => {
    let testimonialsDetails = {
        comment:
            " Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ",
        image:
            "https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg",
        name: "Maia Kennedy",
        position: "May 20, 2021 | 2 min read ",
    };
  return (
    <Template>
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
                        src={testimonialsDetails.image}
                        width={110}
                        height={110}
                        className="img-fluid rounded-circle"
                        alt="Client Avatar Icon"
                    />{" "}
                </div>
                <div className="col-lg-8 col-md-7 mt-3">
                            <h3 className="mt-0 mb-2 font-b">Vikash Kumar Pal</h3>
                            <p>
                                Vikash Kumar Pal stands at the helm of ImproveFX as the
                                Co-Founder and CEO. With over 5 years of extensive experience
                                in SEO, Vikash has been instrumental in transforming the
                                online presence of over 50 businesses.
                            </p>
                    <div className="">
                        {
                            [
                                {
                                    title:<FaInstagram />,
                                    link:'https://www.insta.com/'
                                },{
                                title:<FaTwitter />,
                                link:'https://twitter.com/'
                            },{
                                title:<FaFacebook />,
                                link:'https://facebook.com/'
                            },{
                                title:<FaLinkedin />,
                                link:'https://www.linkedin.com/'
                            }
                            ].map((iconDetails, index) => <Link key={index} href={iconDetails.link} className="elementor-icon hover-dark me-4">{iconDetails.title}</Link>)
                        }


                    </div>
                </div>

                <div className="col-auto mt-3">
                    <div className="d-flex justify-content-end align-items-end">
                        <ThemeButton text={"Book a strategic call >"} href={"#"} />
                    </div>
                </div>
            </div>
        </div>

        <HeaderDescContainer
        header={"<h2>Blogs by Vikash Kumar Pal</h2>"}
        desc={
          "<p>Browse our collection of SEO blog posts to gain deeper insights into the world of digital marketing. Our articles showcase our expertise and offer practical advice for businesses and SEO enthusiasts.</p>"
        }
      />

      <section className="staff-card">
        <div className="row">
          <BlogCardContainer
            image={
              "https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"
            }
            category={"Category name"}
            avtar={
              "https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Female-Avatar1.svg"
            }
            header={
              "5 great content marketing ideas to for your Instagram account"
            }
            desc={
              "<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"
            }
          />
          <BlogCardContainer
            image={
              "https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fda38b99db3443ac96239_image-blog-post-02-growth-template.jpg"
            }
            category={"Category name"}
            avtar={
              "https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Female-Avatar1.svg"
            }
            header={
              "Is Snapchat dying? Our analysis to answer this important question"
            }
            desc={
              "<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"
            }
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

export default Index;
