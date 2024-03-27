import ThemeButton from "@/components/atom/themeButton";
import Image from "next/image";

const NewLetterComponent = ({heading, desc, imageUrl }) => {
    return <section className="staff-card pt-5">
    <div className="container">

        <div className="card  bg-dark shadow rounded-3">
            <div className="row ">
                <div className="col-md-6 p-lg-5 p-4">
                    <h3>{heading}</h3>
                    <div className="mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />

                    <form className="form-inline justify-content-center">
                        <div className="row my-auto" style={{ alignItems:'end' }}>
                            <div className="col-12 col-lg-6 col-md-6">
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="col-12 mt-3 mt-md-0 mt-lg-0 col-lg-6 col-md-6">
                                <ThemeButton text={"Subscribe >"}  />
                            </div>
                        </div>
                    </form>

                    <div className="form-check mt-3 ">
                        <input type="checkbox" className="form-check-input" id="agree" />
                        <label className="form-check-label" for="agree">I agree to my email being stored and used to receive the newsletter.</label>
                    </div>
                </div>
                <div className="col-md-6 px-lg-0 hide-on-mobile">
                    <Image width="650" height="450" className="img-fluid" src={imageUrl} alt="Feature Image" />
                </div>
            </div>
        </div>


    </div>
</section>
}

export default NewLetterComponent;
