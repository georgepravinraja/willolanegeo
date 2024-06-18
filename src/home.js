import React from "react";
import Navbar from "./navbar";
import {Col, Container,Row} from "react-bootstrap";
import Footer from "./footer";
import Brands from "./brands";
import Pictures from "./pictures";
import Carousel from "./carousel";



export default function Home(){
    return(
        <>
        <Navbar/>
        <div>
            <div className="section-1-bg">
                <Container>
                    <div>
                        <div><h1 id="title">Welcome to Willow Lane</h1></div>
                        <div><button  className="btn1">Book Online Or Buy A Voucher</button></div>
                    </div>
                </Container>
            </div>
            </div>
            <div>
                <Container>
            <div class="section2">
              <p class="section text">Welcome to Willow Lane Hair and Beauty… 🌴</p>
              <p class="section text"> Ladies, we’re Dubai’s favourite boutique style salon helping you to stay effortlessly fabulous! 🤍</p>
              <p class="section text">Located in the heart of JLT, we have UK trained hair and beauty experts ready to make you feel like the ultimate #Queen. </p> 
              <p class="section text">Our services include everything you need to look and feel your best,  from  acrylics to pedicures using the celebrity loved brand The Gel Bottle. Waxing, threading and more! But the icing on the cake? We’re colour experts in Balayage, ombré and highlights, cut and blowdry’s  plus we stock a wide range of gorgeous hair extensions.</p>
              <p class="section text">Feel free to pop in and say hi, we have the best coffee and love to chat too  ☕</p>
            </div>
                </Container>
            </div>
            <div className="section3"></div>
                <Container>
                <div className="section4">
                        <Row className="m-0">
                            <Col>
                                <h4 className="section4-h text-center">PARTNERS</h4>
                                <Brands/>
                                <div class="text-center"><button type="button"class="btn btn-dark px-4 py-2 section-4-button" >GALLERY</button></div>
                            </Col>
                            <Col>
                                <div className="section4bg"></div>
                            </Col>
                        </Row>
                </div>
                </Container>
                <Carousel/>
                <Pictures/>
                <Footer/>
        
        </>
    )
}