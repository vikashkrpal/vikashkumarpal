import React from 'react';
import Template from "../components/atom/template";
import BrandSlider from "../components/organisms/brandSlider";
import ThemeButton from "../components/atom/themeButton";
import TestimonialCardContainer from "../components/molecules/testimonialCardContainer";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import ImageWithSideSortContent from "../components/organisms/imageWithSideSortContent";

const Testimonials = () => {
    return (
        <Template urlBar={true} urlStrings={[
            {testimonials: "null"}
        ]}>
            <BrandSlider />

            <div className="row align-items-center pt-5">

                <div className="col-lg-6 col-md-8">
                    <h2>Voices of Trust: Why Clients Choose improveFX for SEO Solutions</h2>
                    <p>Explore Voices of Trust to see why improveFX is the chosen partner for SEO. Our clients stories reflect our commitment to authentic, result-driven SEO solutions that foster business growth and digital success.</p>
                </div>

                <div className="col-lg-6 col-md-4 text-lg-center my-auto d-flex justify-content-end">
                    <ThemeButton text={"Start your seo journey today >"} addStyle={{ height:50,fontSize:20 }} href={"#"} />
                </div>
            </div>
           <div className="row">
               <TestimonialCardContainer testimonialsDetails={{
                   comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
                   image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
                   name:'Maia Kennedy',
                   position:'Founder | ILAMRA '
               }} col={" col-lg-4 col-md-6 col-sm-8 "} />
               <TestimonialCardContainer testimonialsDetails={{
                   comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
                   image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
                   name:'Maia Kennedy',
                   position:'Founder | ILAMRA '
               }} col={" col-lg-4 col-md-6 col-sm-8 "} />
               <TestimonialCardContainer testimonialsDetails={{
                   comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
                   image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
                   name:'Maia Kennedy',
                   position:'Founder | ILAMRA '
               }} col={" col-lg-4 col-md-6 col-sm-8 "} />
               <TestimonialCardContainer testimonialsDetails={{
                   comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
                   image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
                   name:'Maia Kennedy',
                   position:'Founder | ILAMRA '
               }} col={" col-lg-4 col-md-6 col-sm-8 "} />
               <TestimonialCardContainer testimonialsDetails={{
                   comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
                   image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
                   name:'Maia Kennedy',
                   position:'Founder | ILAMRA '
               }} col={" col-lg-4 col-md-6 col-sm-8 "} />
           </div>

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
    )
};

export default Testimonials;
