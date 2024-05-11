import React from 'react';
import TestimonialCardContainer from "../molecules/testimonialCardContainer";
import {FaAngleUp} from "react-icons/fa";

const TestimonialReviewContainer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-lg-2" />
                <div className="col-lg-8 row d-flex justify-content-center">
                    <div className="col-lg-8 col-md-8">
                        <TestimonialCardContainer testimonialsDetails={{
                            comment: ' Our e-commerce site’s user engagement skyrocketed by 40% after their exceptional site optimization and SEO services. They are true e-commerce wizards. ',
                            image: "https://admin.improvefx.com/wp-content/uploads/2023/12/Client-Male-Avatar7.svg",
                            name: 'Maia Kennedy',
                            position: 'Founder | ILAMRA '
                        }}/>
                    </div>
                    <div className="col-lg-4 col-md-4 pt-3 d-flex justify-content-start">
                        <div className="card p-3 py-4">
                                <span>
                                    <label className="display-5">84% </label>
                                    <FaAngleUp color={"green"}  style={{ marginTop:"-15%" }} size={40}/>
                                </span>
                                Increase customer satisfaction

                            <hr className="bg-light w-res-75 mt-4" style={{ height:4}}/>
                            <span>
                                <label className="display-5">38% </label>
                                <FaAngleUp color={"green"} style={{ marginTop:"-15%" }}  size={40}/>
                            </span>
                            Increase operational efficiency

                        </div>

                </div>

                </div>
                <div className="col-lg-2" />
            </div>


        </div>
    );
};

export default TestimonialReviewContainer;
