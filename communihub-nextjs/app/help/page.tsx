import { memberList } from "@/public/member-list";
import MemberBox from "./(components)/member-box";

export const metadata = {
  title: "Contact Communihub",
};

export default function Help() {
  return (
    <section>
      <div className="flex flex-col item-center justify-center gap-8 bg-[rgb(250,236,225)] pb-16">
        <div className="flex justify-center items-center mt-16 mb-6">
          <h1 className="text-6xl">Contact Us</h1>
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
      <div className="flex flex-col items-center px-52 py-24 bg-[rgb(221,190,166)]">
        <div className="flex flex-col items-center gap-16 mb-24">
          <h1>Talk to real people</h1>
          <p>
            Amazing customer support is the #1 reason our creators cite for choosing CommuniHub. Our support team knows that the building a great community comes with challenges, and we're here to
            help you every step of the way.
          </p>
        </div>
        <div className="w-full flex flex-wrap justify-center gap-24">
          {memberList.map(({ key, name, location, id }) => {
            return <MemberBox key={key} name={name} location={location} id={id} />;
          })}
        </div>
      </div>
      <div>
        <div>FAQs</div>
        <div>
          <div>
            <h1>Communihub</h1>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
