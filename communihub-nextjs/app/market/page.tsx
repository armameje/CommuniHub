import MarketBox from "./(components)/market-box";
import { marketList } from "@/public/market-list";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Communihub Market"
};


export default async function Market() {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/login?callbackUrl=/");
  // }
  
  return (
    <section className="w-auto h-auto flex flex-col items-center px-[270px] pt-16 pb-16">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold">Market</h1>
        <div>
  <p className="text-1xl italic">
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
              menuItems={market.menuItems}
            />
          );
        })}
      </div>
    </section>
  );
}
