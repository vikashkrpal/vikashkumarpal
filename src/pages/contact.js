import React from 'react';
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import ThemeButton from "../components/atom/themeButton";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
    return (
        <Template>

            <section>
                <HeaderDescContainer
                    highligter={"Contact Us"}
                    header={"<h1>Get in touch today</h1>"}
                    desc={
                        "<p>Explore our diverse case studies to witness firsthand the transformative impact of improveFX's SEO services. Each case study is a testament to our strategic approach, showcasing significant increases in traffic, sales, and online presence for our clients. These success stories reflect our commitment to not just meeting but exceeding SEO goals.</p>"
                    }
                />

                <div className="card p-4 col-lg-6 col-md-8 col-sm-10 mx-auto">
                    <form className="form-inline justify-content-center">
                        <div className="row my-auto d-flex align-items-end">
                            <div className="col-12 col-lg-12 ">
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="col-6 col-lg-6 ">
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="col-6 col-lg-6 mt-2">
                                <input type="text" className="form-control" id="business-name" placeholder="Enter your business Name" />
                            </div>
                            <div className="col-12 col-lg-12 mt-2">
                                <input type="text" className="form-control"  placeholder="Enter your Website" />
                            </div>
                            <div className="col-12 col-lg-12 mt-2">
                                <select name="interested" className={"form-select form-control"}>
                                    <option value="Consulting">Consulting</option>
                                    <option value="SEO-Services">SEO Services</option>
                                    <option value="SEO-Strategy">SEO Strategy</option>
                                </select>
                            </div>
                            <div className="col-12 col-lg-12 mt-2">
                                <textarea name="message" className={"form-control"} cols="20" rows="5" defaultValue={"Enter your message"}>

                                </textarea>
                            </div>
                            <div className="col-12 mt-4 mt-md-2 mt-lg-4 ">
                                <div className="row">
                                    <div className="col">
                                        <ThemeButton text={"Send Message >"} />
                                    </div>
                                    <div className="col-auto">
                                        {
                                            [
                                                {
                                                    title:<FaInstagram />,
                                                    link:'https://www.insta.com/'
                                                },{
                                                title:<FaTwitter />,
                                                link:'https://twitter.com/'
                                            },{
                                                title:<FaFacebook />,
                                                link:'https://facebook.com/'
                                            },{
                                                title:<FaLinkedin />,
                                                link:'https://www.linkedin.com/'
                                            }
                                            ].map((iconDetails, index) => <Link key={index} href={iconDetails.link} className="elementor-icon hover-dark me-4">{iconDetails.title}</Link>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>

            <ContentWithSideRowCounts />

            <TestimonialsSlider />

            <BrandSliderWithSideContent />

        </Template>
    );
};

export default Contact;
