import ServiceBox from "./(components)/service-box";
import { servicesList } from "@/public/services-list";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Communihub Services",
};

export default async function Services() {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  // if (!session) {
  //   redirect("/auth/login?callbackUrl=/services");
  // }

  return (
    <section className="w-auto h-auto flex flex-col items-center px-[270px] pt-16 pb-16">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl">Services</h1>
        <p className="text-xl">
          Do you need some services that could help you with anything that you're dealing with? We got you! since this page is about contacting a person with the specific job that could help you in
          your specific problem at your home.
        </p>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-start gap-8 h-[1100px] w-[818px] relative pt-16">
        {servicesList.map((service) => {
          return <ServiceBox key={service.key} serviceName={service.serviceName} personnel={service.personnel} />;
        })}
      </div>
    </section>
  );
}
