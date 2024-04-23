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

const images = [
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
  'https://admin.improvefx.com/wp-content/uploads/2023/12/Ecom-Fashion.webp',
];

const BrandSlider = () => {
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
        items: 4
      },
      1000: {
        items: 6
      }
    }
  };


  return (
    <OwlCarousel className="owl-theme" {...options}>
      {images.map((image, index) => (
        <div key={index} className="item">
          <Image src={image} alt={`Image ${index + 1}`} width={100} height={100} className={"img-fluid"} />
        </div>
      ))}
    </OwlCarousel>
  );
};

export default BrandSlider;
