import React from "react";
import Slider from "react-slick";

const TestimonialsData = [
    {
        id: 1,
        name: "Samuel",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error atque quibusdam fugiat assumenda placeat necessitatibus, nemo suscipit corrupti iure!",
        img: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    },
    {
        id: 2,
        name: "Samuel",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error atque quibusdam fugiat assumenda placeat necessitatibus, nemo suscipit corrupti iure!",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3esCVzM5VwmCn8tdPoMu7MRk_M2w59qKmd-XWwMn5fg77UbPg5l7I_lUPAA0uf1EU3o&usqp=CAU",
    },
    {
        id: 3,
        name: "Samuel",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error atque quibusdam fugiat assumenda placeat necessitatibus, nemo suscipit corrupti iure!",
        img: "https://img.freepik.com/free-photo/lifestyle-beauty-fashion-people-emotions-concept-young-asian-female-office-manager-ceo-with-pleased-expression-standing-white-background-smiling-with-arms-crossed-chest_1258-59329.jpg",
    },
];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinity: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    };

    return (
        <div data-aos="fade-up" data-aos-duration="300" className="py-10">
            <div className="container">
                {/* Header Section */}

                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Testimonial
                    </p>
                    <h1 className="text-3xl font-bold">Testimonial</h1>
                    <p className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde, dolorem? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nisi, temporibus!
                    </p>
                </div>

                {/* Testimonials section */}
                <div
                    data-aos="zoom-in"
                    data-aos-duration="500"
                    className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
                >
                    <Slider {...settings}>
                        {TestimonialsData.map((item) => (
                            <div key={item.id} className="my-6">
                                <div className="flex flex-col items-center justify-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                    <div className="h-[150px] w-[150px]">
                                        <img
                                            src={item.img}
                                            className="rounded-full block mx-auto w-full h-full"
                                            alt=""
                                        />
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        {item.text}
                                    </p>
                                    <h1 className="text-xl font-bold">
                                        {item.name}
                                    </h1>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ”
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
