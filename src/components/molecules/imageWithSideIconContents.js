import React from 'react';
import Image from "next/image";
import {is_not_null} from "../../utils/globalFunctions";
import ThemeButton from "../atom/themeButton";
import {FaStar} from "react-icons/fa";

const ImageWithSideIconContents = ({ headingHighlight=null, heading=null, content=null, ImageData=null, contentListing=0, buttonData={buttonText:'Get Started Now! >', action:'#'}, addClass = "mt-5" }) => {
    return <div className={"row align-items-center px-0 pt-2 pt-lg-0 pt-md-0 "+addClass}>
        <div className="col-lg-6 hero-section-1-custom  my-2">
            {headingHighlight != null && <span className="mb-3 theme-color">{headingHighlight}</span>}
            {is_not_null(heading) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: heading }} /> }
            {is_not_null(content) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: content }} /> }
            <div className="row ">
                <div className="col-2 col-lg-1 mt-1">
                    <FaStar size={30} />
                </div>
                <div className="col-10 col-lg-11">
                    <h4 className={"mt-1 mb-1"}>Mission</h4>
                    <p>Our mission is to empower businesses by enhancing their online visibility and search engine rankings,
                        ensuring they not only survive but thrive in the digital age.</p>

                </div>
            </div>
            <div className="row ">
                <div className="col-2 col-lg-1 mt-1">
                    <FaStar size={30} />
                </div>
                <div className="col-10 col-lg-11">
                    <h4 className={"mt-1 mb-1"}>Vision</h4>
                    <p>To be the catalyst for businesses to realize their full online potential and dominate the digital landscape.</p>

                </div>
            </div>
            <ThemeButton text={buttonData.buttonText} addStyle={{  minWidth:'30%', fontSize:18 }} href={buttonData.action} />
        </div>
        <div className={"col-lg-6 py-3 my-auto d-flex justify-content-center "+(contentListing == 1 && "order-lg-first")}>
            {is_not_null(ImageData) && <Image src={ImageData.url} alt={ImageData.altText} height="550" width="550" className="img-fluid" />}
        </div>
    </div>
};

export default ImageWithSideIconContents;
