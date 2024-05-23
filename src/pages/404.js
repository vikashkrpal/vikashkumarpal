import React from 'react';
import Template from "../components/atom/template";
import Image from "next/image";
import ThemeButton from "../components/atom/themeButton";

const Custom404 = () => {
    return (
        <Template>
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <Image src={require('../asserts/oops.png')} alt={"Oops"} width={800} height={200} className={"img-fluid"} />
                <h2>404 - Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
               <ThemeButton href={"/"} text={"GO TO HOME >"} />
            </div>

        </Template>
    );
};

export default Custom404;