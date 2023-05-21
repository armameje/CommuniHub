import { member } from "@/public/interface/iMember";

export default function MemberBox({ name, location, id  }:member) {
  return (
    <div className="flex flex-col items-center justify-center px-4 mb-16 w-60 h-64">
      <div>
        <img src={`/member-${id}.jpg`} alt={name} className="w-[121px] h-[121px] rounded-full" />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 mt-8">
        <div className="font-bold text-[rgb(29,14,3)]">{name}</div>
        <div className="text-center text-[rgb(100,94,90)]">Address: {location}</div>

      </div>
    </div>
  );
}
