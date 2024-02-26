"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { LuUser2, LuUserCheck2, LuShoppingBag } from "react-icons/lu";

import AlisaLogo from "../AlisaLogo";
import MobileMenu from "../MobileMenu/MobileMenu";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import DesktopMenu from "../DesktopMenu/DesktopMenu";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";

const Header = () => {
  const { data } = useSession();
  console.log("session", data);
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const router = useRouter();
  console.log("router", router);
  return (
    <header className="flex justify-between items-center py-2">
      <div className={cn(isDesktop ? "pl-10 mr-2" : "pl-5")}>
        <Link href="/" className="cursor-pointer">
          <AlisaLogo size={70} color={true} />
        </Link>
      </div>
      {isDesktop && <DesktopMenu />}
      <div className={cn(isDesktop ? "pr-10" : "pr-5", "flex space-x-5")}>
        {!isDesktop && <MobileMenu />}
        {data && <Button onClick={() => signOut()}>EXIT</Button>}
        {data ? (
          <LuUserCheck2
            size={30}
            className="hover:text-primary ease-out duration-300 cursor-pointer"
          />
        ) : (
          <Link href={"/auth"}>
            <LuUser2
              size={30}
              className="hover:text-primary ease-out duration-300 cursor-pointer"
            />
          </Link>
        )}

        <LuShoppingBag
          size={30}
          className="hover:text-primary ease-out duration-300 cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
