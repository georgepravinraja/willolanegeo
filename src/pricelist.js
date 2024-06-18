import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Container } from "react-bootstrap";
import "./willow.css";
import Prices from "./prices";



export default function Pricelist(){
    return(
        <>
        <Navbar/>
        <div className="pricelist-list-image">
            <Container>
                <div>
                    <h1 className="section-1-h">Our Price List</h1>
                </div>
            </Container>
        </div>
        <Prices/>
        <Footer/>
        </>
    )
}