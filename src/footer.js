import React from "react";
import "./willow.css";
import { Container, Col, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';



export default function Footer(){
    return(
        <>
            <Container>
                <Row className="m-0">
                    <Col lg={4}>
                        <div className="footer-contents">
                            <div className="footer-logo"><img className="footerimg" src="./willow logo.png" alt="willow logo"></img></div>
                            <h2 className="social-pages">Social Pages</h2>
                            <Link id="fonticons">|<i class="fa-brands fa-facebook-f" ></i>|<i class="fa-brands fa-square-instagram"></i>|</Link>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer-contents">
                            <h2 className="info">INFO</h2>
                            <p id="address">Address: Willow Lane,<br></br>Downstairs at Lake Level,<br></br>Next to Costa Coffee,<br></br>Cluster C, JLT, Dubai<br></br>Telephone: 052-584-8201<br></br>
                                            Write us: info@willowlane.ae,</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="footer-contents">
                        <h2 className="FUH">FIND US HERE</h2>
                        <div className="google-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.921044104884!2d77.71189867477653!3d8.699048191349682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0412471d773739%3A0xb4dcacfd574b43d4!2sBRASSY%20ACADEMY%20%7C%20Tirunelveli!5e0!3m2!1sen!2sin!4v1712992036193!5m2!1sen!2sin" style={{width :"100%", height :"30vh" , border:"0" , allowfullscreen :"" , loading :"lazy" , referrerpolicy :"no-referrer-when-downgrade"}}></iframe>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            <div className="last-line">
            <p>Copyright @ <Link className="last-link">Willowlane 2021</Link></p>
            </div>
        </>
    )
}