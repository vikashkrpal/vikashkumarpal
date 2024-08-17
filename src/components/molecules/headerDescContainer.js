import { isNotNull } from "@/utils/globalFunctions";
import ThemeButton from "../atom/themeButton";

const HeaderDescContainer = ({ header = null, desc, highligter = null, textAlignCenter = false, addClass = "", showButton = false, buttonData = { buttonText: 'Button', action: '#' } }) => {
    return (
        <section className={"row staff-card mt-5"}>
            <div className={(showButton ? "col-md-8 " : " ") + (textAlignCenter === true ? "text-lg-center" : "text-start")}>
                {isNotNull(highligter) && <span className="mb-3 theme-color">{highligter}</span>}
                <div className="mx-auto my-auto">
                    {isNotNull(header) && <div className="mx-auto" dangerouslySetInnerHTML={{ __html: header }} />}
                    <div className={"mx-auto " + addClass} dangerouslySetInnerHTML={{ __html: desc }} />
                </div>
            </div>
            {showButton &&
            <div className={"col-md-4 d-flex align-items-start justify-content-end " + (isNotNull(highligter) ? " mt-5" : " mt-4")}>
                <ThemeButton text={buttonData.buttonText} addStyle={{ minWidth: '30%', fontSize: 18 }} href={buttonData.action} />
            </div>
            }
        </section>
    );
}

export default HeaderDescContainer;
