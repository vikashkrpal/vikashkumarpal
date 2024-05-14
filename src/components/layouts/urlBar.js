import React from 'react';
import Link from "next/link";
import image from '../../asserts/logos/back-image.png'
const UrlBar = ({ urlStrings, urlDetails }) => {
    return (
        <section style={{
            backgroundImage: `url('${image.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            marginBottom:-50
        }}>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-md-12 text-lg-center mx-lg-auto">
                        <div className="w-res-80 mx-auto">
                            <h1>{urlDetails.title}</h1>
                        </div>

                        <div className="py-lg-3 w-res-75 mx-auto"><p>{urlDetails.desc}</p></div>

                        <h6 className="theme-color2 text-bold  pb-4 ">
                            <Link href="/" className="px-lg-2" style={{ fontSize: 20}}>
                                Home&nbsp;&nbsp;
                            </Link>
                            {
                                urlStrings.map((obj, i) => {
                                    const [key, value] = Object.entries(obj)[0];
                                    if (value === "null")
                                        return <span key={i} >{'> '}<span style={{fontSize: 20}}>&nbsp;&nbsp;{key}</span></span>
                                    else
                                        return <span key={i}>{'> '}<Link href={value} className="px-2"
                                                                      style={{fontSize: 20}}>{key}</Link></span>

                                })
                            }

                        </h6>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UrlBar;
