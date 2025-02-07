import React from 'react';
import dynamic from 'next/dynamic';

// Ensure that jQuery is available in the global scope
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}

// Dynamically import OwlCarousel to prevent server-side rendering
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";


const BrandSlider = ({ currentPageData, addClass = "my-5" }) => {
  const clientLogo = currentPageData.siteOption !== undefined ? currentPageData.siteOption.siteOptions.clientLogo : {};

  const options = {
    loop: true,
    nav: false,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };


  return (
    <div className={"row align-items-center " + addClass}>
      <div className="col-sm-12 col-lg-4 col-md-6">
        <div dangerouslySetInnerHTML={{ __html: currentPageData.siteOption.siteOptions.clientsLogoHeading }} />

      </div>
      <div className="col-sm-12 col-lg-8 col-md-6">
        <OwlCarousel className="owl-theme" {...options}>
          {clientLogo.map((image, index) => (
            <div key={index} className="item">
              <Image src={image.mediaItemUrl} width={100} height={20} className={"img-fluid"} alt={image.altText} />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default BrandSlider;
