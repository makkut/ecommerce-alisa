import Image from "next/image";

import Banner from "./components/Banner";
import Block from "./components/Block";
import BlockWetter from "./components/BlockWetter";
import InterfaceBanner from "./components/InterfaceBanner";

const DuoMaxPage = () => {
  return (
    <>
      <Banner />
      <InterfaceBanner />
      <Block title="— Алиса, какая погода?">
        <div className="ml-6 mt-8 pt-2 pb-4 pl-7 rounded-s-2xl bg-[#181825]  flex justify-center space-x-12 truncate">
          <BlockWetter day="Вс" data="17 авг" degree="+21°" />
          <BlockWetter day="Пн" data="18 авг" degree="+21°" />
          <BlockWetter day="Вт" data="19 авг" degree="+21°" />
        </div>
      </Block>
      <Block title="— Алиса, напомни &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; забронировать билеты">
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
  );
};

export default DuoMaxPage;
