"use client";

import Image from "next/image";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import Block from "./Block";

const ClearSound = () => {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  return (
    <div className="text-white pt-7 bg-black">
      {isDesktop ? (
        <div className="relative">
          <div className="absolute right-0 bottom-0">
            <Image
              alt={`union`}
              width={3880}
              height={222}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
              className="z-50"
              src={"/images/union.png"}
            />
          </div>
          <div className="absolute w-[1680px] h-[1097px] left-[177px] right-[-417px] top-[-75px] bottom-[-222px] filter blur-[270px] bg-[linear-gradient(0.00deg,_rgba(14,_17,_21,_0.3)_0.26%,rgba(167,_129,_255,_0.3)_12.315%,rgba(74,_38,_255,_0.3)_45.373%,rgba(74,_38,_255,_0)_94.587%)]"></div>
          <div className="flex justify-center">
            <div className="absolute w-[1200px] pt-10 -translate-y-2/4 top-2/4">
              <h2 className="text-[3rem] pt-20 leading-[1.15]">
                Чистое звучание
              </h2>
              <div className="w-[600px] pt-10">
                <h3 className="text-[1.5rem]">Динамики мощностью 60 Вт</h3>
                <p className=" pt-3">
                  Широкополосные и низкочастотный динамики созданы в Яндексе для
                  Станции Дуо Макс
                </p>
                <h3 className="text-[1.5rem]  pt-7">Встроенный сабвуфер</h3>
                <p className=" pt-3">
                  Впечатляюще мощный звук с глубокими басами — для большего
                  удовольствия от музыки
                </p>
                <h3 className="text-[1.5rem]  pt-7">Room Correction</h3>
                <p className=" pt-3">
                  Звучание колонки адаптируется под форму и размер помещения
                </p>
                <h3 className="text-[1.5rem]  pt-7">
                  Восемь чувствительных микрофонов
                </h3>
                <p className=" pt-3">
                  Разнонаправленные микрофоны позволяют Алисе слышать команды
                  даже в большом и шумном помещении
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Image
              alt={`clear sound`}
              className="z-20"
              width={3880}
              height={222}
              style={{
                width: "65%",
                height: "100%",
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
              src={"/images/clearSound.png"}
            />
          </div>
        </div>
      ) : (
        <Block
          title="Чистое звучание"
          classN2="text-[1.8rem] pt-10 leading-[1.25] pr-20 pl-6"
          classN="h-[910px]"
        >
          <div className="relative">
            {/* <div className="absolute w-[800px] h-[500px] left-[177px] right-[-417px] top-[-75px] bottom-[-222px] filter blur-[270px] bg-[linear-gradient(0.00deg,_rgba(14,_17,_21,_0.3)_0.26%,rgba(167,_129,_255,_0.3)_12.315%,rgba(74,_38,_255,_0.3)_45.373%,rgba(74,_38,_255,_0)_94.587%]" /> */}
            <div className="absolute pt-64 z-30">
              <div className="px-5">
                <h3 className="text-[18px]">Динамики мощностью 60 Вт</h3>
                <p className="text-[14px] pt-3 opacity-85">
                  Широкополосные и низкочастотный динамики созданы в Яндексе для
                  Станции Дуо Макс
                </p>
                <h3 className="text-[18px]  pt-7">Встроенный сабвуфер</h3>
                <p className="text-[14px] pt-3 opacity-85">
                  Впечатляюще мощный звук с глубокими басами — для большего
                  удовольствия от музыки
                </p>
                <h3 className="text-[18px]  pt-7">Room Correction</h3>
                <p className="text-[14px] pt-3 opacity-85">
                  Звучание колонки адаптируется под форму и размер помещения
                </p>
                <h3 className="text-[18px]  pt-7 ">
                  Восемь чувствительных микрофонов
                </h3>
                <p className="text-[14px] pt-3 opacity-85">
                  Разнонаправленные микрофоны позволяют Алисе слышать команды
                  даже в большом и шумном помещении
                </p>
              </div>
            </div>
            <div className="absolute right-0 z-20 top-[-80px]">
              <Image
                alt={`clear sound`}
                className=""
                width={3880}
                height={222}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
                src={"/images/clearSoundm.png"}
              />
            </div>
            <div className="absolute right-0 z-10 top-[40px]">
              <Image
                alt={`union`}
                width={3880}
                height={222}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
                className=""
                src={"/images/unionm.png"}
              />
            </div>
          </div>
        </Block>
      )}
    </div>
  );
};

export default ClearSound;
