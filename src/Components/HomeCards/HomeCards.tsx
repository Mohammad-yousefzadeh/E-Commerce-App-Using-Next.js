import { Button, Container, Row } from "react-bootstrap";
import "./HomeCards.css"
import image from "../../Assets/boy_with_laptop_image.png"
import Link from "next/link";

const HomeCards = () => {
    console.log(image.src);
    

    const CardsData =[
        {
            id : "1" ,
            title : "Unparalelled Sound" ,
            description : "Experience crystal-clear audio with premiuim headphones" ,
            image : "/_next/static/media/girl_with_headphone_image.c58b3a4a.png" ,
            path : "/"
        } ,
        {
            id : "2" ,
            title : "Stay Connected" ,
            description : "Compact and stylish headphones for every occasion" ,
            image : "/_next/static/media/girl_with_earphone_image.ea398932.png" ,
            path : "/"
        } ,
        {
            id : "3" ,
            title : "Power in Every Pixel" ,
            description : "Shop the latest laptops for work , gaming and more" ,
            image : "/_next/static/media/boy_with_laptop_image.1a4222e9.png" ,
            path : "/"
        }
    ] 

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <div className="text-center w-100">
                        <h3 className="mt-4 fst-italic mb-2">Featured Produts</h3>
                        <div style={{width : "150px" , height : "3px" , backgroundColor : "orange" , margin : "auto"}} className="mt-4 mb-3 rounded"></div>
                   </div>
                    {
                        CardsData.map((item , index)=>(
                            <>
                                <Link href={'/product'} 
                                key={item.id} 
                                className="col-12 col-md-6 col-lg-4 mb-0 mb-lg-5 p-5 py-3 p-lg-4 justify-content-center">
                                    <div className="card position-relative">
                                        <img className="w-100 card-img" src={item.image} alt="Card-image" />
                                        <div className="card-img-overlay text-white align-content-end animation">
                                            <h3 className="mb-2 card-title">{item.title}</h3>
                                            <p>{item.description}</p>
                                            <Button className="px-2 border-0" style={{backgroundColor : "orange"}}>Buy Now</Button>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        ))
                    } 
                </Row>
            </Container>
           
        </>
    );
}
 
export default HomeCards;