const ThemeButton =  ({text, buttonType="button" ,buttonAction = ()=>console.log("Button Clicked")}) => {
    return <button type={buttonType} className="theme-button" onClick={buttonAction}>{text}</button>

}

export default ThemeButton;
