import React from 'react';
import ImageWithSideSortContent from "./imageWithSideSortContent";
import {is_not_null} from "../../utils/globalFunctions";
import ThemeButton from "../atom/themeButton";
import Image from "next/image";
import image from "../../asserts/slider-background.png";


const VerticalSwiper = () => {

    const ImageWithSideSortContentWithBackgroundImage = ({ headingHighlight=null, heading=null, content=null, ImageData=null, contentListing=0, buttonData={buttonText:'Get Started Now! >', action:'#'} }) => {
        return  <div
            className="bg-black p-2 px-4 mt-5"
            style={{
                backgroundImage: `url('${image.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                marginBottom:-50,
                borderRadius: 20
            }}

        >
            <div className="row align-items-center px-0 pt-2 pt-lg-0 pt-md-0">
            <div className="col-lg-7 hero-section-1-custom  my-2">
                {headingHighlight != null && <span className="mb-3 theme-color">{headingHighlight}</span>}
                {is_not_null(heading) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: heading }} /> }
                {is_not_null(content) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: content }} /> }
                <ThemeButton text={buttonData.buttonText} addStyle={{  minWidth:'30%', fontSize:18 }} href={buttonData.action} />
            </div>
            <div className={"col-lg-5 py-3 my-auto d-flex justify-content-center "+(contentListing == 1 && "order-lg-first")}>
                {is_not_null(ImageData) && <Image src={ImageData.url} alt={ImageData.altText} height="450" width="450" className="img-fluid" />}
            </div>
        </div>
        </div>
    }


    return (
        <div className={"mt-5"}>
            <section    style={{
                zIndex: -1,
            }} className={"section-slider"} >

                    <ImageWithSideSortContentWithBackgroundImage
                        heading={"<h2>Want to work with me?</h2>"}
                        content={
                            "<p>Get in touch so I can learn more about your brand and project requirements. Unfortunately, I have limited availability, so book a call to make sure you don't miss out.</p>"
                        }
                        ImageData={{
                            url: "https://admin.improvefx.com/wp-content/uploads/2024/03/SEO-services-agency.webp",
                            alert: "Award winning SEO experts",
                        }}
                        contentListing={1}
                        buttonData={{
                            buttonText: "Contact >",
                            action: "#",
                        }}

                    />
            </section>
            <section
                className={"section-slider"}
                style={{
                    zIndex: -2,
                }} >
                    <ImageWithSideSortContentWithBackgroundImage
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
            </section>
            <section
                className={"section-slider"}

                style={{
                    zIndex: -3,
                }} >
                    <ImageWithSideSortContentWithBackgroundImage
                        heading={"<h2>Want to work with me?</h2>"}
                        content={
                            "<p>Get in touch so I can learn more about your brand and project requirements. Unfortunately, I have limited availability, so book a call to make sure you don't miss out.</p>"
                        }
                        ImageData={{
                            url: "https://admin.improvefx.com/wp-content/uploads/2024/03/SEO-services-agency.webp",
                            alert: "Award winning SEO experts",
                        }}
                        contentListing={1}
                        buttonData={{
                            buttonText: "Contact >",
                            action: "#",
                        }}

                    />
            </section>
        </div>
    );
};

export default VerticalSwiper;
