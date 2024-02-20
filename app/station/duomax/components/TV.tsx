import Image from "next/image";
import Block from "./Block";

const TV = () => {
  return (
    <div className="bg-black text-white flex justify-center pt-[20px]">
      <div className="relative w-[350px] h-[1800px] ">
        <div className="absolute right-0 z-20">
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
            src={"/images/tv2.png"}
          />
        </div>
        <h2 className="text-[1.8rem] leading-[1.25]  pr-6">
          Теперь&nbsp;— смотреть
        </h2>
        <div className="z-30 pt-[250px]">
          <Block
            title="— Алиса, покажи новую серию «Король и Шут»"
            classN="h-[400px]"
            classN2="pr-8"
          >
            <>
              <Image
                alt={`kish`}
                className="pl-8 mt-16"
                width={500}
                height={222}
                style={{
                  width: "100%",
                  height: "60%",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
                src={"/images/kis.png"}
              />
            </>
          </Block>
        </div>
        {/* <div>
          <Block title="— Алиса, сколько ехать до офиса?">
            <Image
              alt={`maps`}
              className="pl-8 mt-16"
              width={500}
              height={222}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
              src={"/images/maps.png"}
            />
          </Block>
        </div> */}
      </div>
    </div>
  );
};

export default TV;
