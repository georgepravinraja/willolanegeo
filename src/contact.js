import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Pictures from "./pictures";
import { Row, Col, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./willow.css";


export default function Contact(){
    return(
        <>
        <Navbar/>
        <Row className="m-0">
        <Col  lg={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.921044104884!2d77.71189867477653!3d8.699048191349682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0412471d773739%3A0xb4dcacfd574b43d4!2sBRASSY%20ACADEMY%20%7C%20Tirunelveli!5e0!3m2!1sen!2sin!4v1712992036193!5m2!1sen!2sin" style={{width:"100%", height:"40vh", style:"border:0" ,allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
        </Col>
        </Row>
        <Container className="section-1">
            <Row className="m-0">
                <Col lg={6}>
                <p class="top-p">Willow Lane</p>
                <h1 class="top-h">CONTACT US OR VISIT</h1>
                <img src="./line" alt="line"></img>

                <InputGroup className="input-contents mb-3">
                    <Form.Control placeholder=" Email*"aria-label="email"aria-describedby="basic-addon1"/>
                </InputGroup>
                <InputGroup className="input-contents mb-3">
                    <Form.Control placeholder="Name*"aria-label="Username"aria-describedby="basic-addon1"/>
                </InputGroup>
                <InputGroup className=" mb-3">
                    <Form.Control className="input-message" placeholder="Type your message here*"aria-label="message"aria-describedby="basic-addon1"/>
                </InputGroup>

                <button class="send-message">SEND MESSAGE</button>
                </Col>
                <Col lg={6}>
                    <div className="contact-image">

                    </div>
                </Col>
            </Row>
        </Container>
        <Pictures/>
        <Footer/>
        
        </>
    )
}