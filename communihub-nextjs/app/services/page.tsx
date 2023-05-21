"use client";

import ServiceBox from "./(components)/service-box";
import { servicesList } from "@/public/services-list";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Footer from "../(components)/footer";
import { useEffect } from "react";
import Map from "../(components)/map";

export default function Services() {
  const session = useSession();
  const { push } = useRouter();

  useEffect(() => {
    console.log(session);
    if (session.status !== "authenticated") push("/auth/login");
  }, []);

  return (
    <>
      {session?.status === "authenticated" && (
        <>
          <section className="w-auto h-[1200px] bg-[rgb(250,236,225)] flex flex-col items-center px-[270px] pt-16 pb-16">
            <div className="flex flex-col gap-5">
              <h1 className="text-1xl">Services</h1>
              <p className="text-1xl italic">
              Looking for expert help with your home-related problems? Look no further! Our platform connects you with skilled professionals who specialize in various services. From plumbing and electrical issues to landscaping and more, our extensive network of reliable experts is ready to assist you. We ensure quality service by thoroughly screening each professional. Don't stress over your home tasks - let us connect you with the right person to make your life easier.
              </p>
            </div>
            <div className="flex flex-col flex-wrap items-center justify-start gap-8 h-[1100px] w-[818px] relative pt-16">
              {servicesList.map((service) => {
                return <ServiceBox key={service.key} serviceNumber={service.serviceNumber} serviceName={service.serviceName} personnel={service.personnel} />;
              })}
            </div>
          </section>
          <Map />
          <Footer />
        </>
      )}
    </>
  );
}
