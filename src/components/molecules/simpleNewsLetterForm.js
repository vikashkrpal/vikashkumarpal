import React from 'react';
import ThemeButton from "../atom/themeButton";

const SimpleNewsLetterForm = () => {
    return <form className="form-inline justify-content-center">
        <div className="row my-auto align-items-start">
            <div className="col-12 col-lg-6 col-md-6">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                <div className="form-check mt-3 ">
                    <input type="checkbox" className="form-check-input" id="agree" />
                    <label className="form-check-label" htmlFor="agree">I agree to my email being stored and used to receive the newsletter.</label>
                </div>
            </div>
            <div className="col-12 mt-3 mt-md-0 mt-lg-0 col-lg-6 col-md-6">
                <ThemeButton text={"Subscribe >"} />
            </div>
        </div>

    </form>
};

export default SimpleNewsLetterForm;
