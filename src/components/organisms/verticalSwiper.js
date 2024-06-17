import React from 'react';
import ImageWithSideSortContent from "./imageWithSideSortContent";
import {isNotNull, loadImageFromData} from "../../utils/globalFunctions";
import ThemeButton from "../atom/themeButton";
import Image from "next/image";
import image from "../../asserts/slider-background.png";
import Template from "../atom/template";
import HeaderDescContainer from "../molecules/headerDescContainer";


const VerticalSwiper = ({ sliderData = []}) => {

    const sliderDataSize = sliderData.length
    const ImageWithSideSortContentWithBackgroundImage = ({
                                                             headingHighlight = null,
                                                             heading = null,
                                                             content = null,
                                                             ImageData = null,
                                                             contentListing = 0,
                                                             buttonData = {
                                                                 buttonText: 'Get Started Now! >',
                                                                 action: '#'
                                                             }
                                                         }) => {
        return <div
            className="bg-black p-2 px-4"
            style={{
                backgroundImage: `url('${image.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
                marginBottom: -50,
                borderRadius: 20
            }}

        >
            <div className="row align-items-center px-0 pt-2 pt-lg-0 pt-md-0">
                <div className="col-lg-7 hero-section-1-custom  my-2">
                    {headingHighlight != null && <span className="mb-3 theme-color">{headingHighlight}</span>}
                    {isNotNull(heading) && <div className="mx-auto" dangerouslySetInnerHTML={{__html: heading}}/>}
                    {isNotNull(content) && <div className="mx-auto" dangerouslySetInnerHTML={{__html: content}}/>}
                    <ThemeButton text={buttonData.buttonText} addStyle={{minWidth: '30%', fontSize: 18}}
                                 href={buttonData.action}/>
                </div>
                <div
                    className={"col-lg-5 py-3 my-auto d-flex justify-content-center " + (contentListing == 1 && "order-lg-first")}>
                    {isNotNull(ImageData) &&
                    <Image src={ImageData.url} alt={ImageData.altText} height="450" width="450" className="img-fluid"/>}
                </div>
            </div>
        </div>
    }


    return (
        <div className={"slider-container"}>
            {
                sliderDataSize > 0 && sliderData.map((data,index) =>  <section style={{
                    zIndex: (sliderDataSize-index),
                }} className={"section-slider "} key={index}>
                    <ImageWithSideSortContentWithBackgroundImage
                        heading={data.header}
                        content={data.desc}
                        ImageData={{
                            url: loadImageFromData(data.image),
                            altText: data.image.altText,
                        }}
                        contentListing={index%2}
                        buttonData={{
                            buttonText: data.button.buttonText,
                            action: data.button.action,
                        }}

                    />
                </section>)
            }



        </div>
    );
};

export default VerticalSwiper;
