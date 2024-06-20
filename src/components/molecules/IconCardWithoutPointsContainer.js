import React from 'react';
import Image from "next/image";
import Link from "next/link";

const IconCardWithoutPointsContainer = ({ icon, heading, desc}) => {
    return<div className="card check-card p-3 brands-experiences-card mt-4">
        <div className="row ">
            <div className="col-lg-auto col-md-12 col-sm-12 ">
                <Image src={icon} alt="..." width="70" height="70" className="" />
            </div>
            <div className="col-lg col-md-12 col-sm-12 service-card-body mt-3 mt-lg-0">
                <span className="card-title mx-auto ">
                    <div dangerouslySetInnerHTML={{ __html:heading }} />
                </span>
                <div className="mx-auto p-bottom-0 mb-3 mt-2" dangerouslySetInnerHTML={{ __html: desc }} />
            </div>
        </div>


    </div>
};

export default IconCardWithoutPointsContainer;
