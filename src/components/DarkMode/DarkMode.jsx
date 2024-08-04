import React, { useEffect, useState } from "react";
import { LuSun } from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <>
            <div className="flex transition-all duration-200 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]">
                <button
                    onClick={changeTheme}
                    className={`flex items-center justify-start w-14 h-7 px-1 rounded-full transition-all duration-200 ${
                        theme === "dark" ? "bg-gray-500 justify-end" : "bg-gray-200 justify-start"
                    }`}
                >
                    {theme == "dark" ? (
                        <MdOutlineDarkMode className="transition-all duration-200 bg-gray-200 text-black w-5 h-5 p-1 rounded-full" />
                    ) : (
                        <LuSun className="transition-all duration-200 bg-white text-black w-5 h-5 p-1 rounded-full" />
                    )}
                </button>
            </div>
        </>
    );
};

export default DarkMode;
