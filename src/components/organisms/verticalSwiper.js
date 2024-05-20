import React from 'react';
import ImageWithSideSortContent from "./imageWithSideSortContent";


const VerticalSwiper = () => {
    return (
        <div className={"mt-5"}>
            <section    style={{
                zIndex: -1,
            }} className={"section-slider"} >
                <div
                    className=" bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0"
                    style={{ borderRadius: 20 }}
                >
                    <ImageWithSideSortContent
                        headingHighlight={"Start your SEO project"}
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
                </div>
            </section>
            <section
                className={"section-slider"}
                style={{
                    zIndex: -2,
                }} >
                <div
                    className=" bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0"
                    style={{ borderRadius: 20 }}
                >
                    <ImageWithSideSortContent
                        headingHighlight={"Start your SEO project"}
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
                </div>
            </section>
            <section
                className={"section-slider"}

                style={{
                    zIndex: -3,
                }} >
                <div
                    className=" bg-dark px-lg-5 px-md-4 px-3 mt-5 pt-3 pt-lg-0"
                    style={{ borderRadius: 20 }}
                >
                    <ImageWithSideSortContent
                        headingHighlight={"Start your SEO project"}
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
                </div>
            </section>
        </div>
    );
};

export default VerticalSwiper;
