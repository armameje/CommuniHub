import { FaFacebookF, FaPinterestP, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Link from "next/link";

export default function NavBar() {

  return (
    <nav className="w-full flex justify-between border-2 items-center border-stone-800 px-16 py-6 sticky">
      <div className="flex items-center relative">
        <div className="logo w-[150px] h-[150px] bg-cover absolute"></div>
        <input type="text" placeholder="Search..." className="ml-44 w-16" />
      </div>
      <div className="flex justify-around gap-8 ">
        <Link href="/" className="hover:text-[#015243] font-bold">
          Home
        </Link>
        <Link href="/services" className="hover:text-[#015243] font-bold">
          Services
        </Link>
        <Link href="/market" className="hover:text-[#015243] font-bold">
          Market
        </Link>
        <Link href="/help" className="hover:text-[#015243] font-bold">
          Help
        </Link>
        <Link href="/about" className="hover:text-[#015243] font-bold">
          About Us
        </Link>
      </div>
      <div className="flex gap-8 w-[205px]">
        {/* <div className="flex items-center gap-4">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <BsInstagram />
          </span>
          <span>
            <FaPinterestP />
          </span>
          <span>
            <FaTwitter />
          </span>
        </div>
        <a href="#" className="border-2 border-stone-950 rounded-full p-2">
          Login
        </a> */}
      </div>
    </nav>
  );
}
