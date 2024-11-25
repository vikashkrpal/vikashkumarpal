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

const BrandSliderWithSideContent = ({addClass="my-5", currentPageData}) => {

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
        <div className={"row align-items-center "+addClass}>
            <div className="col-sm-12 col-lg-4 col-md-6">
                <div className={"mb-2"} dangerouslySetInnerHTML={{ __html:currentPageData.siteOption.siteOptions.seenOnHeading }} />
                <div className={"mb-2"} dangerouslySetInnerHTML={{ __html:currentPageData.siteOption.siteOptions.seenOnDescription }} />

            </div>
            <div className="col-sm-12 col-lg-8 col-md-6">
                <OwlCarousel className="owl-theme" {...options}>
                    {(currentPageData.siteOption.siteOptions.seenOnImages).map((image, index) => (
                        <div key={index} className="item">
                            <Image src={image.mediaItemUrl} alt={image.altText} width={100} height={100} className={"img-fluid"} />
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
};

export default BrandSliderWithSideContent;
