import React from "react";
import Food1 from "../../assets/biryani5.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
    return (
        <>
            <div className="min-h-[550px] py-10">
                <div>
                    <div
                        data-aos="slide-up"
                        data-aos-duration="500"
                        className="container"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                            {/* Image Section */}
                            <div>
                                <img
                                    src={Food1}
                                    alt=""
                                    className="max-w-[300px] sm:max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
                                />
                            </div>

                            {/* Text content section */}
                            <div className="flex flex-col justify-center gap-6 px-6 sm:px-0">
                                <h1 className="text-3xl sm:text-4xl font-bold px-6 sm:px-0 text-center md:text-left">
                                    Lorem ipsum dolor
                                </h1>
                                <p className="text-sm text-gray-500 tracking-wide leading-5 px-6 md:px-0">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Odio tenetur Lorem ipsum
                                    dolor sit amet consectetur adipisicing elit.
                                    Doloremque, consequuntur?
                                    <br />
                                    <br />
                                    voluptatibus possimus facilis expedita id
                                    dolores porro, eligendi saepe ut rem,
                                    perferendis earum mollitia dignissimos.
                                    Doloribus illo officiis itaque neque. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Alias, non. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Veniam, vero.
                                </p>
                                <div className="flex gap-6 px-6 sm:px-0">
                                    <div>
                                        <GrSecure className="text-4xl h-16 w-16 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                                    </div>
                                    <div>
                                        <IoFastFood className="text-4xl h-16 w-16 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                                    </div>
                                    <div>
                                        <GiFoodTruck className="text-4xl h-16 w-16 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                                    </div>
                                </div>
                                <div className="px-6 sm:px-0">
                                    <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                                        Order Now 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
