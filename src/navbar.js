import React from "react";
import { Link } from 'react-router-dom';
import "./willow.css";


export default function Navbar(){
    return(
        <>
        <div className="head">
            <img className="headlogo" src="./willow logo.png" alt="willow logo"></img>
        </div>
        <nav className="navbar">
            <ul className="navlist">
               <li>
                    <Link id="link1" to="/">Home</Link>
                </li>
                <li>
                    <Link id="link1" to="/">About Us</Link>
                </li>
                <li>
                    <Link id="link1" to="/pricelist">Price List</Link>
                </li>
                <li>
                    <Link id="link1" to="/">Gallery</Link>
                </li>
                <li>
                    <Link id="link1" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
        
        
        </>
    );
}

