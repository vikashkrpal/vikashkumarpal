import { isNotNull } from "@/utils/globalFunctions";
import ThemeButton from "../atom/themeButton";
import React from "react";

const HeaderDescContainer = ({ header = null, desc, highligter = null, textAlignCenter = false, addClass = "", showButton = false, buttonData = { buttonText: 'Button', action: '#' }, colWidth = "9" }) => {
    return (
        <section className={"row staff-card mt-5 justify-content-center align-items-center"}>
            <div className={(showButton ? `col-lg-${colWidth} col-md-12 col-sm-12 ` : " ") + (textAlignCenter === true ? "text-lg-center" : "text-start")}>
                {isNotNull(highligter) && <span className="mb-3 theme-color">{highligter}</span>}
                <div className="mx-auto my-auto">
                    {isNotNull(header) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: header }} />}
                    <div className={"mx-auto " + addClass} dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
            </div>
            {showButton &&
            <div className={`col-lg-${12-colWidth} col-md-12 col-sm-12 `}>
                <div className="row d-lg-flex justify-content-end">
                    <div className="col col-lg-auto ">
                        <ThemeButton text={buttonData.buttonText} addStyle={{ minWidth: '30%', fontSize: 18 }} href={buttonData.action} />
                    </div>
                </div>
            </div>
            }
        </section>
    );
}

export default HeaderDescContainer;
