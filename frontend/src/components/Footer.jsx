import React, { useState, useEffect } from "react";

function Footer() {
    const [isVisible, setIsVisible] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) setIsVisible(true);
            else setIsVisible(false);

            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer
            className={`footer footer-center bg-primary text-primary-content font-medium p-2 text-center fixed bottom-0 w-full z-10 transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "translate-y-full"
            }`}
        >
            <aside>
                &copy; {new Date().getFullYear()} Rant Beach. All rights
                reserved.
            </aside>
        </footer>
    );
}

export default Footer;
