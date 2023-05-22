import Link from "next/link";
import "./style.css";

export default function Header() {
  return (
    <section className="w-auto h-96 flex flex-col justify-center items-center bg-cyan-200 home-header">
        <h4 className="text-2xl text-white">Empowering Communities, Together with CommuniHub</h4>
        <h1 className="text-8xl text-white">CommuniHub</h1>
        <h4 className="text-2xl text-white">The All-in-One Platform for Community Building, Security, and Local Commerce</h4>
        <div className="relative">
          <div className="w-80 h-40 flex justify-center items-center"></div>
          <Link href="/howtouse" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            How To Use
          </Link>
        </div>
    </section>
  )
}
