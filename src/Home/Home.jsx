import React from "react";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import ChartLine from "../Charts/ChartLine";
import ChartBar from "../Charts/ChartBar";
import ChartArea from "../Charts/ChartArea";
import ChartAreaTotal from "../Charts/ChartAreaTotal";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
function Home() {
  //Note that styles are not autoprefixed. To support older browsers, you need to supply corresponding style properties:
  const divStyle = {
    padding: "5px 120px",
  };
  const swipe = [
    {
      image: "image3.jpg",
    },
    {
      image: "image1.jpg",
    },
    { image: "image2.jpg" },
  ];
  const array = [
    { image: "winter.jpeg", text: "Winter", link: "/WinterMen" },
    { image: "nickerShirt.jpg", text: "Summer", link: "/SummerMen" },
    { image: "kurta.jpg", text: "Kurta", link: "/KurtaMen" },
    { image: "plainShirts.jpg", text: "Shirts", link: "/WinterMen" },
  ];
  const women = [
    { image: "women.jpg", text: "Winter", link: "/Winter" },
    { image: "summerWomen.jpeg", text: "Summer", link: "/Summer" },
    { image: "womenKurta.jpg", text: "Kurta", link: "/WinterMen" },
    { image: "womenShirt.jpeg", text: "Shirts", link: "/WinterMen" },
    { image: "TshirtWomen.jpg", text: "T-Shirt", link: "/WinterMen" },
  ];
  const kids = [
    { image: "kids.jpg", text: "Winter", link: "/WinterKids" },
    { image: "kidsSummer.jpg", text: "Summer", link: "/SummerKids" },
    { image: "kids2.jpg", text: "Pent/Shirt", link: "/WinterMen" },
    { image: "kidsKurts.png", text: "kurta", link: "/WinterMen" },
  ];
  console.log(array);
  return (
    <>
      <NavBar />
      {/* Swiper */}
      <div style={{ marginTop: 10 }}>
        <Swiper
          modules={[Navigation]}
          // spaceBetween={50}
          slidesPerView={1}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {swipe.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} style={{ width: "100%", height: 500 }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div style={divStyle}>
        <>
          <h1>Mens Fashion!</h1>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            navigation
          >
            {array.map((item, index) => (
              <SwiperSlide key={index} style={{ textAlign: "center" }}>
                <a href={item.link}>
                  <img src={item.image} alt="image" className="avatar" />
                  <p>{item.text}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
        {/* Women catogries */}
        <h1>Women Fashion!</h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4}
          navigation
        >
          {women.map((item, index) => (
            <SwiperSlide key={index} style={{ textAlign: "center" }}>
              <div
                style={{
                  backgroundColor: "white",
                  width: "70%",
                  marginLeft: 50,
                }}
              >
                <a href={item.link}>
                  <img src={item.image} alt="image" style={{ height: 200 }} />
                  <p>{item.text}</p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <>
          <h1>Kids Fashion!</h1>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            navigation
          >
            {kids.map((item, index) => (
              <SwiperSlide key={index} style={{ textAlign: "center" }}>
                <a href={item.link}>
                  <img src={item.image} alt="image" className="avatar" />
                  <p>{item.text}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
        {/*Below code for Graph */}
        <div style={{ width: "100%" }}>
          <h1>Offers</h1>
          <div className="gridContainer">
            <div className="gridItem">
              <ChartLine />
            </div>
            <div className="gridItem">
              <ChartBar />
            </div>
            <div className="gridItem">
              <ChartArea />
            </div>
            <div className="gridItem">
              <ChartAreaTotal />
            </div>
          </div>
        </div>
        {/* {array.map((item, index) => (
          <p key={index}>{item.text}</p>
        ))} */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
