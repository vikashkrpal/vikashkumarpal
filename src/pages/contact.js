import React from 'react';
import Template from "../components/atom/template";
import ContentWithSideRowCounts from "../components/organisms/ContentWithSideRowCounts";
import TestimonialsSlider from "../components/organisms/testimonialsSlider";
import BrandSliderWithSideContent from "../components/organisms/brandSliderWithSideContent";
import HeaderDescContainer from "../components/molecules/headerDescContainer";
import ThemeButton from "../components/atom/themeButton";
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import {getPageQuery} from "../services/queryLibrary";
import {registeredPages} from "../utils/constants";
import {loadHomePageData} from "../services/siteServies";
import {BsTwitterX} from "react-icons/bs";

export async function getServerSideProps() {
    const currentPageData = await loadHomePageData(getPageQuery(registeredPages.CONTACT));
    return {
        props: {
            currentPageData,
        },
    };
}

const Contact = ({ currentPageData }) => {
    const pageVars = currentPageData.page[registeredPages.CONTACT]

    return (
        <Template currentPageData={currentPageData} >
            <section>
                <HeaderDescContainer
                    highligter={"Contact Us"}
                    header={pageVars.contactHeading}
                    desc={pageVars.contactPc}
                    addClass={"w-res-50 mx-aut  o"}
                    textAlignCenter={true}
                />

                <div className="card col-lg-6 col-md-8 col-sm-10 mx-auto" style={{ padding:"2%",paddingTop:'5%', paddingBottom:'5%', borderRadius:20 }}>
                    <form className="form-inline justify-content-center">
                        <div className="row my-auto d-flex align-items-end">
                            <div className="col-6 col-lg-6 ">
                               <span className={"font-b"}> Your Name*</span>
                                <input type="text" className="form-control p-2 mt-2" id="name" placeholder="James Smith" />
                            </div>
                            <div className="col-6 col-lg-6 ">
                                <span className={"font-b"}> Your Email*</span>
                                <input type="email" className="form-control p-2 mt-2" id="email" placeholder="name@email.com" />
                            </div>
                            <div className="col-6 col-lg-6 mt-4">
                                <span className={"font-b"}> Company Name*</span>
                                <input type="text" className="form-control p-2 mt-2" id="business-name" placeholder="Apple" />
                            </div>
                            <div className="col-6 col-lg-6 mt-4">
                                <span className={"font-b"}> Website</span>
                                <input type="text" className="form-control p-2 mt-2"  placeholder="https://example.com" />
                            </div>
                            {/*<div className="col-12 col-lg-12 mt-4">*/}
                            {/*    <select name="interested" className={"form-select form-control"}>*/}
                            {/*        <option value="Consulting">Consulting</option>*/}
                            {/*        <option value="SEO-Services">SEO Services</option>*/}
                            {/*        <option value="SEO-Strategy">SEO Strategy</option>*/}
                            {/*    </select>*/}
                            {/*</div>*/}
                            <div className="col-12 col-lg-12 mt-4">
                                <span className={"font-b"}> Leave us a message*</span>
                                <textarea name="message" className={"form-control mt-2"} cols="20" rows="5" placeholder={"Tell me about your site, project requirements, and when you'd like to start."}>

                                </textarea>
                            </div>
                            <div className="col-12 mt-4 mt-md-2 mt-lg-4 ">
                                <div className="row align-items-center d-flex justify-content-center mt-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <ThemeButton text={"Send Message >"} addStyle={{  minWidth:'20%', fontSize:15 }} />
                                    </div>
                                    <div className="col-lg-auto col-md-6 col-sm-12 mt-3 mt-lg-0 mt-md-0">
                                        {
                                            [
                                                {
                                                    title:<FaInstagram size={20} />,
                                                    link:currentPageData.siteOption.siteOptions.instagram
                                                },
                                                {
                                                    title:<BsTwitterX size={15} />,
                                                    link:currentPageData.siteOption.siteOptions.twitter
                                                },
                                                {
                                                    title:<FaFacebook />,
                                                    link:currentPageData.siteOption.siteOptions.facebook
                                                },
                                                {
                                                    title: <FaLinkedin/>,
                                                    link: currentPageData.siteOption.siteOptions.linkedin
                                                }
                                            ].map((iconDetails, index) => <Link key={index} href={iconDetails.link} className="elementor-icon hover-dark me-4" >{iconDetails.title}</Link>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </section>

            <div className="pt-5">
                <ContentWithSideRowCounts
                    heading={currentPageData.siteOption.siteOptions.resultsHighlightHeading}
                    desc={currentPageData.siteOption.siteOptions.resultsHighlightPara}
                    points={currentPageData.siteOption.siteOptions.deliveredNumbers.map((item, index) => ({
                        count: item.highlightNumbers,
                        desc: item.highlightTxt,
                        key: index,
                    }))}
                />

            </div>

            <TestimonialsSlider currentPageData={currentPageData} />

            <BrandSliderWithSideContent currentPageData={currentPageData} />

        </Template>
    );
};

export default Contact;
