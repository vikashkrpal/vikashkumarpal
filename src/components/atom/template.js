import React from 'react';
import Header from "../layouts/header";
import Footer from "../layouts/footer";
import UrlBar from "../layouts/urlBar";

const Template = ({ children, urlBar=false, urlStrings = [] }) => {
    return (
        <section>
            <Header />
            <section style={{ overflowX:"hidden" }}>
                {urlBar && <UrlBar urlStrings={urlStrings} />}
                <div className="container">
                  {children}
                </div>
                <Footer />
            </section>
        </section>
    );
};

export default Template;
