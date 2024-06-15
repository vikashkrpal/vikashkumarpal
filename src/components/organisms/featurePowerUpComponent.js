import React from 'react';
import ThemeButton from "../atom/themeButton";
import IconCardWithoutPointsContainer from "../molecules/IconCardWithoutPointsContainer";
import {loadImageFromData} from "../../utils/globalFunctions";

const FeaturePowerUpComponent = ({
                                     header,
                                     desc,
                                     button={buttonText:'Get Start >', action:'#'},
    pointsArray = []
}) => {
    return <section>
        <div className="row mt-5 align-items-center">
            <div className="col-lg-7 col-md-12 col-sm-12">
                <div dangerouslySetInnerHTML={{ __html:header }} />
                <div dangerouslySetInnerHTML={{ __html:desc }} />
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="row mt-lg-0 mt-3 d-lg-flex justify-content-end">
                    <div className="col col-lg-auto ">
                        <ThemeButton text={button.buttonText} addStyle={{  minWidth:'30%', fontSize:18 }}  href={button.action} />
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            {
                pointsArray.length > 0 && pointsArray.map((card,i) =>             <div className="col-12 col-md-6 col-lg-6" key={i}>
                        <IconCardWithoutPointsContainer
                            icon={loadImageFromData(card.icon)}
                            heading={card.name}
                            desc={card.desc}
                        />
                    </div>
                )
            }
        </div>

    </section>
};

export default FeaturePowerUpComponent;