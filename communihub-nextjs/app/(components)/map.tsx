export default function Maps() {
    return (
      <section className="w-auto h-[600px] bg-[rgb(250,236,225)] flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl">Community Map</h1>
        <p className="px-72 indent-8">
        CommuniHub offers an interactive map for users to virtually explore the location of the community in which we are building. This feature would help users navigate and familiarize themselves to the location and roads in the community. 
        </p>
        <div className="relative">
            <div className="w-[1050px] h-[450px] flex justify-center items-center map bg-cover bg-center"></div>
      </div>
      </section>
    );
  }
  