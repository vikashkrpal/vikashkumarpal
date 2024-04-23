import Image from "next/image";

const TestimonialCardConatiner = ({ testimonialsDetails }) => {
  return (
    <div className="card  p-4 me-2 ">
      <div className="star-rating text-primary">★ ★ ★ ★ ★</div>
      <div className="row  mt-3">
        <div className="col-md-12">
          <p className="theme-color2 limited-text">
            {testimonialsDetails.comment}
          </p>
        </div>
      </div>
      <div className="row py-1">
        <div className="col-4 my-auto ">
          <Image
            src={testimonialsDetails.image}
            width={50}
            height={50}
            className="img-fluid rounded-circle"
            alt="Client Avatar Icon"
          />{" "}
        </div>
        <div className="card-title col-8 my-auto ml-0 pl-0">
          <p className="theme-color my-0 py-0 font-b">
            {testimonialsDetails.name}
          </p>
          <p className="theme-color2 my-0 py-0">
            {testimonialsDetails.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardConatiner;
