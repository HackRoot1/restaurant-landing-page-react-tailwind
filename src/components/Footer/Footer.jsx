import React from "react";
import FooterLogo from "../../assets/food-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-950 text-black dark:text-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid md:grid-cols-3 py-5">
                        <div className="py-8 px-4">
                            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                                <img
                                    src={FooterLogo}
                                    alt=""
                                    className="max-w-[50px]"
                                />
                                FOODIE
                            </h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Perspiciatis amet cupiditate
                                excepturi molestiae aliquid voluptates maiores
                                culpa, sed ab blanditiis?
                            </p>
                            <br />
                            <div className="flex items-center gap-3 mt-3">
                                <FaLocationArrow />
                                <p>Thane, Maharashtra</p>
                            </div>
                            <div className="flex items-center gap-3 mt-3">
                                <FaMobileAlt />
                                <p>Thane, Maharashtra</p>
                            </div>
                            {/* Social icons */}
                            <div>
                                <div className="flex items-center gap-3 mt-6">
                                    <a href="#">
                                        <FaInstagram />
                                    </a>
                                    <a href="#">
                                        <FaFacebook />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl sm:text-3xl font-bol text-justify sm:text-left mb-3">Important Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl sm:text-3xl font-bol text-justify sm:text-left mb-3">Important Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="py-8 px-4">
                                    <h1 className="text-xl sm:text-3xl font-bol text-justify sm:text-left mb-3">Important Links</h1>
                                    <ul className="flex flex-col gap-3">
                                        <li>Home</li>
                                        <li>About</li> 
                                        <li>Services</li>
                                        <li>Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-center py-10 border-t-2 border-gray-300/50">
                            @copyright 2024 All rights reserved || made with <span className="text-xl text-red-600">&#9829;</span> by Saurabh
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
