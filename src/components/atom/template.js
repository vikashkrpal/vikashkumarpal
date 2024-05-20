import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import UrlBar from "../layouts/urlBar";

const Template = ({ children, urlBar=false, urlStrings = [], urlDetails={title:"page", des:'page desc'} }) => {
    return (
        <section>
            <Header />
            <section className={"mobile-overflow-hidden"}>
                {urlBar && <UrlBar urlStrings={urlStrings} urlDetails={urlDetails} />}
                <div className="container">
                  {children}
                </div>
                <Footer />
            </section>
        </section>
    );
};

export default Template;
