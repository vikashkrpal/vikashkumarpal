import ThemeButton from "@/components/atom/themeButton";

export default ({heading, desc, imageUrl }) => {
    return <section class="staff-card pt-5">
    <div class="container">

        <div class="card  bg-dark shadow rounded-3">
            <div class="row ">
                <div class="col-md-6 p-lg-5 p-4">
                    <h3>{heading}</h3>
                    <div className="mx-auto" dangerouslySetInnerHTML={{ __html: desc }} />

                    <form class="form-inline justify-content-center">
                        <div class="row my-auto" style={{ alignItems:'end' }}>
                            <div class="col-7 col-lg-6">
                                <label for="email" class="sr-only">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div class="col-5 col-lg-6">
                                <ThemeButton text={"Subscribe >"}  />
                            </div>
                        </div>
                    </form>

                    <div class="form-check mt-3 ">
                        <input type="checkbox" class="form-check-input" id="agree" />
                        <label class="form-check-label" for="agree">I agree to my email being stored and used to receive the newsletter.</label>
                    </div>
                </div>
                <div class="col-md-6 px-0 hide-on-mobile">
                    <img width="650" height="450" class="img-fluid" src={imageUrl} alt="Feature Image" />
                </div>
            </div>
        </div>


    </div>
</section>
}