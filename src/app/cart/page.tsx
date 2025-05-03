"use client"
import { AppContext } from "@/src/context/AppContext";
import FormatCurrency from "@/src/Utility/FormatCurrency";
import { faArrowLeft, faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Cart = () => {

    const {cartProducts , cartDecrement , AddToCart , removeFromCart , cartItemsQuantity , cartTotalPrice} = useContext(AppContext)

    return (
        <>
            <Container className="mt-4">
                <Row>
                    <Col sm={12} lg={8} className="overflow-x-scroll">
                        <div className="border-2 border-secondary-subtle border-bottom d-flex justify-content-between py-3">
                            <h2>Your<span className="text-warning">Cart</span></h2>
                            <h6 className="text-secondary align-content-end">{cartItemsQuantity()} Items</h6>
                        </div>
                        <table className="table table-borderless mt-4">
                            <thead>
                                <tr>
                                    <th>Product detlails</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            {
                                cartProducts.length > 0 ?
                                cartProducts.map(item=>(
                                   <tbody>
                                     <tr>
                                        <td className="d-flex">
                                            <img className="d-none d-lg-flex" src={item.image} style={{width : "100px"}} alt="" />
                                            <div className="justify-content-center align-content-center">
                                                <p>{item.title}</p>
                                                <span onClick={()=>{
                                                    removeFromCart(item)
                                                }} style={{cursor : "pointer"}} className="text-danger">Remove</span>
                                            </div>
                                        </td>
                                        <td className="align-content-center">
                                            <p>{FormatCurrency(item.price)}</p>
                                        </td>
                                        <td>
                                            <div className="d-flex">
                                                <div onClick={()=>{
                                                    cartDecrement(item)
                                                }} style={{cursor : "pointer"}} className="align-content-center">
                                                    <FontAwesomeIcon icon={faCircleChevronLeft} className="fs-5" />
                                                </div>
                                                <div className="p-1 text-center border mx-2">
                                                    {item.quantity}
                                                </div>
                                                <div onClick={()=>{
                                                    AddToCart(item)
                                                }} style={{cursor : "pointer"}} className="align-content-center" >
                                                    <FontAwesomeIcon icon={faCircleChevronRight} className="fs-5" />
                                                </div>
                                            </div>
                                        </td>
                                        <td >
                                            <span>{FormatCurrency(item.price * item.quantity)}</span>
                                        </td>
                                    </tr>
                                   </tbody>
                                )) :
                                <tbody>
                                    <tr></tr>
                                </tbody>
                            }
                        </table>
                        <Link href={'/product'} style={{color : "orange"}}>
                            continue shopping <FontAwesomeIcon className="ms-1 mt-3" icon={faArrowLeft} />
                        </Link>
                    </Col>
                    <Col sm={12} lg={4}>
                        <div className="p-0 p-lg-2 rounded my-5 my-lg-4" style={{background : "linear-gradient(white , rgb(218, 216, 216))"}}>
                            <h3>Order Summary</h3>
                            <hr />
                            <form>
                                <h4>Select Address</h4>
                                <input type="text" className="form-control mt-3 mb-2" placeholder="Enter Your Address" />
                                <hr />
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="mt-2">{cartItemsQuantity()} items</h5>
                                    <h6>{FormatCurrency(cartTotalPrice())}</h6>
                                </div>
                                <div className="d-flex justify-content-between my-2">
                                    <span className="text-secondary">Shopping Free</span>
                                    <span>Free</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>Tax(%2)</p>
                                    <p>{FormatCurrency(cartTotalPrice() * 0.02)}</p>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <h5>Total :</h5>
                                    <h5>{FormatCurrency(cartTotalPrice() * 1.02)}</h5>
                                </div>
                                <Link onClick={()=>{
                                    cartProducts.length = 0
                                }} 
                                href={'/'} className="btn form-control my-3 py-2 text-white"
                                style={{backgroundColor : "orange"}} >Place Order</Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
 
export default Cart;