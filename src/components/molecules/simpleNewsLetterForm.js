import { useState } from 'react';
import ThemeButton from "../atom/themeButton";
import { checkNullOrUndefined, checkValidEmail } from "../../utils/globalFunctions";
import { saveNewsLetterFormData } from "../../services/siteServies";

const SimpleNewsLetterForm = () => {
    const [email, setEmail] = useState("");

    const submitFormHandler = (e) => {
        if (checkNullOrUndefined(email)) {
            alert("Email is required!");
            return false;
        } else if (!checkValidEmail(email)) {
            alert("Valid Email is required!");
            return false;
        } else {
            saveNewsLetterFormData(email).then(response => {
                if (response.success) {
                    alert('Thank You for Subscribing!\n' +
                        'You\'re now part of our community! Keep an eye on your inbox for the latest updates, exclusive tips, and special offers.')
                    setEmail('')
                } else {
                    alert(response.error)
                }
            })
        }
    }
    return <div className="form-inline justify-content-center">
        <div className="row my-auto d-flex align-items-end">
            <div className="col-12 col-lg-8 ">
                <input type="email" name='email' aria-label='email field' className="form-control" id="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="col-12 mt-3 mt-md-2 mt-lg-0 col-lg-4 ">
                <ThemeButton text={"Subscribe >"}
                    buttonAction={() => submitFormHandler()} />
            </div>
        </div>

    </div>
};

export default SimpleNewsLetterForm;
