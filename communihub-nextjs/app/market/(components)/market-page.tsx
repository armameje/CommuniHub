"use client";

import MarketBox from "./market-box";
import { marketList } from "@/public/market-list";
import Footer from "@/app/(components)/footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function MarketView() {
  const session = useSession();
  const { push } = useRouter();
  return (
    <>
      {session.status === "authenticated" ? (
        <>
          <section className="w-auto h-auto flex flex-col items-center px-[270px] pt-16 pb-16">
            <div>
              <h1 className="text-6xl font-bold">Market</h1>
              <p className="text-2xl">"Discover the Flavors and Community Spirit of Villas Del Pueblo Market: Where Local Vendors and Specials Come Together."</p>
            </div>
            <div className="w-[940px] h-[616px] flex flex-col flex-wrap gap-8 my-16">
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
                    menuItems={market.menuItems}
                  />
                );
              })}
            </div>
          </section>
          <Footer />
        </>
      ) : (
        push("/auth/login")
      )}
    </>
  );
}
