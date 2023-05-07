"use client";

import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { market } from "@/public/interface/iMarket";
import { useState } from "react";
import Link from "next/link";

export default function MarketBox({ name, ratings, contactNumber, address, payments, time, menuItems, marketId }: market) {
  const [views, setViews] = useState(0);

  function addViews() {
    console.log(`clicked marketId ${marketId}`)
    setViews((x) => x + 1);
  }

  return (
    <div className="w-[292px] h-[292px] py-[27px] px-[30px] flex flex-col justify-end bg-orange-300">
      <Link onClick={addViews} href={`/market/${marketId}`} >{name}</Link>
      <hr className="my-4" />
      <div className="flex justify-between w-full">
        <div className="flex">
          <span className="flex items-center">
            <AiOutlineEye />
            <span>{views}</span>
          </span>
          <span className="flex items-center">
            <BiMessage />
            <span>8</span>
          </span>
        </div>
        <div>
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
}
