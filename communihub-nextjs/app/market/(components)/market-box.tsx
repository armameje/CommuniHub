"use client";

import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { market } from "@/public/interface/iMarket";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function MarketBox({ name, ratings, contactNumber, address, payments, time, menuItems, marketId }: market) {
  // const { data: session } = useSession({ required: true });
  // console.log(session);
  const [views, setViews] = useState(0);

  function addViews() {
    console.log(`clicked marketId ${marketId}`);
    setViews((x) => x + 1);
  }

  return (
    <div className={`w-[292px] h-[292px] py-[27px] px-[30px] flex flex-col  poster-bg justify-end bg-cover bg-center bg-no-repeat market-${marketId}`}>
      <Link onClick={addViews} href={`/market/${marketId}`} className="text-lg text-white font-bold">
        {name}
      </Link>
      <hr className="my-4" />
    </div>
  );
}
