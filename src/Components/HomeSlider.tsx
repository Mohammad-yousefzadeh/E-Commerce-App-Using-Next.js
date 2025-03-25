"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import playStation from "../Assets/header_playstation_image.png"
import macBook from "../Assets/header_macbook_image.png"
import headPhone from "../Assets/header_headphone_image.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/bundle'
import Link from "next/link";

const HomeSlider = () => {

    return (
        <>
         <Container className="mt-4 mt-lg-5">
            <Row className="m-2 m-lg-0 bg-secondary-subtle rounded p-2 py-3">
                    <Swiper
                         modules={[Navigation , Autoplay , A11y]}
                         spaceBetween={50}
                         slidesPerView={1}
                         speed={500}
                         autoplay={{delay : 2000}}
                       >
                        
                        <SwiperSlide>
                            <Row className="h-100 d-flex flex-wrap-reverse">
                                <Col xs={12} lg={6} className="p-1 p-lg-4 mt-3 mt-lg-0 align-content-center text-center text-lg-start">
                                    <span style={{color : "orange"}}>Hurry up only few lefts!</span>
                                    <h1 className="mb-3 fs-3 fw-bold">Next-Level Gaming Start here - Discover Play Station 5 Today</h1>
                                    <Link href={'/product'} className="btn p-2 px-3 rounded-5 border-0 me-3" style={{backgroundColor : 'orange'}}>Shop Now</Link> 
                                    <span>Explore deals <FontAwesomeIcon icon={faArrowRight} /></span>
                                </Col>
                                <Col xs={12} lg={6} className="text-center">
                                    <img src={playStation.src} style={{width : "50%"}} alt="Header-image" />
                                </Col>
                            </Row>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Row className="h-100 d-flex flex-wrap-reverse">
                                <Col xs={12} lg={6} className="mt-3 mt-lg-0 p-1 p-lg-4 align-content-center text-center text-lg-start">
                                    <span style={{color : "orange"}}>Hurry up only few lefts!</span>
                                    <h1 className="mb-3 fs-3 fw-bold">Next-Level Gaming Start here - Discover Play Station 5 Today</h1>
                                    <Link href={'/product'} className="btn p-2 px-3 rounded-5 border-0 me-3" style={{backgroundColor : 'orange'}}>Shop Now</Link> 
                                    <span>Explore deals <FontAwesomeIcon icon={faArrowRight} /></span>
                                </Col>
                                <Col xs={12} lg={6} className="text-center">
                                    <img src={headPhone.src} style={{width : "50%"}} alt="Header-image" />
                                </Col>
                            </Row>
                        </SwiperSlide >
                        <SwiperSlide>
                            <Row className="h-100 d-flex flex-wrap-reverse">
                                <Col xs={12} lg={6} className="mt-3 mt-lg-0 p-1 p-lg-4 align-content-center text-center text-lg-start">
                                    <span style={{color : "orange"}}>Hurry up only few lefts!</span>
                                    <h1 className="mb-3 fs-3 fw-bold">Next-Level Gaming Start here - Discover Play Station 5 Today</h1>
                                    <Link href={'/product'} className="btn p-2 px-3 rounded-5 border-0 me-3" style={{backgroundColor : 'orange'}}>Shop Now</Link> 
                                    <span>Explore deals <FontAwesomeIcon icon={faArrowRight} /></span>
                                </Col>
                                <Col xs={12} lg={6} className="text-center align-content-center">
                                    <img src={macBook.src} style={{width : "50%"}} alt="Header-image" />
                                </Col>
                            </Row>
                        </SwiperSlide>                  
                    </Swiper>
                </Row >
            </Container>
        </>
    );
}
 
export default HomeSlider;