"use client";

import { market } from "@/public/interface/iMarket";
import { marketList } from "@/public/market-list";

type Params = {
  params: {
    marketId: number;
  };
};

function getMarket(marketId: number): market {
  return marketList.filter((market) => {
    return market.marketId == marketId;
  })[0];
}

export default function MarketPage({ params: { marketId } }: Params) {
  const marketItem = getMarket(marketId);

  return (
    <section>
      <h1>{marketItem.name}</h1>
      <h1>{marketItem.contactNumber}</h1>
      <h1>{marketItem.address}</h1>
      <h1>{marketItem.payments}</h1>
      <h1>{marketItem.ratings}</h1>
      <h1>{marketItem.time}</h1>
    </section>
  );
}
