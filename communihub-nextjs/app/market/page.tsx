"use client";

import MarketBox from "./(components)/market-box";
import { marketList } from "@/public/market-list";
import { useSession } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import Footer from "../(components)/footer";
import { useEffect, useState } from "react";

export default async function Market() {
  // const session = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (session.status !== "authenticated") router.push("/auth/login");
  // }, [session, router]);

  return (
    <><section className="w-auto h-auto flex flex-col items-center px-[270px] pt-16 pb-16 poster-bg">
      <h1 className="text-6xl font-bold  text-white ">Market</h1>
      <div className="flex flex-col gap-4 mt-4">
        <div>
          <p className="text-1xl italic text-white ">
            Experience the vibrant blend of flavors and community at Villas Del Pueblo Market. This unique marketplace brings together local vendors and specials, creating a rich tapestry of tastes and shared connections. Immerse yourself in the diverse array of offerings and discover the true essence of this bustling hub where culinary delights and community spirit intertwine.
          </p>
        </div>
      </div>
      <div className="w-[940px] h-[616px] flex flex-col flex-wrap gap-8 my-10">
        {marketList.map((market) => {
          return (
            <MarketBox
              key={market.key}
              marketId={market.marketId}
              name={market.name}
              ratings={market.ratings}
              contactNumber={market.contactNumber}
              address={market.address}
              payments={market.address}
              time={market.time}
              menuItems={market.menuItems} />
          );
        })}
      </div>
    </section><Footer></Footer></>
  );
}
