import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

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

const Slider = () => {
    const destopSlides = 21; // Show 5 images on desktop
    const mobileSlides = 33.33; // Show 3 images on mobile
    const [centerSlidePercentage, setCenterSlidePercentage] = useState(mobileSlides);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setCenterSlidePercentage(mobileSlides); 
      } else {
        setCenterSlidePercentage(destopSlides); 
      }
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Carousel
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={centerSlidePercentage}
      autoPlay={true}
      interval={2000}
      width={"100%"}
      showStatus={false}
      showIndicators={false} 
      className='mt-5'
    >
      {images.map((image, index) => (
        <div key={index}>
          <Image src={image} alt={`Image ${index + 1}`} width={300} height={200} className='img-fluid' />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
