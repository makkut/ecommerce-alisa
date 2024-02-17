"use client";

import Image from "next/image";

import { useMediaQuery } from "@/app/hooks/use-media-query";
import { cn } from "@/lib/utils";

const InterfaceBanner = () => {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  return (
    <div className="relative bg-black">
      <h2
        className={cn(
          "absolute text-[3rem] w-full leading-[1.15] text-white text-center top-10",
          isDesktop
            ? "text-[3rem] pt-5 leading-[1.15] "
            : "text-[1.5rem] sm:text-[3rem] md:text-[3.4rem] pt-5 leading-[1.25]"
        )}
      >
        Первая Станция {!isDesktop && <br />}с экраном
      </h2>
      <Image
        alt="interface banner"
        width={3880}
        height={isDesktop ? 700 : 795}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          backgroundAttachment: "fixed",
        }}
        src={
          isDesktop
            ? "/images/bannerInterface3.png"
            : "/images/mbannerInterface.png"
        }
      />
    </div>
  );
};

export default InterfaceBanner;
