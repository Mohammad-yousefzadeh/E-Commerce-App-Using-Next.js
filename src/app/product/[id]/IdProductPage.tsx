"use client"
import FormatCurrency from "@/src/Utility/FormatCurrency";
import { faCheck, faCheckCircle, faCircleCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./idProductPage.css"
import Link from "next/link";
import { AppContext } from "@/src/context/AppContext";

interface IProductProps{
    id : string 
    data : IProduct[]
}

export type IProduct ={
    id : string 
    title : string
    description : string 
    price : number
    image : string
}

const IdProductPage = ({data , id} : IProductProps) => {

    const [product , setProduct] = useState<IProduct[]>([])
    const [popUp , setPopUp] = useState(false)
    const {AddToCart} = useContext(AppContext)

    const handlePopUp = () => {
        return popUp ? "add-to-cart-active" : ""
    }
    
    useEffect(()=>{
        setProduct(()=>{
            const result = data.find((item : IProduct)=>{
                return item.id === id
            })
            if(result !== undefined){
                return [result]
            }
            else{
                redirect('/not-found')
            }
        })
    } , [id])

    useEffect(()=>{
        handlePopUp()
    } , [popUp])

    console.log(popUp);
    
    return (
        <>
            <div className={`add-to-cart-popup align-content-center ${handlePopUp()}`}>
                <span><FontAwesomeIcon className="me-1 text-success" icon={faCircleCheck} /> Item Added to cart </span>
            </div>
            <Container className="mb-5 mb-lg-0">
                <Row>
                    {
                        product.map(item =>(
                            <>
                                <Col sm={12} md={6}>
                                    <img src={item?.image} className="w-100 " alt="" />
                                </Col>
                                <Col sm={12} md={6} className="align-content-center">
                                    <h2>{item?.title}</h2>
                                    <div> 4.5 {
                                        Array(5).fill("").map(()=>(
                                            <FontAwesomeIcon icon={faStar} className="text-warning" />
                                        ))
                                    }</div>
                                    <p className="text-secondary-emphasis my-4">Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Aliquid tempora quaerat similique, molestias
                                    doloribus pariatur distinctio ipsum! Quo, natus nulla.  Unde beatae ex est
                                    perspiciatis Unde beatae ex est perspiciatis aliquam nu aliquam nulla eum
                                    asperiors temporibus.</p>
                                    <div className="d-flex">
                                        <h2 className="fw-bold">{FormatCurrency(item?.price)}</h2>
                                        <del className="text-secondary ms-3 align-content-center"><h6>{FormatCurrency(item?.price * 1.3)}</h6></del>
                                    </div>
                                    <div className="d-flex mt-4">
                                        <Button onClick={()=>{
                                            setPopUp(true)
                                            setTimeout(()=>{
                                                setPopUp(false)
                                            } , 3000)
                                            AddToCart(item)
                                        }} className="form-control mx-2 py-2 text-black" variant="outline-secondary">Add to cart</Button>
                                        <Link href={'/cart'} className="btn btn-warning form-control mx-2 py-2">Buy Now</Link>
                                    </div>
                                </Col>
                            </>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}
 
export default IdProductPage;