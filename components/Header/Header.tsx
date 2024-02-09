"use client";

import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  console.log("router", router);
  return <>Header</>;
};
