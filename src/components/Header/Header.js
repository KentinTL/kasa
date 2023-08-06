import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
    return (
        <header>
            <img src="images/logo_header.png" alt="Logo Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </header>
    );
}

export default Header;
