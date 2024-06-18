
import React from "react";
import "./willow.css";
import {Container} from "react-bootstrap"



export default function Carousel(){
    return(
        <>
        <div className="testimonial text-center">
            <Container>
            <div class="heading white-heading">
            <p>You said about us</p>
            WHAT OUR CLIENTS THINK
        </div>
        <div id="testimonial4" class="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
         
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <div class="testimonial4_slide">
                        <p>Willow Lane is the best salon I have been to in Dubai. It is now a home away from home for me and I love visiting. They are great with colouring blonde hair and great with nails (you can even have both treatments at the same time to save time).</p>
                        <h4>Katy Ben</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial4_slide">
                        <p>I’ve been here couple times. Great atmosphere and friendly staffs. It’s my new favourite place for manicure and pedicure. </p>
                        <h4>Leah Lo</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial4_slide">
                        <p>Hair by Brogan, always. She is amazing and I wouldn't go anywhere other than Willow Lane. From balayage to full blonde, she sorts me out every time. Salon is beautiful and super friendly, definitely worth the trip</p>
                        <h4>Beth Farlam</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial4_slide">
                        <p>I would definitely recommend this beautiful salon. Staff were extremely welcoming and friendly. Had my hair done by Suzie which looked and felt great. (Loved the head massage.) On my second visit I had a gel manicure and pedicure. My eyebrows threaded, amazing so relaxing. Will definitely be back. Five star treatment</p>
                        <h4>Angela Martin</h4>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="testimonial4_slide">
                        <p>Amazing salon with very professional staff, great range of services available</p>
                        <h4>XMPT Fitness</h4>
                    </div>
                </div>
            </div>
        </div>
            </Container>
        </div>
        </>
    )
}