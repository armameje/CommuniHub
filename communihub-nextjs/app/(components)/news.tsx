import Link from "next/link";

export default function News() {
  return (
    <section className="w-fill h-auto bg-[rgb(250,236,225)] flex flex-col justify-center items-center gap-4 py-16">
      <h1 className="text-4xl">"Stay Up-to-Date with the Latest News and Announcements!"</h1>
      <p className="px-72 indent-8">
        CommuniHub ensures you stay up-to-date on the topics that matter most to you. Our user-friendly interface makes it simple to navigate and find exactly what you're looking for. Join the
        thousands of users already benefiting from CommuniHub's comprehensive news and announcement platform.
      </p>
      <div className="relative">
          <div className="w-[800px] h-[450px] flex justify-center items-center news bg-cover bg-center"></div>
          <Link href="/announcement" className="w-[800px] h-[450px] bg-[rgb(250,236,225,0.1)] text-white py-2 px-4 hover:bg-[rgb(250,236,225,0.2)] hover:text-green-950 transition-all z-10 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">Read more</Link>
      </div>
    </section>
  );
}
