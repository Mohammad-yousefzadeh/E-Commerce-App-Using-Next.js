import HomeFooter from "@/src/Components/HomeFooter";
import { ProductData } from "@/src/Components/Products/FamousProducts";
import FormatCurrency from "@/src/Utility/FormatCurrency";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import { Container, Row } from "react-bootstrap";

const Products = async() => {

    const {data} = await axios.get("https://e-commerce-api-u657.onrender.com/Products")
    
    return (
        <>
            <Container>
                <Row className="mt-3">
                    <div className="w-100">
                        <h3 className="mt-4 fst-italic mb-2">All products</h3>
                        <div style={{width : "150px" , height : "3px" , backgroundColor : "orange" }} className="mt-4 mb-3 rounded"></div>
                   </div>
                    {
                        data.map((item : ProductData)=>(
                            <Link href={`/product/${item.id}`} key={item.id} 
                            className="col-12 col-md-4 col-lg-3 text-decoration-none text-black p-2 px-lg-5 py-lg-2">
                                <div className="bg-secondary-subtle rounded mb-2">
                                    <img src={item.image} className="w-100 products-anim" alt="" />
                                </div>
                                <h5>{item.title}</h5>
                                <span className="text-secondary mt-2">{item.description}</span>
                                <p>4.5 {Array(5).fill("").map(e =>(
                                    <FontAwesomeIcon style={{color : "orange"}} icon={faStar} />
                                ))}</p>
                                <div className="d-flex justify-content-between">
                                    <p className="fw-bolder">{FormatCurrency(item.price)}</p>
                                    <span className="text-secondary">Buy Now</span>
                                </div>
                            </Link> 
                        ))
                    }
                   <HomeFooter />
                </Row>
            </Container>
        </>
    );
}
 
export default Products;