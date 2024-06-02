import { isNotNull } from "@/utils/globalFunctions";
import Link from "next/link";

const ThemeButton =  ({text, buttonType="button" ,buttonAction = ()=>console.log("Button Clicked"), addClass = " ", addStyle = {}, href=null}) => {
    if(isNotNull(href)){
        return <Link
        className={"theme-button " + addClass}
        href={href}
        style={{ ...addStyle, display: 'inline-block', textAlign: 'center', lineHeight: 'inherit', verticalAlign: 'middle' }}
    >{text}</Link>
    }else{
        return <button
        type={buttonType}
        className={"theme-button "+addClass }
        onClick={buttonAction}
        style={addStyle}
        >{text}</button>
    }

}

export default ThemeButton;
