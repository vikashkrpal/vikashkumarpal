import { request } from "./http/graphql";
import Config from '../config'


export const loadHomePageData = async (pageQuery) => {
    try {
        const response = await request(pageQuery);
        // console.log("got response", response)
        return response;
    } catch (err) {
        throw new Error(err.message);
    }
}

export const saveFormData = async (formDataObject) => {
    const formId = "1742";
    return new Promise((resolve) => {
        try {
            const formdata = new FormData();
            formdata.append("your-name", formDataObject.name);
            formdata.append("your-email", formDataObject.email);
            formdata.append("your-subject", "A New Opportunity");
            formdata.append("your-message", formDataObject.message);
            formdata.append("your-company", formDataObject.company);
            if(formDataObject.website !== undefined)
                formdata.append("your-website", formDataObject.website);
            formdata.append("_wpcf7_unit_tag", formId);

            const requestOptions = {
                method: "POST",
                body: formdata,
            };

            fetch(`https://admin.vikashkumarpal.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`, requestOptions)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Network response was not ok");
                    }
                })
                .then((result) => {
                    resolve({ success: true, data: result });
                })
                .catch((error) => {
                    console.error("Error:", error);
                    resolve({ success: false, error: error.message });
                });
        } catch (err) {
            console.error("Catch Error:", err);
            resolve({ success: false, error: err.message });
        }
    });
};

