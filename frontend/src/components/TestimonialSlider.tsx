// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSlider() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/data/testimonials.json");
        const jsonData = await response.json();
        setTestimonials(jsonData);
      } catch (error) {
        toast.error("Error fetching projects");
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <div className="testimonialContainer">
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
        {testimonials?.map((testimonial: any) => (
          <SwiperSlide key={testimonial?.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
