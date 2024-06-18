import React from "react";
import Brand from "./brands.json"
import "./willow.css";
import { Col, Row } from "react-bootstrap";

export default function Brands(){
    return(
        <>
        <Row className="m-0">
            {
                Brand.map((brand)=>(
                    <Col md={6} sm={12} lg={4}>
                        <img className="brimage" src={brand.icon} alt="logo"/>
                    </Col>
                ))
            }
        </Row>
        </>
    )
}
