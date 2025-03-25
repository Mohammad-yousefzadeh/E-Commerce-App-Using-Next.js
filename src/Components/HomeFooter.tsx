import { Col, Container, Row } from "react-bootstrap";

const HomeFooter = () => {
    return (
        <>
            <Container className="pt-5">
                <Row className="pt-4">
                    <Col>
                        <h2><span className="text-warning">Q</span>uickCart</h2>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Ducimus, vitae, at doloribus iusto modi aliquid ipsam adipisci unde consequatur
                            asperiores sequi sapiente cumque,
                        </p>
                    </Col>
                    <Col className="text-center">
                        <h6 className="fw-bold mb-4">Company</h6>
                        <ul className="list-unstyled text-secondary">
                            <li>Home</li>
                            <li className="mt-2">About</li>
                            <li className="mt-2">Contact us</li>
                            <li className="mt-2">Privacy policy</li>
                        </ul>
                    </Col>
                    <Col className="text-center">
                        <h6 className="fw-bold mb-4">Get in touch</h6>
                        <ul className="list-unstyled text-secondary">
                            <li>+0192345789</li>
                            <li className="mt-2">QuickCart@gmail.com</li>
                        </ul>
                    </Col>
                    <hr className="mt-4" />
                    <p className="text-center fw-bold">Copyright 2025 &Copy; Mohammad Yousefzadeh</p>
                </Row>
            </Container>
        </>
    );
}
 
export default HomeFooter;