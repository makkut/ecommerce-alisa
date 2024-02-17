"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AlisaLogo from "../AlisaLogo";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import { cn } from "@/lib/utils";

const Slider = () => {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide className="relative">
        <div
          className={cn(
            "absolute text-white",
            isDesktop ? "pl-28 pt-20" : "pl-5 pt-5"
          )}
        >
          <AlisaLogo size={cn(isDesktop ? 80 : 50)} />
          <h2
            className={cn(
              isDesktop
                ? "text-[5rem] pt-5 leading-[1.15]"
                : "text-[2rem] pt-5 leading-[1.25]"
            )}
          >
            Новая Яндекс <br />
            Станция Дуо Макс
          </h2>
          <p
            className={cn(
              isDesktop
                ? "text-[3rem] pt-10 leading-[1.15]"
                : "text-[1.2rem] pt-5 leading-[1.25]"
            )}
          >
            Новый уровень <br />
            взаимодействия <br />с Алисой
          </p>
        </div>
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
          src={isDesktop ? "/images/slider1.png" : "/images/mobile-slider1.png"}
        />
      </SwiperSlide>
      <SwiperSlide className="relative">
        <div
          className={cn(
            "absolute text-white",
            isDesktop ? "pl-28 pt-20" : "pl-5 pt-5"
          )}
        >
          <AlisaLogo size={cn(isDesktop ? 80 : 50)} white={true} />
          <h2
            className={cn(
              isDesktop
                ? "text-[5rem] pt-5 leading-[1.15]"
                : "text-[2rem] pt-5 leading-[1.25]"
            )}
          >
            Новая Яндекс <br /> Станция Миди <br />с Алисой
          </h2>
          <p
            className={cn(
              isDesktop
                ? "text-[3rem] pt-10 leading-[1.15]"
                : "text-[1.2rem] pt-5 leading-[1.25]"
            )}
          >
            Мощный звук в <br />
            компактном <br />
            корпусе
          </p>
        </div>
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
          src={isDesktop ? "/images/slider2.png" : "/images/mobile-slider2.png"}
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider;
