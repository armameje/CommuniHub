export default function Features() {
  return (
    <section className="w-auto h-64 flex flex-col justify-center items-center px-48 pt-44 pb-48 gap-8">
      <p className="indent-8">
        Introducing CommuniHub - the all-in-one software solution for fostering community engagement, enhancing security, and promoting local businesses within residential areas. Join groups, share
        resources, access services, and support local businesses all in one place. Strengthen your community with CommuniHub and improve the quality of life for all residents
      </p>
      <div className="flex gap-12">
        <div className="w-60 h-48 bg-pink-500 flex justify-center items-center">
          <a href="#" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all">Services</a>
        </div>
        <div className="w-60 h-48 bg-pink-500 flex justify-center items-center">
          <a href="#" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all">Market</a>
        </div>
        <div className="w-60 h-48 bg-pink-500 flex justify-center items-center">
          <a href="#" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all">Help</a>
        </div>
      </div>
    </section>
  );
}
