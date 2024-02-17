"use client";

import Image from "next/image";
import Block from "./Block";
import BlockWetter from "./BlockWetter";
import { useMediaQuery } from "@/app/hooks/use-media-query";

const Blocks = () => {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  return (
    <div className="bg-black">
      {isDesktop ? (
        <div className="flex justify-center px-5">
          <div className="grid grid-cols-3 w-[1200px] gap-3">
            <Block
              title="— Алиса, какая погода?"
              classN="w-full h-[500px]"
              classN2="p-10 text-3xl"
              col="col-span-2 py-0"
            >
              <div className="mx-16 mt-24 py-14  rounded-2xl bg-[#181825]  flex justify-center space-x-24 text-3xl">
                <BlockWetter
                  day="Вс"
                  data="17 авг"
                  degree="+21°"
                  icon="46"
                  dataClass="text-xl"
                />
                <BlockWetter
                  day="Пн"
                  data="18 авг"
                  degree="+21°"
                  icon="46"
                  dataClass="text-xl"
                />
                <BlockWetter
                  day="Вт"
                  data="19 авг"
                  degree="+21°"
                  icon="46"
                  dataClass="text-xl"
                />
              </div>
            </Block>
            <Block
              title="— Алиса, напомни забронировать билеты"
              classN="w-full h-[500px] text-3xl"
              classN2="p-10 text-3xl"
              col="py-0"
            >
              <div className="mt-[24px] mx-10 pt-8 pb-10 rounded-2xl bg-[#181825] text-center">
                <p className="text-[#e6f7eb54] text-xl">
                  Напоминаю, сегодня в 8:00
                </p>
                <p className="px-6 text-wrap text-3xl pt-4">
                  Забронировать билеты на самолёт
                </p>
              </div>
            </Block>
            <Block
              title="— Алиса, поставь таймер на 20 минут"
              classN="w-full h-[500px] text-3xl"
              classN2="p-10 text-3xl"
              col="py-0"
            >
              <div className="mt-20 text-center">
                <p className="text-[#e6f7eb54] text-2xl pb-3">Таймер</p>
                <p className="px-6 text-wrap text-7xl">19:35</p>
              </div>
            </Block>
            <Block
              title="— Алиса, давай поболтаем"
              classN="w-full h-[500px] text-3xl"
              classN2="p-10 text-3xl"
              col="col-span-2 py-0"
            >
              <div className="w-full flex justify-center mt-[20px]">
                <Image
                  alt={`alisa`}
                  width={3880}
                  height={222}
                  style={{
                    width: "62%",
                    height: "100%",
                    objectFit: "cover",
                    backgroundAttachment: "fixed",
                  }}
                  src={isDesktop ? "/images/alisa2.png" : "/images/alisa1.png"}
                />
              </div>
            </Block>
          </div>
        </div>
      ) : (
        <>
          <Block title="— Алиса, какая погода?">
            <div className="ml-6 mt-8 pt-2 pb-4 pl-7 rounded-s-2xl bg-[#181825]  flex justify-center space-x-12 truncate">
              <BlockWetter day="Вс" data="17 авг" degree="+21°" />
              <BlockWetter day="Пн" data="18 авг" degree="+21°" />
              <BlockWetter day="Вт" data="19 авг" degree="+21°" />
            </div>
          </Block>
          <Block title="— Алиса, напомни забронировать билеты">
            <div className="mt-[30px] mx-10 pt-8 pb-10 rounded-t-2xl bg-[#181825] text-center">
              <p className="text-[#e6f7eb54] text-[13px]">
                Напоминаю, сегодня в 8:00
              </p>
              <p className="px-6 text-wrap">Забронировать билеты на самолёт</p>
            </div>
          </Block>
          <Block title="— Алиса, поставь таймер &emsp; &emsp; &emsp; &emsp;&emsp; &emsp; на 20 минут">
            <div className="mt-[36px] text-center">
              <p className="text-[#e6f7eb54] text-[12px]">Таймер</p>
              <p className="px-6 text-wrap text-[36px]">19:35</p>
            </div>
          </Block>
          <Block title="— Алиса, давай поболтаем">
            <div className="w-full flex justify-center mt-[20px]">
              <Image
                alt={`alisa`}
                width={3880}
                height={222}
                style={{
                  width: "62%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
                src="/images/alisa1.png"
              />
            </div>
          </Block>
        </>
      )}
    </div>
  );
};

export default Blocks;
