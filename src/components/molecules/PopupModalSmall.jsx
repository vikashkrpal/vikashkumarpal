"use client";

import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "../../asserts/logos/Vikash-Logo-Black-BG.png";
import Image from "next/image";

export default function ScrollModalSmall() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent =
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent >= 30) {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
            <div className="position-relative w-60 overflow-hidden rounded-4 shadow-lg bg-dark text-white py-4 px-5 mx-3 mx-md-0" style={{ maxWidth: "600px" }}>
                <div className="d-flex justify-content-end align-items-center mb-4">
                    {/* <Image src={Logo} alt="Vikash Logo" width={110} height={30} /> */}
                    <button className="p-1 bg-dark text-white rounded-pill border" onClick={() => setIsVisible(false)}>
                        <IoClose size={24} />
                    </button>
                </div>

                <h2 className="h4 fw-bold mb-3 text-center">
                    Stay Ahead with <span className="text-primary">SEO With Intent</span>
                </h2>

                <p className="text-secondary small text-center  mx-auto">
                    Get personalized SEO strategies to boost your rankings, generate leads, and enhance your online presence.
                </p>

                <div className="d-flex align-items-center my-2 rounded-pill bg-transparent border border-[#e0e0e0] overflow-hidden p-1">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-grow-1 px-4 py-2 bg-transparent text-white border-0"
                        style={{ outline: 'none' }}
                    />
                    <button className="btn bg-white text-dark fw-semibold px-5 py-2 rounded-pill">
                        Subscribe Now – It&apos;s Free!
                    </button>
                </div>


                <p className="text-secondary small text-center">
                    We’ll get in touch with expert strategies tailored for your business growth.
                </p>
            </div>
        </div>
    );
}
