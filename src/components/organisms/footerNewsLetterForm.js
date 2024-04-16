import ThemeButton from "../atom/themeButton";

const FooterNewsLetterForm = () => {
    return (
        <form className="form-inline justify-content-center">
            <div className="my-auto align-items-start position-relative w-75">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                <ThemeButton text={"Subscribe >"} addClass="bg-dark" addStyle={{ position: 'absolute', right: '0px', height:"100%", top: '50%', transform: 'translateY(-50%)' }} />
            </div>
        </form>
    );
}

export default FooterNewsLetterForm;
