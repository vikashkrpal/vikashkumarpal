import Link from 'next/link';
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import '../../utils/styles/footer.css';
import FooterNewsLetterForm from '@/components/organisms/footerNewsLetterForm';
import {FaX} from "react-icons/fa6";
import {BiX} from "react-icons/bi";
import {BsTwitterX} from "react-icons/bs";

const Footer = ({ currentPageData }) => {
    const FootHeader = ({ title }) =><>
        <h6 className=" text-light font-b mb-0 " style={{ fontSize:22  }}  >{title}</h6>
        <hr className="bg-light w-res-50" style={{ height:4, marginTop:5 }}/></>

    return (
        <footer className="mt-5 text-lg-start text-center bg-dark " style={{ overflow:'hidden'}} >
            {/* Section: Social media */}
            <section className="p-2 px-lg-5 pt-4">
                <div className="row align-items-center">
                    {/* Left */}
                    <div className="col-lg-8 col-md-8 col-12 row m-0 text-center text-md-start">
                        {
                            [
                                {
                                    title:'About',
                                    link:'/about'
                                },{
                                    title:'Services',
                                    link:'/services'
                                },{
                                    title:'Testimonials',
                                    link:'/testimonials'
                                },{
                                    title:'Portfolio',
                                    link:'/portfolio'
                                },{
                                    title:'Work With Me',
                                    link:'/work-with-me'
                                }
                            ].map((linkDetails, index) => (
                                <div key={index} className={linkDetails.title === 'Work With Me' ? 'col-lg col-md col-sm-4 mt-lg-0 mt-2 text-center' :`col mt-lg-0 mt-2 text-center`} style={{ maxWidth: `${(linkDetails.title.length * 9) + 20}px` }}>
                                    <Link className="elementor-icon" href={linkDetails.link}>{linkDetails.title}</Link>
                                </div>
                            ))
                        }
                    </div>


                    {/* Right */}
                    <div className="col-lg-4 col-md-4 col-12 text-lg-end text-center mt-lg-0 mt-md-0 mt-4">
                        {
                            [
                                {
                                    title:<FaInstagram />,
                                    link:currentPageData.siteOption.siteOptions.instagram
                                },{
                                    title:<BsTwitterX size={15} />,
                                    link:currentPageData.siteOption.siteOptions.twitter
                                },{
                                    title:<FaFacebook />,
                                    link:currentPageData.siteOption.siteOptions.facebook
                                },{
                                    title:<FaLinkedin />,
                                    link:currentPageData.siteOption.siteOptions.linkedin
                                }
                            ].map((iconDetails, index) => <a key={index} href={iconDetails.link} className="elementor-icon hover-dark me-4" target={"_blank"}>{iconDetails.title}</a>)
                        }


                    </div>
                </div>

            </section>
            {/* Section: Social media */}
            <hr className="bg-light" />
            {/* Section: Links  */}
            <section className="px-2">
                <div className="container-lg container-md text-start mt-5">
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-sm-10 col-md-12 col-lg-4 mb-4">
                            <FootHeader title={"Vikash Kumar Pal"} />
                            <div dangerouslySetInnerHTML={{ __html:currentPageData.siteOption.siteOptions.siteAbout }} />
                        </div>
                        {/* Grid column */}

                        {/* Grid column */}
                        <div className="col mt-lg-0 mt-md-0 mt-sm-5 mb-4">
                            <FootHeader title={"Services"} />
                            {
                                [
                                    {
                                        title:'SEO Services',
                                        link:'https://www.insta.com/'
                                    },{
                                        title:'SEO Consulting',
                                        link:'https://twitter.com/'
                                    },{
                                        title:'SEO Audit',
                                        link:'https://facebook.com/'
                                    },{
                                        title:'Keyword Research',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Local SEO',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Technical SEO',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Ecommerce SEO',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'WordPress SEO',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Shopify SEO',
                                        link:'https://www.linkedin.com/'
                                    }
                                ].map((linkDetails, index) =><div key={index} className={"mt-2"}> <Link href="#" className="elementor-icon" style={{ fontSize:16 }}>{linkDetails.title}</Link> </div>
                                )
                            }
                            {/* Add more service links here */}
                        </div>
                        {/* Grid column */}

                        <div className="col mt-lg-0 mt-md-0 mt-sm-5 mb-4">
                            <FootHeader title={"Resources"} />
                            {
                                [
                                    {
                                        title:'About Me',
                                        link:'https://www.insta.com/'
                                    },{
                                        title:'SEO Approach',
                                        link:'https://twitter.com/'
                                    },{
                                        title:'Success Stories',
                                        link:'https://facebook.com/'
                                    },{
                                        title:'Work With Me',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Portfolio',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Case Study',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Testimonials',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Contact Me',
                                        link:'https://www.linkedin.com/'
                                    },{
                                        title:'Blogs',
                                        link:'https://www.linkedin.com/'
                                    }
                                ].map((linkDetails, index) =><div key={index} className={"mt-2"}> <Link href="#" className="elementor-icon" style={{ fontSize:16 }}>{linkDetails.title}</Link> </div>
                                )
                            }
                            {/* Add more service links here */}
                        </div>

                        <div className="col-sm-10 col-md-12 col-lg-4 mb-4">
                            <FootHeader title={"Contact"} />
                            <p  className="text-light mb-0">{currentPageData.siteOption.siteOptions.address}</p>
                            <Link href="mailto:hello@vikashkumarpal.com" className="text-light" style={{ fontSize:'1.15rem' }}>{currentPageData.siteOption.siteOptions.email}</Link>
                            <h4 className={"mb-0 mt-3"}>
                                Stay Ahead In SEO: Subscribe Now
                            </h4>
                            <p>Get the latest SEO tips and updates straight to your inbox. Subscribe to our newsletter and never miss out on valuable insights.</p>
                        <FooterNewsLetterForm />
                        </div>
                    </div>
                </div>
            </section>
            {/* Section: Links  */}

            {/* Copyright */}
            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © Copyright 2024 Vikash Kumar Pal. All rights reserved.
                <Link href="#"  className="elementor-icon ms-2 me-2">Terms</Link>|
                <Link href="#" className="elementor-icon ms-2 me-2"> Privacy Policy</Link>
            </div>
            {/* Copyright */}
        </footer>
    );
}

export default Footer;
