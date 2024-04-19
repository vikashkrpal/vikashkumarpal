import React from 'react';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import CaseStudyCardContainer from '../molecules/caseStudyCardContaienr';

// Ensure that jQuery is available in the global scope
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

// Dynamically import OwlCarousel to prevent server-side rendering
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

export default function Slider() {
  // Define carousel options
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
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  // Your item data
  const items = [
    <div key="1" className='my-5 mx-2'>
         <CaseStudyCardContainer
                    image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"}
                    category={"Seo Services"}
                    header={"meeting but exceeding SEO goals."}
                    desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                    column={false}
                    />
    </div>,
    <div key="2" className='my-5 mx-2'>
           <CaseStudyCardContainer
                    image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fda38b99db3443ac96239_image-blog-post-02-growth-template.jpg"}
                    category={"General Seo"}
                     header={"Navigating SEO Success in Immigration Services"}
                    desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
                    column={false}
                    />
    </div>,
     <div key="3" className='my-5 mx-2'>
     <CaseStudyCardContainer
              image={"https://assets-global.website-files.com/5f35521e2ed7d9663ce9aa51/5f3fdbb7f52d14860a91aded_image-blog-post-06-growth-template.jpg"}
              category={"Local Seo"}
              header={"Legal Expertise Meets SEO Mastery"}
              desc={"<p>Lorem ipsum dolor sit amet, consecteturor adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.</p>"}
              column={false}
              />
</div>,
    // Add more items here...
  ];

  return (
    <OwlCarousel className="owl-theme" {...options}>
      {items}
    </OwlCarousel>
  );
}
