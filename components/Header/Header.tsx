"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { LuUser2, LuShoppingBag } from "react-icons/lu";
import styles from "./Heade.module.scss";

import AlisaLogo from "../AlisaLogo";

const links = [
  {
    name: "Станция Лайт",
    link: "/",
  },
  {
    name: "Станция Мини",
    link: "/",
  },
  {
    name: "Станция Миди",
    link: "/",
  },
  {
    name: "Станция 2",
    link: "/",
  },
  {
    name: "Станция Zigbee",
    link: "/",
  },
  {
    name: "Станция Дуо Макс",
    link: "/",
  },
];

const Header = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <header className="flex justify-between items-center py-2">
      <div className="pl-10">
        <AlisaLogo size={70} color={true} />
      </div>
      <nav>
        <ul className="flex justify-center items-center  space-x-10">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href=""
                className="hover:text-primary ease-out duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* <li>
            <Link href="" className="hover:text-primary ease-out duration-300">
              Станция Лайт
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary ease-out duration-300">
              Станция Мини
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary ease-out duration-300">
              Станция Миди
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary ease-out duration-300">
              Станция 2
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary ease-out duration-300">
              Станция Zigbee
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-primary ease-out duration-300">
              Станция Дуо Макс
            </Link>
          </li> */}
        </ul>
      </nav>
      <div className="flex space-x-5 pr-10">
        <LuUser2
          size={30}
          className="hover:text-primary ease-out duration-300 cursor-pointer"
        />
        <LuShoppingBag
          size={30}
          className="hover:text-primary ease-out duration-300 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
