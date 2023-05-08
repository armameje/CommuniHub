"use client";

import { service } from "@/public/interface/iService";
import { FaGreaterThan } from "react-icons/fa";
import ServiceModal from "./service-modal";
import { useState } from "react";

export default function ServiceBox({ serviceName, personnel }: service) {
  const nameLength = serviceName.length;
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  if (modal) {
    document.body.classList.add("active-service-modal");
  } else {
    document.body.classList.remove("active-service-modal");
  }

  return (
    <section className="relative service-item">
      <div className="w-[393px] h-[294px] service border-2 border-black rounded blur-[2px]"></div>
      <div
        className={`absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-orange-200 ${
          nameLength > 18 ? "w-[290px]" : "w-[241px]"
        } h-[47px] flex justify-center items-center rounded-full border-2 border-yellow-700 hover:rounded-lg service-title`}
      >
        <div onClick={toggleModal} className="flex items-center gap-4 service-icon-wrap cursor-pointer">
          {serviceName}
          <div className="service-icon">
            <FaGreaterThan />
          </div>
        </div>
      </div>
      {modal && <ServiceModal serviceName={serviceName} personnel={personnel} toggleModal={toggleModal} />}
    </section>
  );
}
