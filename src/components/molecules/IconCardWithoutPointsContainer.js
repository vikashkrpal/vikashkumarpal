import React from 'react';
import Image from "next/image";
import Link from "next/link";

const IconCardWithoutPointsContainer = ({ icon, heading, desc}) => {
    return<div className="card check-card p-3 brands-experiences-card mt-4">
        <div className="row ">
            <div className="col-auto mx-2">
                <Image src={icon} alt="..." width="70" height="70" className="" />
            </div>
            <div className="col-8 service-card-body mt-md-2">
                <span className="card-title mx-auto"><h4 className="mt-0 mb-2"><Link href="#" className="elementor-icon">{heading}</Link></h4></span>
                <div className="mx-auto p-bottom-0 mb-3" dangerouslySetInnerHTML={{ __html: desc }} />

                <Link href="#" className=" ancor-hover ps-0 font-b" style={{ fontSize:16 }}>{"Learn more >"}</Link>
            </div>
        </div>


    </div>
};

export default IconCardWithoutPointsContainer;
