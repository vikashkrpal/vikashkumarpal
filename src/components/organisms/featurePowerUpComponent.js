import React from 'react';
import ThemeButton from "../atom/themeButton";
import IconCardWithoutPointsContainer from "../molecules/IconCardWithoutPointsContainer";

const FeaturePowerUpComponent = () => {
    return <section>
        <div className="row mt-5 align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12">
                <h2>Features to power-up your business</h2>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="row mt-lg-0 mt-3 d-lg-flex justify-content-end">
                    <div className="col-auto ">
                        <ThemeButton text={"Get Started >"}  href={"#"} />
                    </div>
                    <div className="col col-lg-auto ">
                        <ThemeButton text={"Browse all features >"}  href={"#"} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
                <IconCardWithoutPointsContainer
                    icon={
                        "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf65136f9b44e9136149_realtime-analytics-icon-advertising-webflow-ecommerce-template.png"
                    }
                    heading={"Realtime analytics"}
                    desc={
                        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                    }
                />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <IconCardWithoutPointsContainer
                    icon={
                        "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf6572b2cbe137e35258_user-journey-icon-advertising-webflow-ecommerce-template.png"
                    }
                    heading={"Realtime analytics"}
                    desc={
                        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                    }
                />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <IconCardWithoutPointsContainer
                    icon={
                        "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf65604b7716ebd0620b_integrations-icon-advertising-webflow-ecommerce-template.png"
                    }
                    heading={"Realtime analytics"}
                    desc={
                        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                    }
                />
            </div>
            <div className="col-12 col-md-6 col-lg-6">
                <IconCardWithoutPointsContainer
                    icon={
                        "https://assets-global.website-files.com/639c8b86e20d9448ede95a64/6439cf650ef08821afac5aad_machine-learning-icon-advertising-webflow-ecommerce-template.png"
                    }
                    heading={"Realtime analytics"}
                    desc={
                        "<p>Lorem ipsum dolor sit amet consectetur adipiscing elit et morbi libero quam risus quis commodo nisl.</p>"
                    }
                />
            </div>
        </div>

    </section>
};

export default FeaturePowerUpComponent;