import Image from "next/image";
import HeaderDescContainer from "../molecules/headerDescContainer";
import ThemeButton from "../atom/themeButton";
import { checkNotUndefined, loadImageFromData } from "../../utils/globalFunctions";

const ContentWithSidePoint = ({
                                  headerDetails,
                                  buttonDetails,
                                  pointsArray,
                              }) => {
    return (
        <section className="effective-solution">
            <div className="row">
                <div className="col-lg-6 col-12 sticky-sidebar">
                    <div className="sticky-content">
                        <HeaderDescContainer {...headerDetails} />
                        <ThemeButton
                            text={buttonDetails.text}
                            addStyle={{ minWidth: "30%", fontSize: 18 }}
                            href={buttonDetails.action}
                        />
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="row no-gutters">
                        {checkNotUndefined(pointsArray) && pointsArray.map((d, i) => (
                            <div className="col-md-6 m-0" key={i}>
                                <div className="card hover-dark bg-black">
                                    <div className="ib-icon-wrapper d-lg-flex justify-content-center align-items-center">
                                        <Image
                                            src={loadImageFromData(d.hpPointIcon)}
                                            alt={d.hpPointIcon.altText}
                                            width={100}
                                            height={100}
                                            className="effective-solution-icon mt-4 image-fluid"
                                        />
                                    </div>

                                    <div className="card-body my-3">
                                        <h4 className="card-title text-lg-center mt-0">
                                            {d.hpPointName}
                                        </h4>
                                        <div className="card-text text-lg-center" dangerouslySetInnerHTML={{ __html: d.hpPointDescription }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContentWithSidePoint;
