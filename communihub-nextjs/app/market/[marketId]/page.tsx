import { market } from "@/public/interface/iMarket";
import { marketList } from "@/public/market-list";
import { FaStar } from "react-icons/fa";
import MenuItem from "../(components)/menu-item";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

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

export default async function MarketPage({ params: { marketId } }: Params) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/login?callbackUrl=/");
  // }

  const marketItem = getMarket(marketId);

  return (
    <section className="px-44 py-18 bg-amber-50">
      <div className="border-[rgba(200, 189, 180, 0.75)] border p-20">
        <div className="flex flex-col items-start justify-between gap-2">
          <h1 className="text-4xl font-bold">{marketItem.name}</h1>
          <div className="flex my-1 gap-1">
            {[...Array(5)].map((star, i) => {
              return <FaStar key={i + 1} color="#FFFF00" />;
            })}
          </div>
          <div>Contact Number: {marketItem.contactNumber}</div>
          <div>Address: {marketItem.address}</div>
          <div>Payments: {marketItem.payments}</div>
          <div>Time: {marketItem.time}</div>
        </div>
        <div className="flex flex-col gap-4 mt-13 items-center mb-5">
          <h1 className="text-3xl font-bold mb-5">Menu</h1>
          {marketItem.menuItems.map((item, x) => {
            return <MenuItem key={x + 1} name={item.name} price={item.price} itemCode={item.itemCode} />;
          })}
        </div>
      </div>
    </section>
  );
}
