import type { Metadata } from "next";
import Link from "next/link";
import React from "react";
import { BsRobot } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";


const NotFoundPage: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col gap-8 justify-center items-center dark:text-[#a9a9b3] text-[#222222]">
      <BsRobot className="text-3xl"/>
      <h1 className="font-bold md:text-5xl text-4xl ">404</h1>
      <div className="text-center">
        <p>Oops, page not found…</p>
        <Link href="/" className="flex items-center gap-1 justify-center mt-4"><TbSmartHome className="text-xl"/><span className="hover:underline">Home</span></Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
