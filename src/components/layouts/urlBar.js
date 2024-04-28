import React from 'react';
import Link from "next/link";
import image from '../../asserts/logos/back-image.png'
const UrlBar = ({ urlStrings }) => {
    return (
        <section style={{
            backgroundImage: `url('${image.src}')`,
            backgroundColor: '#212529',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-lg-center mx-auto py-lg-5 py-3">
                        <h1>Testimonials</h1>

                        <div className="py-lg-3 w-res-75 mx-auto"><p>Elevate your online presence with our top-notch SEO
                            services. As a leading organic SEO services company, we specialize in providing professional
                            and tailored solutions to boost your websites visibility. Trust our experienced team to
                            optimize your online strategy and enhance your businesss digital success.</p></div>

                        <h6 className="theme-color2 text-bold  py-4 ">
                            <Link href="/" className="px-lg-2" style={{ fontSize: 20}}>
                                Home&nbsp;
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
