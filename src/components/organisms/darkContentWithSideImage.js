import React from 'react';
import ImageWithSideSortContent from "./imageWithSideSortContent";
import {loadImageFromData} from "../../utils/globalFunctions";

const DarkContentWithSideImage = ({ currentPageData }) => {
    return <section>
        <div className="bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0" style={{ borderRadius: 20 }}>
            <ImageWithSideSortContent
                headingHighlight={currentPageData.siteOption.siteOptions.ctaHighlightTxt}
                heading={currentPageData.siteOption.siteOptions.ctaHeading}
                content={currentPageData.siteOption.siteOptions.ctaParaContent}
                ImageData={{
                    url: loadImageFromData(currentPageData.siteOption.siteOptions.ctaImage),
                    altText: currentPageData.siteOption.siteOptions.ctaImage.altText,
                }}
                contentListing={0}
                buttonData={{
                    buttonText: currentPageData.siteOption.siteOptions.ctaButtonLabel,
                    action: currentPageData.siteOption.siteOptions.ctaButtonLink,
                }}
                addClass="mt-2"
            />
        </div>
    </section>
};

export default DarkContentWithSideImage;
