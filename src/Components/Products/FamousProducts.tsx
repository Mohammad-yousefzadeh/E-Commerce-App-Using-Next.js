import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import FormatCurrency from "@/src/Utility/FormatCurrency";
import Link from "next/link";
import "./FamousProducts.css"

export interface ProductData {
    id : string 
    title : string
    description : string 
    price : number
    image : string
}

const FamousProducts = async() => {
    
    const {data} = await axios.get("https://e-commerce-api-u657.onrender.com/Products")
      
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <h2 className="mb-3 mb-lg-5 mt-4 text-center fst-italic">Popular products</h2>
                    {
                        data.map((item : ProductData , index : number)=>(
                            index < 8 &&
                            <Link href={`/product/${item.id}`} key={item.id} 
                            className="col-12 col-md-4 col-lg-3 text-decoration-none text-black p-3 px-lg-5 py-lg-2">
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
                   <div className="text-center w-100">
                        <div style={{width : "170px" , height : "1px" , backgroundColor : "gray" , margin : "auto"}} className="mt-4"></div>
                        <Link href={'/product'} className="text-secondary mt-2 text-decoration-none fs-5 mb-3">see more</Link>
                   </div>
                </Row>
            </Container>
        </>
    );
}
 
export default FamousProducts;