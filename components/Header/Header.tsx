"use client";

import Link from "next/link";
import { LuUser2 } from "react-icons/lu";
import Image from "next/image";

import { cn } from "@/lib/utils";
import MobileMenu from "../MobileMenu/MobileMenu";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import { useSession } from "next-auth/react";
import NavbarActions from "../ui/navbar-actions";
import { DropDownMenu } from "../ui/DropDownMen";

const Header = () => {
  const { data } = useSession();
  return (
    <header className="flex justify-between items-center py-2">
      <div className={cn("lg:pl-10 lg:mr-2", "pl-5")}>
        <Image
          height={70}
          width={70}
          style={{
            objectFit: "cover",
            backgroundAttachment: "fixed",
          }}
          src={"/images/logoYa.svg"}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="lg:block hidden">
        <DesktopMenu />
      </div>
      <div className={cn("lg:pr-10", "pr-5", "flex space-x-5")}>
        <div className="lg:hidden block">
          <MobileMenu />
        </div>
        {data ? (
          <>
            <DropDownMenu />
          </>
        ) : (
          <Link href={"/auth"}>
            <LuUser2
              size={30}
              className="hover:text-primary ease-out duration-300 cursor-pointer"
            />
          </Link>
        )}
        <NavbarActions />
      </div>
    </header>
  );
};

export default Header;
