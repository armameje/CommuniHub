import { member } from "@/public/interface/iMember";

export default function MemberBox({ name, location, id  }:member) {
  return (
    <div className="flex flex-col items-center px-4 mb-16 bg-blue-200 w-60 h-64">
      <div>
        <img src={`/member-${id}.jpg`} alt={name} className="w-[121px] h-[121px] rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div>{name}</div>
        <div>where to find: {location}</div>
      </div>
    </div>
  );
}
