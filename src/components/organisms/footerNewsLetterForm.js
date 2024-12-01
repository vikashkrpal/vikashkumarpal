import ThemeButton from "../atom/themeButton";
import {useState} from "react";
import {checkNullOrUndefined, checkValidEmail} from "../../utils/globalFunctions";
import {saveNewsLetterFormData} from "../../services/siteServies";

const FooterNewsLetterForm = () => {
    const [email, setEmail] = useState("");

    const submitFormHandler = (e) => {
        if (checkNullOrUndefined(email)){
            alert("Email is required!");
            return false;
        }else if(!checkValidEmail(email)) {
            alert("Valid Email is required!");
            return false;
        }else {
            saveNewsLetterFormData(email).then(response=>{
                if (response.success){
                    alert('Thank You for Subscribing!\n' +
                        'You\'re now part of our community! Keep an eye on your inbox for the latest updates, exclusive tips, and special offers.')
                    setEmail('')
                }else{
                    alert(response.error)
                }
            })
        }
    }
    return <div className="form-inline justify-content-center">
            <div className="my-auto align-items-start position-relative w-75">
                <input type="email" className="form-control" id="email" placeholder="Enter your email" value={email}    onChange={e => setEmail(e.target.value)}  />
                <ThemeButton text={"Subscribe >"} addClass="bg-dark" addStyle={{ position: 'absolute', right: '0px', height:"100%", top: '50%', transform: 'translateY(-50%)' }} buttonAction={()=>submitFormHandler()} />
            </div>
        </div>
}

export default FooterNewsLetterForm;
