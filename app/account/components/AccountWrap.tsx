"use client";
import { useSession } from "next-auth/react";

import AcoountDetails from "./AcoountDetails";

const AccountWrap = () => {
  const { data } = useSession();

  console.log("data", data);

  if (!data) {
    return;
  }
  return (
    <>
      <AcoountDetails user={data?.user} />
    </>
  );
};

export default AccountWrap;
