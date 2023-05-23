import { memberList } from "@/public/member-list";
import MemberBox from "./(components)/member-box";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Contact Communihub",
};

export default async function Help() {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect("/auth/login?callbackUrl=/");
  // }

  return (
    <section>
      <div className="flex flex-col item-center justify-center gap-5 bg-[rgb(250,236,225)] pb-10">
        <div className="flex justify-center items-center mt-10 mb-3">
          <h1 className="text-6xl font-bold mb-1">Contact Us</h1>
        </div>
        <div className="flex justify-between items-start pl-[300px] gap-8">
          <div className="basis-1/4 pr-4 flex flex-col gap-4 items-start">
            <div className="text-2xl">Address</div>
            <div>National Road, Buli, Taal, Batangas</div>
          </div>
          <div className="basis-1/4 flex flex-col gap-4">
            <div className="text-2xl">Contact</div>
            <div className="flex flex-col ">
              <div>0965 - 301 - 7955</div>
              <div>(043) 723 - 2751</div>
              <div>developers@communihub.com</div>
              <div></div>
            </div>
          </div>
          <div className="basis-2/4 flex flex-col gap-4 pr-72">
            <div className="text-2xl">Opening Hours</div>
            <div>
              <div className="flex justify-between">
                <div>Mon - Fri</div>
                <div>8:00 am - 8:00 pm</div>
              </div>
              <div className="flex justify-between">
                <div>Saturday</div>
                <div>9:00 am - 7:00 pm</div>
              </div>
              <div className="flex justify-between">
                <div>Sunday</div>
                <div>9:00 am - 9:00 pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-35 py-18 bg-[rgb(221,190,166)]">
      <h1 className="text-5xl mb-8"></h1>
  <div className="flex flex-col items-center gap-30 mt-30 px-32">
    <h1 className="text-5xl font-bold mb-8">Talk to real people</h1>
    <p className="text-center">
      CommuniHub's exceptional customer support, always ready to help creators navigate the complexities of community building, is a primary reason they choose us. Our dedicated team, available 24/7, assists with everything from basic setup to advanced growth strategies, ensuring that you can focus on creating content and fostering connections. Always striving for improvement, we value your feedback and understand that our success is tied to yours. At CommuniHub, we don't just provide a service, but build enduring relationships, standing with you every step of your journey.
      <h1 className="text-5xl mb-8"></h1>
    </p>
    <div>
  </div>
</div>
        <div className="w-full flex flex-wrap justify-center gap-1">
          {memberList.map(({ key, name, location, id }) => {
            return <MemberBox key={key} name={name} location={location} id={id} />;
          })}
        </div>
      </div>
    </section>
  );
}