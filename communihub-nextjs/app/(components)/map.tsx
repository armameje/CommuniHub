export default function Map() {
  return (
    <section className="w-auto h-auto bg-[rgb(250,236,225)] flex flex-col items-center justify-center px-52">
      <div className="w-full px-16 py-8 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-4xl">Community Map</h1>
        <p>
          CommuniHub offers an interactive map for users to virtually explore the location of the community in which we are building. This feature would help users navigate and familiarize themselves
          to the location and roads in the community.
        </p>
      </div>
      <div className="map-bg w-full h-[416px] relative">
        <div className="w-[97px] h-[55px] bg-[rgb(250,236,225)] absolute top-[33%] left-[8%] rotate-[-10deg]"></div>
        <div className="w-[96px] h-[55px] bg-[rgb(250,236,225)] absolute top-[25%] left-[27%] rotate-[-10deg]"></div>
        <div className="w-[100px] h-[55px] bg-[rgb(250,236,225)] absolute top-[60%] left-[16%] rotate-[-10deg]"></div>
        <div className="w-[88px] h-[38px] bg-[rgb(250,236,225)] absolute top-[58%] left-[35%] rotate-[-10deg]"></div>
        <div className="w-[40px] h-[40px] bg-[rgb(250,236,225)] absolute top-[10%] left-[58%] rotate-[-8deg]"></div>
        <div className="w-[55px] h-[55px] bg-[rgb(250,236,225)] absolute top-[14%] left-[71%] rotate-[-8deg]"></div>
        <div className="w-[55px] h-[55px] bg-[rgb(250,236,225)] absolute top-[50%] left-[73%] rotate-[-8deg]"></div>
      </div>
    </section>
  );
}
