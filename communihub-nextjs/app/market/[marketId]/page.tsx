"use client";

import { market } from "@/public/interface/iMarket";
import { marketList } from "@/public/market-list";
import MenuItem from "../(components)/menu-item";

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
    <section className="px-60 pt-32">
      <div className="bg-violet-100">
        <div >
          <h1>{marketItem.name}</h1>
          <div>ratings</div>
          <div>Contact Number: {marketItem.contactNumber}</div>
          <div>Address: {marketItem.address}</div>
          <div>Payments: {marketItem.payments}</div>
          <div>Time: {marketItem.time}</div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h1>Menu</h1>
          {marketItem.menuItems.map((item) => {
            return <MenuItem name={item.name} price={item.price} />;
          })}
        </div>
      </div>
    </section>
  );
}
