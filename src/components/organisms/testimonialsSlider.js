import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import HeaderDescContainer from "../molecules/headerDescContainer";
import TestimonialCardConatiner from "../molecules/testimonialCardContainer";

// Ensure that jQuery is available in the global scope
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel to prevent server-side rendering
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const TestimonialsSlider = () => {
  const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1.2,
      },
      600: {
        items: 1.6,
      },
      1000: {
        items: 2.3,
      },
    },
  };

  const items = [
    <div key="1" className="my-5 mx-lg-2">
      <TestimonialCardConatiner testimonialsDetails={{
        comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
        image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
        name:'Maia Kennedy',
        position:'Founder | ILAMRA '
      }} />
    </div>,
    <div key="2" className="my-5 mx-lg-2">
       <TestimonialCardConatiner testimonialsDetails={{
        comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
        image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
        name:'Maia Kennedy',
        position:'Founder | ILAMRA '
      }} />
    </div>,
    <div key="3" className="my-5 mx-lg-2">
       <TestimonialCardConatiner testimonialsDetails={{
        comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
        image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
        name:'Maia Kennedy',
        position:'Founder | ILAMRA '
      }} />
    </div>,
    <div key="4" className="my-5 mx-lg-2">
       <TestimonialCardConatiner testimonialsDetails={{
        comment:' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
        image:"https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg" ,
        name:'Maia Kennedy',
        position:'Founder | ILAMRA '
      }} />
    </div>,
  ];

  return (
    <section>
      <HeaderDescContainer
        highligter={"Our Clients Speak"}
        header={"<h2>Hear Directly from Our Satisfied Clients</h2>"}
        desc={
          "<p>Our clients' satisfaction is our biggest endorsement. Read through the genuine testimonials from businesses across various industries, applauding the effectiveness of improveFX's SEO services. From boosting ROI to enhancing online visibility, these testimonials are a true reflection of the value we bring to each project.</p>"
        }
      />

      <OwlCarousel className="owl-theme" {...options}>
        {items}
      </OwlCarousel>
    </section>
  );
};

export default TestimonialsSlider;
