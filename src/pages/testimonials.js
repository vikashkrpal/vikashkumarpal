import React from 'react';
import Template from "../components/atom/template";
import BrandSlider from "../components/organisms/brandSlider";
import TestimonialCardContainer from "../components/molecules/testimonialCardContainer";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import SimpleNewsLetterForm from "../components/molecules/simpleNewsLetterForm";
import ImageWithSideSortContent from "../components/organisms/imageWithSideSortContent";
import HeaderWithSideButton from "../components/molecules/headerWithSideButton";
import ContentWithSideRowCounts from '@/components/organisms/ContentWithSideRowCounts';

const Testimonials = () => {
    return (
        <Template urlBar={true} urlStrings={[
            {Testimonials: "null"}
        ]}
                  urlDetails={{
                      title:'Testimonials',
                      desc:"Elevate your online presence with our top-notch SEO services. As a leading organic SEO services company, we specialize in providing professional and tailored solutions to boost your websites visibility. Trust our experienced team to optimize your online strategy and enhance your businesss digital success."
                  }}
        >
            <ContentWithSideRowCounts />

            <BrandSlider />

           <HeaderWithSideButton
               header={"<h2>Voices of Trust: Why Clients Choose improveFX for SEO Solutions</h2>"}
               buttonDetails={{ buttonText:"Start your seo journey today >", action:'#' }}
               desc={"<p>Explore Voices of Trust to see why improveFX is the chosen partner for SEO. Our clients stories reflect our commitment to authentic, result-driven SEO solutions that foster business growth and digital success.</p>"}
               />
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

            <BrandSliderWithSideContent addClass='mt-5 mb-3' />

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
