export default ({text, buttonType="button" ,buttonAction = ()=>console.log("Button Clicked")}) => {
    return <button type={buttonType} class="theme-button" onClick={buttonAction}>{text}</button>

}