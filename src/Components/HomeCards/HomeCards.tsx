import { Button, Container, Row } from "react-bootstrap";
import "./HomeCards.css"
import Link from "next/link";

const HomeCards = () => {
  const CardsData = [
    {
      id: "1",
      title: "Unparalelled Sound",
      description:
        "Experience crystal-clear audio with premiuim headphones",
      image: "/Assets/girl_with_headphone_image.png",
      path: "/product",
    },
    {
      id: "2",
      title: "Stay Connected",
      description:
        "Compact and stylish headphones for every occasion",
      image: "/Assets/girl_with_earphone_image.png",
      path: "/product",
    },
    {
      id: "3",
      title: "Power in Every Pixel",
      description:
        "Shop the latest laptops for work, gaming and more",
      image: "/Assets/boy_with_laptop_image.png",
      path: "/product",
    },
  ];

  return (
    <Container className="mt-5">
      <Row>
        {/* Title */}
        <div className="text-center w-100">
          <h3 className="mt-4 fst-italic mb-2">
            Featured Products
          </h3>

          <div
            style={{
              width: "150px",
              height: "3px",
              backgroundColor: "orange",
              margin: "auto",
            }}
            className="mt-4 mb-3 rounded"
          ></div>
        </div>

        {/* Cards */}
        {CardsData.map((item) => (
          <Link
            href={item.path}
            key={item.id}
            className="col-12 col-md-6 col-lg-4 mb-0 mb-lg-5 p-5 py-3 p-lg-4 justify-content-center text-decoration-none"
          >
            <div className="card position-relative">
              
              <img
                className="w-100 card-img"
                src={item.image}
                alt={item.title}
              />

              <div className="card-img-overlay text-white align-content-end animation">
                <h3 className="mb-2 card-title">
                  {item.title}
                </h3>

                <p>{item.description}</p>

                <Button
                  className="px-2 border-0"
                  style={{
                    backgroundColor: "orange",
                  }}
                >
                  Buy Now
                </Button>
              </div>

            </div>
          </Link>
        ))}
      </Row>
    </Container>
  );
};

export default HomeCards;