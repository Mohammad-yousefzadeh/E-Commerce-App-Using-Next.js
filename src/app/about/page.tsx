
import {
    Button,
    Col,
    Container,
    Row,
} from "react-bootstrap";

import {
    faTruckFast,
    faShieldHalved,
    faHeadset,
    faStar,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";


const About = () => {

    return (
        <>

            {/* ================= HERO ================= */}

            <section className="bg-warning-subtle py-5">

                <Container>

                    <Row className="align-items-center">

                        <Col xs={12} lg={7} className="py-4">

                            <span className="text-warning fw-bold">
                                ABOUT OUR STORE
                            </span>

                            <h1 className="display-4 fw-bold mt-2">
                                We Make Shopping
                                <br />
                                <span className="text-warning">
                                    Simple & Better
                                </span>
                            </h1>

                            <p className="text-secondary fs-5 mt-3">
                                We are passionate about bringing you quality
                                products, great prices and an amazing shopping
                                experience.
                            </p>

                            <Link href="/product">

                                <Button
                                    variant="warning"
                                    className="border-0 text-white px-4 py-2 mt-3 fw-semibold"
                                >
                                    Explore Products
                                </Button>

                            </Link>

                        </Col>


                        {/* Hero decoration */}

                        <Col
                            lg={5}
                            className="d-none d-lg-flex justify-content-center"
                        >

                            <div
                                className="bg-warning rounded-circle d-flex justify-content-center align-items-center"
                                style={{
                                    width: "250px",
                                    height: "250px"
                                }}
                            >

                                <span
                                    className="text-white fw-bold"
                                    style={{
                                        fontSize: "70px"
                                    }}
                                >
                                    🛍️
                                </span>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>


            {/* ================= ABOUT US ================= */}

            <Container className="py-5">

                <Row className="align-items-center g-5">

                    <Col xs={12} lg={6}>

                        <div className="bg-light rounded-4 p-4 p-md-5 shadow-sm">

                            <h2 className="fw-bold mb-3">
                                Who We Are
                            </h2>

                            <p className="text-secondary lh-lg">
                                Welcome to our store! We are an online
                                shopping platform created to make finding
                                the products you love easier and faster.
                            </p>

                            <p className="text-secondary lh-lg">
                                From the latest electronics and headphones
                                to useful accessories, we carefully select
                                products that offer great quality and value.
                            </p>

                            <p className="text-secondary lh-lg mb-0">
                                Our goal is simple: provide a smooth,
                                reliable and enjoyable shopping experience
                                for every customer.
                            </p>

                        </div>

                    </Col>


                    <Col xs={12} lg={6}>

                        <span className="text-warning fw-bold">
                            WHY CHOOSE US
                        </span>

                        <h2 className="fw-bold mt-2">
                            Everything You Need
                        </h2>

                        <p className="text-secondary mt-3">
                            We focus on quality, customer satisfaction and
                            making online shopping as easy as possible.
                        </p>


                        {/* Feature 1 */}

                        <div className="d-flex align-items-start gap-3 mt-4">

                            <div
                                className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                                style={{
                                    width: "55px",
                                    height: "55px"
                                }}
                            >

                                <FontAwesomeIcon
                                    icon={faTruckFast}
                                    className="text-warning"
                                />

                            </div>

                            <div>

                                <h5 className="fw-bold mb-1">
                                    Fast Delivery
                                </h5>

                                <p className="text-secondary mb-0">
                                    Get your orders delivered quickly and
                                    safely to your doorstep.
                                </p>

                            </div>

                        </div>


                        {/* Feature 2 */}

                        <div className="d-flex align-items-start gap-3 mt-4">

                            <div
                                className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                                style={{
                                    width: "55px",
                                    height: "55px"
                                }}
                            >

                                <FontAwesomeIcon
                                    icon={faShieldHalved}
                                    className="text-warning"
                                />

                            </div>

                            <div>

                                <h5 className="fw-bold mb-1">
                                    Secure Shopping
                                </h5>

                                <p className="text-secondary mb-0">
                                    Your information and purchases are
                                    protected with secure technology.
                                </p>

                            </div>

                        </div>


                        {/* Feature 3 */}

                        <div className="d-flex align-items-start gap-3 mt-4">

                            <div
                                className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center flex-shrink-0"
                                style={{
                                    width: "55px",
                                    height: "55px"
                                }}
                            >

                                <FontAwesomeIcon
                                    icon={faHeadset}
                                    className="text-warning"
                                />

                            </div>

                            <div>

                                <h5 className="fw-bold mb-1">
                                    Customer Support
                                </h5>

                                <p className="text-secondary mb-0">
                                    Our support team is always ready to
                                    help you when you need us.
                                </p>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>


            {/* ================= STATS ================= */}

            <section className="bg-dark py-5">

                <Container>

                    <Row className="text-center text-white g-4">

                        <Col xs={6} md={3}>

                            <h2 className="fw-bold text-warning">
                                10K+
                            </h2>

                            <p className="mb-0 text-white-50">
                                Happy Customers
                            </p>

                        </Col>


                        <Col xs={6} md={3}>

                            <h2 className="fw-bold text-warning">
                                500+
                            </h2>

                            <p className="mb-0 text-white-50">
                                Products
                            </p>

                        </Col>


                        <Col xs={6} md={3}>

                            <h2 className="fw-bold text-warning">
                                4.8
                            </h2>

                            <p className="mb-0 text-white-50">
                                Average Rating
                            </p>

                        </Col>


                        <Col xs={6} md={3}>

                            <h2 className="fw-bold text-warning">
                                24/7
                            </h2>

                            <p className="mb-0 text-white-50">
                                Support
                            </p>

                        </Col>

                    </Row>

                </Container>

            </section>


            {/* ================= OUR PROMISE ================= */}

            <Container className="py-5">

                <Row>

                    <Col
                        xs={12}
                        className="text-center mb-4"
                    >

                        <span className="text-warning fw-bold">
                            OUR PROMISE
                        </span>

                        <h2 className="fw-bold mt-2">
                            Shopping You Can Trust
                        </h2>

                        <p className="text-secondary mx-auto mt-3"
                           style={{ maxWidth: "600px" }}
                        >
                            We believe every customer deserves quality
                            products, fair prices and excellent service.
                        </p>

                    </Col>


                    <Col xs={12} md={4} className="text-center mb-4">

                        <div
                            className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3"
                            style={{
                                width: "70px",
                                height: "70px"
                            }}
                        >

                            <FontAwesomeIcon
                                icon={faStar}
                                className="text-warning fs-4"
                            />

                        </div>

                        <h5 className="fw-bold">
                            Quality Products
                        </h5>

                        <p className="text-secondary">
                            Carefully selected products that deliver
                            great quality and value.
                        </p>

                    </Col>


                    <Col xs={12} md={4} className="text-center mb-4">

                        <div
                            className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3"
                            style={{
                                width: "70px",
                                height: "70px"
                            }}
                        >

                            <FontAwesomeIcon
                                icon={faShieldHalved}
                                className="text-warning fs-4"
                            />

                        </div>

                        <h5 className="fw-bold">
                            Trusted Service
                        </h5>

                        <p className="text-secondary">
                            We put customer satisfaction and trust
                            at the heart of everything we do.
                        </p>

                    </Col>


                    <Col xs={12} md={4} className="text-center mb-4">

                        <div
                            className="bg-warning-subtle rounded-circle d-flex justify-content-center align-items-center mx-auto mb-3"
                            style={{
                                width: "70px",
                                height: "70px"
                            }}
                        >

                            <FontAwesomeIcon
                                icon={faHeadset}
                                className="text-warning fs-4"
                            />

                        </div>

                        <h5 className="fw-bold">
                            Always Here
                        </h5>

                        <p className="text-secondary">
                            Our team is here to help before and after
                            your purchase.
                        </p>

                    </Col>

                </Row>

            </Container>


            {/* ================= CTA ================= */}

            <section className="bg-warning-subtle py-5">

                <Container>

                    <Row className="justify-content-center text-center">

                        <Col xs={12} lg={8}>

                            <h2 className="fw-bold">
                                Ready to Start Shopping?
                            </h2>

                            <p className="text-secondary mt-2">
                                Discover our latest products and find
                                something you will love.
                            </p>

                            <Link href="/product">

                                <Button
                                    variant="warning"
                                    className="text-white border-0 px-5 py-2 fw-semibold mt-2"
                                >
                                    Shop Now
                                </Button>

                            </Link>

                        </Col>

                    </Row>

                </Container>

            </section>

        </>
    );
};


export default About;

