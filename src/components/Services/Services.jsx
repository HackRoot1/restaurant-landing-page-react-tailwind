import React from "react";

import Img1 from "../../assets/biryani2.png";

const ServicesData = [
    {
        id: 1,
        img: Img1,
        name: "Biryani",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem?",
    },
    {
        id: 2,
        img: Img1,
        name: "Chicken Kari",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem?",
    },
    {
        id: 3,
        img: Img1,
        name: "Cold Cofee",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, dolorem?",
    },
];

const Services = () => {
    return (
        <>
            <div className="py-10">
                <div className="container">
                    {/* Header Section */}
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Our Services
                        </p>
                        <h1 className="text-3xl font-bold">Services</h1>
                        <p className="text-xs text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Unde, dolorem? Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Nisi, temporibus!
                        </p>
                    </div>
                    {/* Card Section */}
                    <div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 sm:gap-7 md:gap-16 place-items-center">
                            {ServicesData.map((item) => (
                                <div
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    key={item.id}
                                    className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl dark:hover:bg-primary"
                                >
                                    <div className="h-[100px]">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="max-w-[200px] mx-auto block transform -translate-y-16 group-hover:scale-105 group-hover:rotate-6 duration-300"
                                        />
                                    </div>
                                    <div className="p-4 text-center">
                                        <h1 className="text-xl font-bold">
                                            {item.name}
                                        </h1>
                                        <p className="text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
