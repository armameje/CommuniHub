
export const metadata = {
  title: "About Communihub"
};

export default function AboutUs() {

  return (
    <section>
      <div className="w-full h-[980px] flex justify-center poster-bg">
        <img src="/aboutUsPoster.png" alt="test" />
      </div>
      <div className="flex flex-col px-60 py-16 gap-8 about-content-header">
        <h1 className="text-[86px]">About Us</h1>
        <p className="text-[25px]">
          CommuniHub is a software platform designed to bring communities together by streamlining essential functions and encouraging interactions between residents. Our user-friendly platform
          features a comprehensive community map, entry and exit detection system for added security, an online market for local businesses, and group messaging for residents to work together on
          projects and events. Our goal is to promote community building and support local businesses, ultimately improving the quality of life for residents.
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center justify-center px-8 py-16 bg-[rgb(29,14,3)] basis-1/2">
          <h1 className="text-[56px] text-[rgb(250,236,225)] text-right w-full">Our Mission</h1>
          <p className="text-lg text-[rgb(250,236,225)] text-right">
            Our mission is to create a stronger sense of community within residential areas by providing an all-in-one platform that streamlines essential community functions and fosters a culture of
            togetherness and engagement. We strive to enhance security, promote local businesses, and empower residents to connect, share resources, and work together on projects that benefit the
            community as a whole.
          </p>
        </div>
        <div className="flex flex-col items-start justify-center px-8 py-16 bg-[rgb(250,236,225)] basis-1/2">
          <h1 className="text-[56px]">Our Vision</h1>
          <p className="text-lg">
            Our vision is to transform residential communities into vibrant, connected, and prosperous neighborhoods where residents feel a strong sense of belonging and pride. We aim to achieve this
            by providing an innovative software platform that enhances the quality of life for residents, supports local businesses, and fosters a culture of cooperation and engagement. By creating
            strong and healthy neighborhoods, we believe that we can make a positive impact on society as a whole, creating a better future for all.
          </p>
        </div>
      </div>
    </section>
  );
}
