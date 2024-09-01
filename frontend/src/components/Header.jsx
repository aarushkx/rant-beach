import React, { useState, useEffect } from "react";

function Header() {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = 0;

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) setIsVisible(false);
        else setIsVisible(true);

        lastScrollY = window.scrollY;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`bg-primary text-primary-content p-4 fixed top-0 w-full z-10 transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <h1 className="text-2xl font-bold text-center">Rant Beach</h1>
        </div>
    );
}

export default Header;
