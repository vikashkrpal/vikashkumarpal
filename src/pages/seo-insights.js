import BlogCardContainer from "@/components/molecules/blogCardContainer";
import HeaderDescContainer from "@/components/molecules/headerDescContainer";
import Header from "./layouts/header";
import NewLetterComponent from "@/components/organisms/newLetterComponent";
import Footer from "./layouts/footer";


const Blog = () => {
    return <>
    <Header />
    <NewLetterComponent
    heading="Stay Ahead in SEO: Subscribe Now"
    desc={"<p>Get the latest SEO tips and updates straight to your inbox. Subscribe to our newsletter and never miss out on valuable insights.</p>"}
    imageUrl={"https://admin.improvefx.com/wp-content/uploads/2024/02/market-leader-with-seo-feature-image.png"}
    />
    <HeaderDescContainer
    header={"Explore Our Expert SEO Blog Posts"}
    desc={"<p>Browse our collection of SEO blog posts to gain deeper insights into the world of digital marketing. Our articles showcase our expertise and offer practical advice for businesses and SEO enthusiasts.</p>"}
    />

        <section className="staff-card container">
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

        <Footer />
    </>
}

export default Blog;
