import React from 'react';
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "../atom/themeButton";
import {FaClock, FaDotCircle} from "react-icons/fa";
import {FaPencil} from "react-icons/fa6";

const BlogSliderCardContainer = () => {
    return (
        <div className="col-md-4 mt-2">
            <div className="card shadow pb-3" style={{ borderRadius:10, overflow:'hidden' }}>
                <a href="https://improvefx.com/blog/top-seo-strategies-for-2024">
                    <Image src="https://admin.improvefx.com/wp-content/uploads/2024/02/market-leader-with-seo-feature-image.png" className="img-fluid" alt="Image" width={500} height={300} />
                </a>
                <div className=" ps-3 pt-2">
                    <Link href="https://improvefx.com/blog/category/general-seo" className=" ">
                        <div className="">
                            <span className=" p-1 rounded bg-primary text-light" style={{ fontSize:13 }}> General SEO</span>

                        </div>
                    </Link>
                </div>
                <div className="card-body mt-0 pt-0">
                    <h5 className="card-title hover-dark mt-2" >
                        <Link href="https://improvefx.com/blog/top-seo-strategies-for-2024" className=" text-light">
                            Top SEO Strategies for 2024: What You Need to Know
                        </Link>
                    </h5>
                    <div className="row pb-2">
                        <div className="col-5">
                            <FaClock />
                            &nbsp;January 2, 2024
                        </div>
                        <div className="col-7 px-0">
                            <a href="https://improvefx.com/author/vikash" className="text-light hover-dark">
                                <FaPencil />
                                &nbsp;Vikash Kumar Pal
                            </a>
                        </div>
                    </div>
                    <div className="limited-text">
                        <p>Master 2024’s SEO with key strategies: Voice Search, Mobile-First Indexing, Engaging Content, EEAT, Video, Local SEO, and AI-driven tactics.</p>

                    </div>
                    <ThemeButton text={"Read More >"} />

                </div>
            </div>

        </div>
    );
};

export default BlogSliderCardContainer;
