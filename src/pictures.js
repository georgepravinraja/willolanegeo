import React from "react";
import "./willow.css";
import { Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Pictures(){
    return(
        <>
    <div class="section-5">
        <i class="fa-brands fa-square-instagram" style={{color:"#000000", fontSize:"20px"}}></i>
        <Link style={{fontSize:"20px"}}>WILLOWLANEDUBAI</Link>
    <Row className="pt-3 m-0">
        <Col lg={2}><div class="img51"></div></Col>
        <Col lg={2}><div class="img52"></div></Col>
        <Col lg={2}><div class="img53"></div></Col>
        <Col lg={2}><div class="img54"></div></Col>
        <Col lg={2}><div class="img55"></div></Col>  
        <Col lg={2}><div class="img56"></div></Col>
    </Row>
    <Row className="pt-3 m-0">
        <Col lg={2}><div class="img57"></div></Col>
        <Col lg={2}><div class="img58"></div></Col>
        <Col lg={2}><div class="img59"></div></Col>
        <Col lg={2}><div class="img510"></div></Col>
        <Col lg={2}><div class="img511"></div></Col>
        <Col lg={2}><div class="img512"></div></Col>
    </Row>
    <div class="section-5-button">
    <button class="button5"><i class="fa-brands fa-instagram" style={{color:"white"}}></i>  Follow on Instagram</button>
    </div>
    </div>
        </>
    )
}
