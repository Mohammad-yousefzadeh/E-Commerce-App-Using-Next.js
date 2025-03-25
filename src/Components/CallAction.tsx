import { Button, Col, Container, Row } from "react-bootstrap";
import SoundBox from "../Assets/jbl_soundbox_image.png"
import ControllerImage from "../Assets/sm_controller_image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeCallAction = () => {
    return (
        <>
            <Container>
                <Row className="bg-secondary-subtle mt-5 mx-3 m-lg-5 rounded mb-5">
                    <Col className="text-center align-content-center d-none d-lg-block">
                        <img src={SoundBox.src} className="w-75" alt="Sound-Box-Image" />
                    </Col>
                    <Col className="text-center justify-content-center align-content-center py-3 py-lg-0">
                        <h2 className="mb-2">Level Up Your Gaming Experience</h2>
                        <p className="text-secondary">From immersive sound precise controls-- everything you need to win</p>
                        <Link href={'/product'}>
                            <Button className="px-4 border-0" style={{backgroundColor : "orange"}}>Buy Now<FontAwesomeIcon className="ms-1" icon={faArrowRight} /></Button>
                        </Link>
                    </Col>
                    <Col className="text-end d-none d-lg-block">
                        <img src={ControllerImage.src} className="w-75" alt="Sound-Box-Image" />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default HomeCallAction;