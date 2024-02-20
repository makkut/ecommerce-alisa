"use client";

import Image from "next/image";

import { useMediaQuery } from "@/app/hooks/use-media-query";

const Descripton = () => {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  return (
    <div className="bg-black text-white">
      {!isDesktop ? (
        <>
          <div className="flex justify-center">
            <div className="w-[330px]">
              <Image
                alt={`banner`}
                className="z-20"
                width={900}
                height={222}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  backgroundAttachment: "fixed",
                }}
                src={"/images/banner_m2.png"}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-[330px]">
              <div className="">
                <p>
                  Домашняя мультимедийная платформа <br /> Яндекс Станция Дуо
                  Макс
                </p>
                <div className="my-5 w-full border-t-2 border-gray-300" />
                <p>
                  256 × 118 × 240 мм &emsp; &emsp; &emsp; &emsp; &emsp; 3,3 кг
                </p>
                <p className="mt-28">Характеристики</p>
                <div className="my-5 w-full border-t-2 border-gray-300" />
                <p className="mb-2">Room Correction</p>
                <p className="mb-2">1 низкочастотный динамик — 100 мм</p>
                <p className="mb-2">2 широкополосных динамика — 50 мм</p>
                <p className="mb-2">2 пассивных излучателя</p>
                <p className="mb-2">Диапазон частот 60–20 000 Гц</p>
                <p className="mb-2">Суммарная акустическая мощность 60 Вт</p>
                <p className="mb-2">8 микрофонов</p>
                <p className="my-6">
                  Беспроводная связь 802.11b/g/n/ac/ax (2,4 ГГц и 5 ГГц),
                  Zigbee™, Bluetooth® 5.2, BLE
                </p>
                <p className="mb-2">Экран диагональ 10,5”</p>
                <p className="mb-2">Разрешение 1920 × 1200</p>
                <p className="mb-2">Видеокамера 13 Мп, угол обзора 120° </p>
                <p className="mb-2">LED-подсветка 16 млн цветов</p>
                <p className="mb-2">
                  NPU-процессор производительностью 1.2 TOPS
                </p>
                <p className="mb-2">
                  Материал корпуса — ткань, пластик, стекло
                </p>
                <p className="mb-8">
                  Адаптер питания 20 В 3,25 A с разъёмом USB Type-C
                </p>
                <p className="mb-2">В коробке</p>
                <div className="my-5 w-full border-t-2 border-gray-300" />
                <p className="mb-2">Яндекс Станция Дуо Макс</p>
                <p className="mb-2">Адаптер питания</p>
                <p className="mb-2">Инструкции</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="">
          <Image
            alt={`banner`}
            className="z-20"
            width={3800}
            height={222}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              backgroundAttachment: "fixed",
            }}
            src={"/images/banner_d2.png"}
          />
          <div className="flex justify-center ">
            <table className="table-auto border-collapse w-[1100px]">
              {/* <thead>
                <tr>
                  <th>Song</th>
                  <th>Artist</th>
                  <th>Year</th>
                </tr>
              </thead> */}
              <tbody>
                <tr className="w-full border-t-2 border-gray-300">
                  <td className="pt-4 pb-10">
                    Домашняя мультимедийная платформа
                    <br /> Яндекс Станция Дуо Макс
                  </td>
                  <td className=" pt-4 pb-10 align-top">256 × 118 × 240 мм</td>
                  <td className=" pt-4 pb-10 align-top">3,3 кг</td>
                </tr>
                <tr className="w-full border-t-2 border-gray-300">
                  <td className="pt-4 pb-10 align-top">Характеристики</td>
                  <td className="pt-4 pb-10 align-top">
                    <div>
                      <p className="mb-2">Room Correction</p>
                      <p className="mb-2">1 низкочастотный динамик — 100 мм</p>
                      <p className="mb-2">2 широкополосных динамика — 50 мм</p>
                      <p className="mb-2">2 пассивных излучателя</p>
                      <p className="mb-2">Диапазон частот 60–20 000 Гц</p>
                      <p className="mb-2">
                        Суммарная акустическая мощность 60 Вт
                      </p>
                      <p className="mb-2">8 микрофонов</p>
                      <p className="mb-1">&emsp;</p>
                      <p className="">&emsp;</p>
                      <p className="mb-2">
                        Беспроводная связь 802.11b/g/n/ac/ax (2,4 ГГц и 5 ГГц),
                        Zigbee™, Bluetooth® 5.2, BLE
                      </p>
                    </div>
                  </td>
                  <td className="pt-4 pb-10 align-top">
                    <div>
                      <p className="mb-2">Экран диагональ 10,5”</p>
                      <p className="mb-2">Разрешение 1920 × 1200</p>
                      <p className="mb-2">
                        Видеокамера 13 Мп, угол обзора 120°{" "}
                      </p>
                      <p className="mb-2">&emsp; </p>
                      <p className="mb-2">LED-подсветка 16 млн цветов</p>
                      <p className="mb-2">
                        NPU-процессор производительностью 1.2 TOPS
                      </p>
                      <p className="mb-2">
                        Материал корпуса — ткань, пластик, стекло
                      </p>
                      <p className="mb-2">
                        Адаптер питания 20 В 3,25 A с разъёмом USB Type-C
                      </p>
                    </div>
                  </td>
                </tr>
                <tr className="w-full border-t-2 border-gray-300">
                  <td className="pt-4 pb-10 align-top">В коробке</td>
                  <td>
                    {/* <div>
                      <p className="mb-2">Экран диагональ 10,5”</p>
                      <p className="mb-2">Разрешение 1920 × 1200</p>
                      <p className="mb-2">
                        Видеокамера 13 Мп, угол обзора 120°{" "}
                      </p>
                    </div> */}
                  </td>
                  <td className="pt-4 pb-10 align-top">
                    <div>
                      <p className="mb-2">Яндекс Станция Дуо Макс</p>
                      <p className="mb-2">Адаптер питания</p>
                      <p className="mb-2">Инструкции</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Descripton;
