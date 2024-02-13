"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <Image
          alt={`carousel`}
          width={3880}
          height={700}
          style={{
            width: "100%",
            height: "90vh",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
          src="/images/slider1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          alt={`carousel`}
          width={3880}
          height={700}
          style={{
            width: "100%",
            height: "90vh",
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
          src="/images/slider2.png"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
