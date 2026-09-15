
import {
    Button,
    Col,
    Container,
    Row,
} from "react-bootstrap";

import {
    faEnvelope,
    faLocationDot,
    faPhone,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Contact = () => {

    return (
        <>

            {/* ================= HERO ================= */}

            <section className="bg-warning-subtle py-5">

                <Container>

                    <Row className="align-items-center">

                        <Col xs={12} lg={7} className="py-4">

                            <span className="text-warning fw-bold">
                                GET IN TOUCH
                            </span>

                            <h1 className="display-4 fw-bold mt-2">
                                Contact Us
                            </h1>

                            <p className="text-secondary fs-5 mt-3">
                                We would love to hear from you! Whether you have a
                                question, feedback or need support, we are here
                                to help.
                            </p>

                        </Col>


                        <Col
                            lg={5}
                            className="d-none d-lg-flex justify-content-center"
                        >

                            <div
                                className="bg-warning rounded-circle d-flex justify-content-center align-items-center"
                                style={{
                                    width: "280px",
                                    height: "280px"
                                }}
                            >

                                {/* <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-white"
                                    style={{
                                        fontSize: "70px"
                                    }}
                                /> */}
                                <Image src={'/Assets/bose_headphone_image.png'}
                                width={250}
                                height={250}
                                alt="contactImage"></Image>
                                

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


            {/* ================= CONTACT ================= */}

            <Container className="py-5">

                <Row className="g-5">


                    {/* ================= INFORMATION ================= */}

                    <Col xs={12} lg={5}>

                        <span className="text-warning fw-bold">
                            CONTACT INFORMATION
                        </span>

                        <h2 className="fw-bold mt-2">
                            Lets Talk
                        </h2>

                        <p className="text-secondary mt-3 mb-4">
                            Our team is always ready to assist you.
                            Reach out through any of the following methods
                            and we will get back to you as soon as possible.
                        </p>


                        {/* Address */}

                        <div className="d-flex align-items-start gap-3 mb-4">

                            <div
                                className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                                style={{
                                    width: "50px",
                                    height: "50px"
                                }}
                            >

                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    className="text-warning"
                                />

                            </div>


                            <div>

                                <h6 className="fw-bold mb-1">
                                    Our Address
                                </h6>

                                <p className="text-secondary mb-0">
                                    123 Tech Street
                                    <br />
                                    Digital City
                                </p>

                            </div>

                        </div>


                        {/* Phone */}

                        <div className="d-flex align-items-start gap-3 mb-4">

                            <div
                                className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                                style={{
                                    width: "50px",
                                    height: "50px"
                                }}
                            >

                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-warning"
                                />

                            </div>


                            <div>

                                <h6 className="fw-bold mb-1">
                                    Phone Number
                                </h6>

                                <p className="text-secondary mb-0">
                                    +98 21 1234 5678
                                    <br />
                                    Mon - Fri, 9:00 AM - 6:00 PM
                                </p>

                            </div>

                        </div>


                        {/* Email */}

                        <div className="d-flex align-items-start gap-3">

                            <div
                                className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                                style={{
                                    width: "50px",
                                    height: "50px"
                                }}
                            >

                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-warning"
                                />

                            </div>


                            <div>

                                <h6 className="fw-bold mb-1">
                                    Email Address
                                </h6>

                                <p className="text-secondary mb-0">
                                    support@techstore.com
                                    <br />
                                    We will respond within 24 hours
                                </p>

                            </div>

                        </div>

                    </Col>


                    {/* ================= FORM ================= */}

                    <Col xs={12} lg={7}>

                        <div className="bg-light rounded-4 shadow-sm p-4 p-md-5">

                            <span className="text-warning fw-bold">
                                SEND A MESSAGE
                            </span>

                            <h2 className="fw-bold mt-2">
                                We would Love to Hear From You
                            </h2>

                            <p className="text-secondary">
                                Fill out the form below and we will get back
                                to you shortly.
                            </p>


                            <form className="mt-4">

                                <Row className="g-3">


                                    {/* Name */}

                                    <Col xs={12} md={6}>

                                        <div>

                                            <label className="form-label fw-semibold">
                                                Your Name
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control py-2"
                                                placeholder="Enter your name"
                                            />

                                        </div>

                                    </Col>


                                    {/* Email */}

                                    <Col xs={12} md={6}>

                                        <div>

                                            <label className="form-label fw-semibold">
                                                Your Email
                                            </label>

                                            <input
                                                type="email"
                                                className="form-control py-2"
                                                placeholder="Enter your email"
                                            />

                                        </div>

                                    </Col>


                                    {/* Subject */}

                                    <Col xs={12}>

                                        <div>

                                            <label className="form-label fw-semibold">
                                                Subject
                                            </label>

                                            <input
                                                type="text"
                                                className="form-control py-2"
                                                placeholder="What can we help you with?"
                                            />

                                        </div>

                                    </Col>


                                    {/* Message */}

                                    <Col xs={12}>

                                        <div>

                                            <label className="form-label fw-semibold">
                                                Your Message
                                            </label>

                                            <textarea
                                                className="form-control"
                                                rows={6}
                                                placeholder="Write your message..."
                                            />

                                        </div>

                                    </Col>


                                    {/* Button */}

                                    <Col xs={12}>

                                        <Button
                                            type="submit"
                                            variant="warning"
                                            className="w-100 py-2 fw-semibold text-white border-0"
                                        >

                                            Send Message

                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                                className="ms-2"
                                            />

                                        </Button>

                                    </Col>


                                </Row>

                            </form>

                        </div>

                    </Col>

                </Row>

            </Container>

        </>
    );
};


export default Contact;

