const ThemeButton =  ({text, buttonType="button" ,buttonAction = ()=>console.log("Button Clicked"), addClass = " ", addStyle = {}}) => {
    return <button 
    type={buttonType} 
    className={"theme-button "+addClass }
    onClick={buttonAction}
    style={addStyle}
    >{text}</button>

}

export default ThemeButton;
