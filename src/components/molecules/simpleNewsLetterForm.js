import React from 'react';
import ThemeButton from "../atom/themeButton";

const SimpleNewsLetterForm = () => {
    return <form className="form-inline justify-content-center">
        <div className="row my-auto d-flex align-items-end">
            <div className="col-12 col-lg-8 ">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="col-12 mt-3 mt-md-2 mt-lg-0 col-lg-4 ">
                <ThemeButton text={"Subscribe >"} />
            </div>
            <div className="col-12  mx-3 form-check mt-3 ">
                    <input type="checkbox" className="form-check-input" id="agree" />
                    <label className="form-check-label" style={{ fontFamily:'Gt walsheim simple' }}
                     htmlFor="agree">I agree to my email being stored and used to receive the newsletter.</label>
            </div>
        </div>

    </form>
};

export default SimpleNewsLetterForm;
