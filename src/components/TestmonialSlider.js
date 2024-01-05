// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import TestmonialCard from "./TestmonialCard";

export default function TestmonialSlider() {
  const [testmonials, setTestmonials] = useState([]);

  useEffect(() => {
    fetch("./data/testmonials.json")
      .then((response) => response.json())
      .then((jsonData) => setTestmonials(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="testmonialContainer">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testmonials?.map((testmonial) => {
          return (
            <SwiperSlide key={testmonial?.id}>
              <TestmonialCard testmonial={testmonial} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
