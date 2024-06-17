import React from 'react';
import ThemeButton from "../atom/themeButton";
import Image from "next/image";

const FeaturesSection = ({
    header, desc, button = {buttonText:'get start', action:'#'} , pointArray =[]
                         }) => {
    return <div>
        <div className="row align-items-center pt-5">
            <div className="col-lg-9 col-md-8">
                <div dangerouslySetInnerHTML={{ __html:header }} />
                <div dangerouslySetInnerHTML={{ __html:desc }} />
            </div>

            <div className="col-lg-3 col-md-4 text-lg-center my-auto d-flex justify-content-end">
                <ThemeButton text={button.buttonText} addStyle={{  minWidth:'30%', fontSize:18 }} href={button.action} />
            </div>
        </div>
        <div className="row">
            {
                pointArray.map((card,i) => <div className="col-lg-4 col-md-6 col-sm-12 mt-3" key={i}>
                    <div  style={{ borderLeft:"0.2px solid white" }} className={"ps-4"}>
                        <Image src={require('../../asserts/checkmark-icon-white.png')} alt="..." width="20" height="20" className="mb-1" />
                        <div className={"text-sub-primary"} dangerouslySetInnerHTML={{ __html:card.header }} />

                        <div dangerouslySetInnerHTML={{ __html:card.desc }} />
                    </div>

                </div>)
            }

        </div>
    </div>
};

export default FeaturesSection;
