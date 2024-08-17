import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import HeaderDescContainer from "../molecules/headerDescContainer";
import TestimonialCardContainer from "../molecules/testimonialCardContainer";

// Ensure that jQuery is available in the global scope
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// Dynamically import OwlCarousel to prevent server-side rendering
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const TestimonialsSlider = ({ currentPageData }) => {

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
        items: 1.1,
      },
      600: {
        items: 1.2,
      },
      1000: {
        items: 2.2,
      },
    },
  };

  const items = currentPageData.testimonialSlider.clientTestimonials.testimonialCards.map((card,index) =>  <div key={index} className="my-5 mx-lg-2">
          <TestimonialCardContainer testimonialsDetails={{
              comment: card.testimonialContent,
              image: card.clientIcon.mediaItemUrl ,
              name: card.clientName,
              position: card.clientDesignation
          }}  />
      </div>)


  return (
    <section>
      <HeaderDescContainer
        highligter={currentPageData.testimonialSlider.clientTestimonials.testimonialHeadingHighlight}
        header={currentPageData.testimonialSlider.clientTestimonials.testimonialHeading}
        desc={currentPageData.testimonialSlider.clientTestimonials.testimonialParagraphContent}
        addClass={"mt-2"}
        showButton={true}
        buttonData={{
            buttonText:'Client Reviews!',
            action:'/testimonials'
        }}
      />

      <OwlCarousel className="owl-theme" {...options}>
        {items}
      </OwlCarousel>
    </section>
  );
};

export default TestimonialsSlider;
