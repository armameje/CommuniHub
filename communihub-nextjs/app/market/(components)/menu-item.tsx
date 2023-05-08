import { menuItem } from "@/public/interface/iMenuItem";

export default function MenuItem({ name, price }: menuItem) {
  return (
    <div className="w-full flex ">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
    </div>
  );
}
