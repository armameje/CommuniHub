import "./style.css";

export default function Features() {
  return (
    <section className="w-auto h-auto flex flex-col justify-center items-center px-48 pt-44 pb-48 gap-8">
      <p className="indent-8">
        Introducing CommuniHub - the all-in-one software solution for fostering community engagement, enhancing security, and promoting local businesses within residential areas. Join groups, share
        resources, access services, and support local businesses all in one place. Strengthen your community with CommuniHub and improve the quality of life for all residents
      </p>
      <div className="flex gap-12">
        <div className="relative">
          <div className="w-80 h-64 flex justify-center items-center service bg-cover bg-center blur-[2px]"></div>
          <a href="#" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            Services
          </a>
        </div>
        <div className="w-80 h-64 bg-pink-500 flex justify-center items-center"></div>
        <a href="#" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all">
          Market
        </a>
        <div className="w-80 h-64 flex justify-center items-center help bg-cover bg-center"></div>
        <a href="#" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all z-10">
          Help
        </a>
      </div>
    </section>
  );
}
