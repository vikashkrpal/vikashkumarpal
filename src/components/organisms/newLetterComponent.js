import ThemeButton from "@/components/atom/themeButton";
import Image from "next/image";
import SimpleNewsLetterForm from "../molecules/simpleNewsLetterForm";

const NewLetterComponent = ({ heading, desc, imageUrl }) => {
    return (
        <section className="staff-card pt-5">
                <div className="card bg-dark shadow rounded-3">
                    <div className="row">
                        <div className="col-md-6 p-lg-5 p-4">
                            <h3>{heading}</h3>
                            <div className="mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />

                            <SimpleNewsLetterForm />


                        </div>
                        <div className="col-md-6 px-lg-0 hide-on-mobile overflow-hidden">
                            <div style={{ position: "relative", width: "100%", height: "100%",  }}>
                                <Image src={imageUrl} style={{ borderRadius:20 }} alt="Feature Image" layout="fill" objectFit="cover" />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default NewLetterComponent;
