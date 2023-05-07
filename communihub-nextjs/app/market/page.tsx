import MarketBox from "./(components)/market-box";
import { marketList } from "@/public/market-list";

export default function Market() {
  return (
    <section className="w-auto h-auto flex flex-col items-center px-[270px] pt-16 pb-16">
      <div>
        <h1>Market</h1>
        <p>"Discover the Flavors and Community Spirit of Villas Del Pueblo Market: Where Local Vendors and Specials Come Together."</p>
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
  );
}
