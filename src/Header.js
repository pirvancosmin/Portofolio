import React from "react";
import './App.css';

function Header() {
    return(
        <header>
        <h1>Welcome to my portofolio</h1>
        <ul className='list'>
            <li className="listitem"><a href="#about">About</a></li>
            <li className="listitem"><a href="#projectsH">Projects</a></li>
            <li className="listitem"><a href="#contact">Contact</a></li>
        </ul>
        </header>
    );
}
export default Header;
