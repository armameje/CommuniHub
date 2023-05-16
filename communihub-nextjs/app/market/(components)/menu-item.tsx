import { menuItem } from "@/public/interface/iMenuItem";

export default function MenuItem({ name, price, itemCode }: menuItem) {
  return (
    <div className="w-full flex mb-8 gap-16">
      <div>
        <img src={`/${itemCode}.jpg`} alt={`name`} width={400} height={200} />
      </div>
      <div className="flex flex-col items-center justify-center grow">
        <div className="text-xl">Menu Title: <span className="text-2xl font-bold">{name}</span></div>
        <div className="text-xl">&#x20B1; {price}</div>
      </div>
    </div>
  );
}
