import React from 'react';
import ThemeButton from "../atom/themeButton";

const HeaderWithSideButton = ({ header, desc, buttonDetails }) => {
    return (
        <div className="row align-items-center pt-5">

            <div className="col-lg-8 col-md-8">
                <div className="mx-auto" dangerouslySetInnerHTML={{ __html: header }} />
                <div className="mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>

            <div className="col-lg-4 col-md-4 text-lg-center my-auto d-lg-flex justify-content-end">
                <ThemeButton text={buttonDetails.buttonText} addStyle={{ height:45,fontSize:17, paddingTop:8 }} href={buttonDetails.action} />
            </div>
        </div>
    );
};

export default HeaderWithSideButton;
