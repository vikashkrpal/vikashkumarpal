import React from 'react';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from 'next/dynamic';
import CaseStudyCardContainer from '../molecules/caseStudyCardContaienr';
import HeaderDescContainer from "../molecules/headerDescContainer";

// Ensure that jQuery is available in the global scope
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = require('jquery');
}

// Dynamically import OwlCarousel to prevent server-side rendering
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

const CaseStudiesSlider = ({ currentPageData, headingShow = true }) => {

    // Your item data
    const items = currentPageData.siteOption.siteOptions.caseStudyCards.map((caseStudy, index) => <div key={index} className='my-5 mx-2'>
        <CaseStudyCardContainer
            image={caseStudy.caseStudyCardImage.mediaItemUrl}
            altText={caseStudy.caseStudyCardImage.altText}
            category={caseStudy.caseStudyCardCompanyName}
            header={caseStudy.caseStudyCardHeading}
            desc={caseStudy.caseStudyCardDescription}
            column={false}
            caseStudyHighlightResults={caseStudy.caseStudyHighlightResults}
        />
    </div>)

    const options = {
        loop: true,
        nav: false,
        dots: currentPageData.siteOption.siteOptions.caseStudyCards.length > 2,
        margin: 10,
        autoplay: (items.length > 3),
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    };

    return (
        <>
            {headingShow && <HeaderDescContainer
                highligter={currentPageData.siteOption.siteOptions.caseStudyHeadingHighlight}
                header={currentPageData.siteOption.siteOptions.caseStudyHeading}
                desc={currentPageData.siteOption.siteOptions.caseStudyParagraphContent}
                showButton={true}
                buttonData={{
                    buttonText:'See Real SEO Results',
                    action:'/case-study'
                }}
            />}

            <OwlCarousel className="owl-theme" {...options}>
                {items}
            </OwlCarousel>
        </>
    );
}

export default CaseStudiesSlider;
