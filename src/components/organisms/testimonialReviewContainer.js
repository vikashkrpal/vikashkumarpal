import React from 'react';
import TestimonialCardContainer from "../molecules/testimonialCardContainer";
import {FaAngleUp} from "react-icons/fa";
import Image from "next/image";

const TestimonialReviewContainer = ({ testimonialsDetails }) => {


return (
            <div className="">
                <div className="col-lg-10 mx-lg-auto card d-flex justify-content-center">
                    <div className=" row p-4 py-5">
                        <div className="col-lg-8 col-md-8">
                                <div className="star-rating text-primary">★ ★ ★ ★ ★</div>
                                <div className="row  mt-3">
                                    <div className="col-md-12">
                                        <p className="theme-color2 limited-text">
                                            {testimonialsDetails.comment}
                                        </p>
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-auto my-auto ">
                                        <Image
                                            src={testimonialsDetails.image}
                                            width={120}
                                            height={120}
                                            className="img-fluid rounded-circle"
                                            alt="Client Avatar Icon"
                                        />{" "}
                                    </div>
                                    <div className="card-title col my-auto ps-lg-4">
                                        <p className="theme-color my-0 py-0 font-b">
                                            {testimonialsDetails.name}
                                        </p>
                                        <p className="theme-color2 my-0 py-0">
                                            {testimonialsDetails.position}
                                        </p>
                                    </div>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mt-4 mt-lg-0 mt-md-0">
                            <div className=" p-lg-3 py-4">
                                <div>
                                    <label className="display-5">84% </label>
                                    <FaAngleUp color={"green"}  style={{ marginTop:"-15%" }} size={35}/>
                                </div>
                                Increase customer satisfaction

                                <hr className="bg-light w-res-75 mt-4" style={{ height:4}}/>
                                <div>
                                <label className="display-5">38% </label>
                                <FaAngleUp color={"green"} style={{ marginTop:"-15%" }}  size={35}/>
                            </div>
                                Increase operational efficiency

                            </div>

                        </div>

                    </div>
                </div>

            </div>

    );
};

export default TestimonialReviewContainer;
