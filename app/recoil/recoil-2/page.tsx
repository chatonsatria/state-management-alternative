"use client";

import { useRecoilValue } from "recoil";
import Link from "next/link";
import { baseUserData } from "../state";

const Recoil2 = () => {
  const dataAuth = useRecoilValue(baseUserData);
  console.log("dataAuth", dataAuth);

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center rounded-md border">
      <p className="text-3xl">first name: {dataAuth.firstName}</p>
      <Link href="/recoil">{"<"} back</Link>
    </div>
  );
};

export default Recoil2;
