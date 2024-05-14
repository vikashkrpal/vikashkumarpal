import Template from "@/components/atom/template";
import BlogCardContainer from "@/components/molecules/blogCardContainer";
import HeaderDescContainer from "@/components/molecules/headerDescContainer";
import SimpleNewsLetterForm from "@/components/molecules/simpleNewsLetterForm";
import BrandSliderWithSideContent from "@/components/organisms/brandSliderWithSideContent";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <Template>
        <div>
            <Image src={"https://ncmaz-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F459225%2Fpexels-photo-459225.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75"}
            width={"1000"}
            height={150}
            className=" "
            />
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
