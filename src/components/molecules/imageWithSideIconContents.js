import React from "react";
import Image from "next/image";
import { isNotNull } from "../../utils/globalFunctions";
import ThemeButton from "../atom/themeButton";
import { FaStar } from "react-icons/fa";

const ImageWithSideIconContents = ({
  headingHighlight = null,
  heading = null,
  content = null,
  ImageData = null,
  contentListing = 0,
  buttonData = { buttonText: "Get Started Now! >", action: "#" },
  addClass = "mt-5",
  pointsArray = [],
}) => {
  return (
    <div
      className={"row align-items-center px-0 pt-2 pt-lg-0 pt-md-0 " + addClass}
    >
      <div className="col-lg-6 hero-section-1-custom  my-2">
        {headingHighlight != null && (
          <span className="mb-3 theme-color">{headingHighlight}</span>
        )}
        {isNotNull(heading) && (
          <div
            className="mx-auto"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
        )}
        {isNotNull(content) && (
          <div
            className="mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        )}
        {pointsArray.map((p, i) => (
          <div className="row " key={i}>
            <div className="col-2 col-lg-1 mt-1">
              <FaStar size={30} />
            </div>
            <div className="col-10 col-lg-11">
              <div dangerouslySetInnerHTML={{ __html: p.header }} />
              <div dangerouslySetInnerHTML={{ __html: p.desc }} />
            </div>
          </div>
        ))}

        <ThemeButton
          text={buttonData.buttonText}
          addStyle={{ minWidth: "30%", fontSize: 18 }}
          href={buttonData.action}
        />
      </div>
      <div
        className={
          "col-lg-6 py-3 my-auto d-flex justify-content-center " +
          (contentListing == 1 && "order-lg-first")
        }
      >
        {isNotNull(ImageData) && (
          <Image
            src={ImageData.url}
            priority
            alt={ImageData.altText}
            height="550"
            width="550"
            className="img-fluid"
          />
        )}
      </div>
    </div>
  );
};

export default ImageWithSideIconContents;
