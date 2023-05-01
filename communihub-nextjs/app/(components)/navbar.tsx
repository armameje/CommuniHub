import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between border-2 items-center border-stone-800 px-16 py-6 sticky">
      {/* Search Bar */}
      <div className="border-2 rounded border-stone-950 px-20 py-1">
        <input type="text" placeholder="Search..." className="w-28"/>
      </div>
      <div className="flex justify-around gap-8 ml-26">
        <Link href="/">Home</Link>
        <Link href='/services'>Services</Link>
        <a href='#'>Market</a>
        <a href='#'>Help</a>
        <a href='#'>About Us</a>
      </div>
      <div className="flex gap-8">
        <div className="flex items-center gap-4">
          <span><FaFacebookF /></span>
          <span><BsInstagram /></span>
          <span><FaPinterestP /></span>
          <span><FaTwitter /></span>
        </div>
        <a href="#" className="border-2 border-stone-950 rounded-full p-2">
          How to use?
        </a>
      </div>
    </nav>
  );
}
