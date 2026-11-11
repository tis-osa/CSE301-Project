import React, { useState } from "react";
import "./NavigationBar.css";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar" role="navigation" aria-label="Main Navigation">
            <div className="navbar-brand">
                <a href="/">BrandLogo</a>
            </div>

            <button
                className="navbar-toggle"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label="Toggle navigation menu"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
                <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
                <li><a href="/services" onClick={() => setIsOpen(false)}>Services</a></li>
                <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
        </nav>
    );
}


export default Navigation