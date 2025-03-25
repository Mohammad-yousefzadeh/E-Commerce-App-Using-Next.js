import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch , faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid border-bottom border-black border-1 border-dark">
                <Row className="py-2">
                    <Col className="text-center ">
                        <Link href={'/'} className="nav-link">
                        <h3><span className="text-warning">Q</span>uickCart</h3>
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center d-none d-lg-flex">
                        <Link href={'/'} className="me-3 nav-link">Home</Link>
                        <Link href={'/product'} className="me-3 nav-link">Shop</Link>
                        <Link href={'#about-us'} className="me-3 nav-link">About us</Link>
                        <Link href={'#contact'} className="nav-link">Contact</Link>
                    </Col>
                    <Col className="text-center align-content-center">
                        <FontAwesomeIcon icon={faSearch}
                        style={{width : '18px'}}
                        className="me-2 d-none d-lg-inline-block text-secondary" />
                        <FontAwesomeIcon icon={faUser}
                        style={{width : '18px'}} 
                        className="me-2 text-secondary" />
                        <span>Account</span>
                    </Col>
                </Row>
            </div>
        </>
    );
}
 
export default Navbar;