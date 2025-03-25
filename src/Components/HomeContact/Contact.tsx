import { Col, Container, Row } from "react-bootstrap";
import HomeContactInput from "./ContactForm";

const HomeContact = () => {
    return (
        <>
            <Container className="my-5 pt-5">
                <Row className="justify-content-center">
                    <Col sm={12} lg={6} className="text-center">
                        <h1>Subscribe Now & get 20% OFF</h1>
                        <p className="text-secondary mb-5">Lorem, earum animi quidem qui earum animi numquam enim assumenda.</p>
                        <HomeContactInput />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default HomeContact;