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

const App = () => {

  return (
    <Template>
        <ImageWithSideContent
          headingHighlight={"#1 SEO Company that Gets Results!"}
          heading={
            "<h1>Data-Driven Custom SEO Services That Drive Revenue!</h1>"
          }
          content={
            "<p>Choose improveFX as your SEO agency and unlock high-impact search results by dominating your market with custom result driven SEO strategies to take your business to new heights with our award-winning SEO Experts.</p>"
          }
          ImageData={{
            url: "https://admin.improvefx.com/wp-content/uploads/2024/03/award-winning-seo-experts-1.webp",
            alert: "Award winning SEO experts",
          }}
          contentListing={0}
        />

        <BrandSlider />

        <HeaderDescContainer
          highligter={"Top-Rated Professional SEO Company"}
          header={"<h2>We Help You Define Your SEO Objectives</h2>"}
          desc={
            "<p>Discover unparalleled SEO success with our top-rated professional SEO agency. We specialize in affordable, organic SEO solutions for small to large businesses. Our expert team crafts effective SEO campaigns, enhancing your Google visibility and website performance. Achieve your online visibility goals with our expert SEO team's strategic SEO plans that propel your business objectives forward.</p>"
          }
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

        <ImageWithSideContent
          headingHighlight={"Your Partner for Tailored SEO Solutions"}
          heading={"<h2>Why improveFX Is the Right SEO Agency for You?</h2>"}
          content={
            "<p>improveFX stands out as a professional SEO agency offering top-notch SEO solutions tailored to your needs. As a top SEO agency, we specialize in organic SEO strategies, making us an ideal choice for small businesses and larger enterprises alike. Our affordable SEO agency services are designed to enhance your website's performance, ensuring high rankings in Google searches. Whether you're looking for a small business SEO agency or a comprehensive website SEO agency, improveFX delivers results that matter.</p>"
          }
          ImageData={{
            url: "https://admin.improvefx.com/wp-content/uploads/2024/03/seo-agency.webp",
            alert: "Award winning SEO experts",
          }}
          contentListing={1}
          buttonData={{
            buttonText: "Let's go >",
            action: "#",
          }}
        />

        <ImageWithSideContent
          headingHighlight={
            "Elevate Your Business with Our Expert SEO Campaigns"
          }
          heading={
            "<h2>Top SEO Agency That Put You on Top of Google Search</h2>"
          }
          content={
            "<p>As a leading SEO agency, improveFX is committed to elevating your business to the top of Google search results. Our expert team, known for their effective SEO campaigns, utilizes the latest organic SEO techniques. Being an affordable SEO agency, we provide services that cater to a diverse range of clients, including small business SEO agency needs. Choose improveFX, a google SEO agency that prioritizes your growth and visibility.</p>"
          }
          ImageData={{
            url: "https://admin.improvefx.com/wp-content/uploads/2024/03/Top-SEO-Agency.webp",
            alert: "Award winning SEO experts",
          }}
          buttonData={{
            buttonText: "Start your journey",
            action: "#",
          }}
        />

        <ImageWithSideContent
          headingHighlight={
            "Innovative and Affordable SEO Services for Every Business"
          }
          heading={"<h2>What Makes Our SEO Company Different?</h2>"}
          content={
            "<p>improveFX distinguishes itself as a professional SEO agency by delivering unique and effective SEO solutions. Our approach as a top SEO agency includes creating bespoke SEO campaigns that cater specifically to your business goals. Whether you're looking for a small business SEO agency or an organic SEO agency with a broader scope, improveFX is equipped to deliver. Our commitment as an affordable and proficient website SEO agency sets us apart in the competitive market.</p>"
          }
          ImageData={{
            url: "https://admin.improvefx.com/wp-content/uploads/2024/03/SEO-Company.webp",
            alert: "Award winning SEO experts",
          }}
          contentListing={1}
          buttonData={{
            buttonText: "Start your journey",
            action: "#",
          }}
        />

        <ContentWithSideRowCounts />

        <HeaderDescContainer
          highligter={"Real Success Stories"}
          header={"<h2>improveFX results speak for themselves</h2>"}
          desc={
            "<p>Explore our diverse case studies to witness firsthand the transformative impact of improveFX's SEO services. Each case study is a testament to our strategic approach, showcasing significant increases in traffic, sales, and online presence for our clients. These success stories reflect our commitment to not just meeting but exceeding SEO goals.</p>"
          }
        />

        <CaseStudiesSlider />

        <ContentWithSidePoint
          headerDetails={{
            highligter: "Maximize Your Success with Expert Organic SEO",
            header:
              "<h2> Substantially increase your ROI with Strategic Organic SEO Services</h2>",
            desc: "<p>Elevate your business's online impact with improveFX, a professional SEO agency renowned for delivering strategic organic SEO services. Our approach focuses on creating robust SEO campaigns tailored to your specific market needs, ensuring a significant boost in ROI. As a top SEO agency, we specialize in providing affordable, high-quality services for businesses of all sizes. From small business SEO agency needs to comprehensive website SEO strategies, our commitment to organic growth drives real, sustainable results.</p>",
            textAlignCenter: false,
          }}
          buttonDetails={{
            text: "Book a Strategy Call",
            action: "#",
          }}
          pointsArray={[
            {
              image:
                "https://admin.improvefx.com/wp-content/uploads/2024/03/Proven-Track-Record.webp",
              title: "Proven Track Record",
              desc: "Transform your business with our track record of multiplying traffic and conversions.",
            },
            {
              image:
                "https://admin.improvefx.com/wp-content/uploads/2024/03/Proven-Track-Record.webp",
              title: "Proven Track Record",
              desc: "Transform your business with our track record of multiplying traffic and conversions.",
            },
            {
              image:
                "https://admin.improvefx.com/wp-content/uploads/2024/03/Proven-Track-Record.webp",
              title: "Proven Track Record",
              desc: "Transform your business with our track record of multiplying traffic and conversions.",
            },
            {
              image:
                "https://admin.improvefx.com/wp-content/uploads/2024/03/Proven-Track-Record.webp",
              title: "Proven Track Record",
              desc: "Transform your business with our track record of multiplying traffic and conversions.",
            },
          ]}
        />

        <TestimonialsSlider />

        <section>
          <div
            className="conatiner bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0"
            style={{ borderRadius: 20 }}
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
            <ThemeButton text={"Visit our blog >"} />
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

export default App;
