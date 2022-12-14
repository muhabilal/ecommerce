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
      image: "image1.jpg",
    },
    { image: "image2.jpg" },
    {
      image: "image3.jpg",
    },
  ];
  const array = [
    { image: "winter.jpeg", text: "Winter" },
    { image: "winter.jpeg", text: "Summer" },
    { image: "winter.jpeg", text: "Kurta" },
    { image: "winter.jpeg", text: "Shirts" },
  ];
  const women = [
    { image: "women.jpg", text: "Winter" },
    { image: "women1.jpg", text: "Summer" },
    { image: "women.jpg", text: "Kurta" },
    { image: "women1.jpg", text: "Shirts" },
    { image: "women.jpg", text: "T-Shirt" },
    { image: "women1.jpg", text: "Pents" },
    { image: "women.jpg", text: "Winter" },
    { image: "women1.jpg", text: "Winter" },
  ];
  const kids = [
    { image: "kids.jpg", text: "Winter" },
    { image: "kids1.jpg", text: "Summer" },
    { image: "kids2.jpg", text: "Pent" },
    { image: "kids.jpg", text: "winter" },
    { image: "kids1.jpg", text: "winter" },
    { image: "kids2.jpg", text: "winter" },
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
                <img src={item.image} alt="image" className="avatar" />
                <p>{item.text}</p>
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
                <img src={item.image} alt="image" style={{ height: 200 }} />
                <p>{item.text}</p>
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
                <img src={item.image} alt="image" className="avatar" />
                <p>{item.text}</p>
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
