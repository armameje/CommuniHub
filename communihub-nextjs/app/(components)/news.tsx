export default function News() {
  return (
    <section className="w-auto h-[700px] bg-[rgb(250,236,225)] flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl">"Stay Up-to-Date with the Latest News and Announcements!"</h1>
      <p className="px-72 indent-8">
        CommuniHub ensures you stay up-to-date on the topics that matter most to you. Our user-friendly interface makes it simple to navigate and find exactly what you're looking for. Join the
        thousands of users already benefiting from CommuniHub's comprehensive news and announcement platform.
      </p>
      <button className="border-2 px-8 py-2 bg-green-950 text-neutral-50 text-xs hover:text-green-950 hover:bg-white hover:border-green-950 hover:transition-all">Start Now</button>
      <div className="relative">
          <div className="w-[800px] h-[450px] flex justify-center items-center news bg-cover bg-center"></div>
          {/* <Link href="/services" className="bg-green-950 text-white py-2 px-4 hover:bg-white hover:text-green-950 transition-all z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            Services
          </Link> */}
      </div>
    </section>
  );
}
