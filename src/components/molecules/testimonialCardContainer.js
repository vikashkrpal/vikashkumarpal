import Image from "next/image";
import React from "react";

const TestimonialCardContainer = ({ testimonialsDetails, col=" " }) => {
  return (
      <div className={"mt-3 "+col} >
    <div className={"card  p-4 me-lg-2"}  style={{ borderRadius:20 }}>
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
            width={60}
            height={60}
            className="img-fluid rounded-circle"
            alt="Client Avatar Icon"
          />{" "}
        </div>
        <div className="card-title col-8 my-auto ">
          <p className="theme-color my-0 py-0 font-b">
            {testimonialsDetails.name}
          </p>
          <p className="theme-color2 my-0 py-0">
            {testimonialsDetails.position}
          </p>
        </div>
      </div>
    </div>
      </div>

  );
};

export default TestimonialCardContainer;
