import { ImFacebook2, ImWhatsapp, ImTelegram } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";
import Link from "next/link";

// import AlisaLogo from "../AlisaLogo";

const Footer = () => {
  return (
    <div className="bg-white flex justify-center md:py-0 py-5 px-1">
      <div className="md:flex  w-[1080px] justify-around block">
        <div className="flex justify-center items-center text-black text-base">
          © 2024 Яde
        </div>
        <div className="flex flex-auto justify-center items-center py-7">
          {/* <AlisaLogo size={60} /> */}
          <Link href="/">
            <Image
              height={60}
              width={60}
              style={{
                objectFit: "cover",
                backgroundAttachment: "fixed",
              }}
              src={"/images/logoYab.svg"}
              alt=""
              className="object-cover object-center"
            />
          </Link>
        </div>
        <div className="w-[200px] flex justify-around items-center my-0 mx-auto">
          <a href="https://t.me/deyandex">
            <span className="text-black hover:text-primary transition-colors duration-200 cursor-pointer">
              <ImTelegram size={35} />
            </span>
          </a>
          {/* <a href="https://www.instagram.com/">
            <span className="text-black hover:text-primary transition-colors duration-200 cursor-pointer">
              <GrInstagram size={35} />
            </span>
          </a>
          <a href="https://wa.me">
            <span className="text-black hover:text-primary transition-colors duration-200 cursor-pointer">
              <ImTelegram size={36} />
            </span>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
