import { market } from "@/public/interface/iMarket";
import { marketList } from "@/public/market-list";
import { FaStar } from "react-icons/fa";
import MenuItem from "../(components)/menu-item";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

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
    <section className="px-44 py-32 bg-amber-50">
      <div className="border-[rgba(200, 189, 180, 0.75)] border p-24">
        <div className="flex flex-col items-start justify-between gap-2">
          <h1 className="text-3xl font-bold">{marketItem.name}</h1>
          <div className="flex my-6 gap-1">
            {[...Array(5)].map((star) => {
              return <FaStar color="#e4e5e9" />;
            })}
          </div>
          <div>Contact Number: {marketItem.contactNumber}</div>
          <div>Address: {marketItem.address}</div>
          <div>Payments: {marketItem.payments}</div>
          <div>Time: {marketItem.time}</div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div className="flex flex-col gap-4 mt-16 items-center">
          <h1>Menu</h1>
          {marketItem.menuItems.map((item) => {
            return <MenuItem name={item.name} price={item.price} />;
          })}
        </div>
      </div>
    </section>
  );
}
