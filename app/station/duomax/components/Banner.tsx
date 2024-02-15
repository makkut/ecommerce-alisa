"use client";

import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

import { useMediaQuery } from "@/app/hooks/use-media-query";
import { cn } from "@/lib/utils";
import YandexLogo from "@/components/YandexLogo";

const robotoCondensed = Roboto_Condensed({ subsets: ["cyrillic"] });

const Banner = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <div className="relative">
      <div
        className={cn(
          "absolute text-white space-x-5 flex justify-center items-center",
          robotoCondensed.className,
          isDesktop ? "pl-28 top-[10%]" : "w-full text-center top-[3%]"
        )}
      >
        <YandexLogo size={42} />
        <h2 className="text-3xl">Станция Дуо Макс</h2>
      </div>
      <div
        className={cn(
          "absolute text-white w-full",
          isDesktop
            ? "pl-28 pt-52"
            : "top-[60%] sm:top-[60%] md:top-[65%]  text-center"
        )}
      >
        <h2
          className={cn(
            isDesktop
              ? "text-[3rem] pt-5 leading-[1.15]"
              : "text-[1.5rem] sm:text-[3rem] md:text-[3.4rem] pt-5 leading-[1.25]"
          )}
        >
          Новая флагманская <br />
          Яндекс Станция
          <br /> с Алисой
        </h2>
        <p
          className={cn(
            isDesktop
              ? "text-[2rem] pt-10 leading-[1.15]"
              : "text-[1rem] sm:text-[1.5rem] md:text-[2rem] pt-8 leading-[1.25]"
          )}
        >
          И совершенно новый уровень взаимодействия <br />с виртуальным
          ассистентом
        </p>
      </div>
      <Image
        alt={`carousel`}
        width={3880}
        height={isDesktop ? 700 : 1346}
        style={{
          width: "100%",
          height: isDesktop ? "90vh" : "100%",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
        src={isDesktop ? "/images/duomax.png" : "/images/mduomax.png"}
      />
    </div>
  );
};

export default Banner;
