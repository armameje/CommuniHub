import { menuItem } from "@/public/interface/iMenuItem";

export default function MenuItem({ name, price }: menuItem) {
  return (
    <div>
      <div></div>
      <div>{name}</div>
      <div>{price}</div>
    </div>
  );
}
