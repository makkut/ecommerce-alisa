"use client";

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import LocaleSwitcher from "../LocaleSwitcher";
import NavMenu from "../NavMenu/NavMenu";

const Header = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <>
      <NavMenu />
      <LocaleSwitcher />
      {/* <Button onClick={() => signOut()}>Sign Out</Button> */}
    </>
  );
};

export default Header;
