"use client";

import { service } from "@/public/interface/iService";
import { FaGreaterThan } from "react-icons/fa";
import ServiceModal from "./service-modal";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ServiceBox({ serviceName, personnel, serviceNumber }: service) {
  const nameLength = serviceName.length;
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  if (typeof window !== "undefined") {
    if (modal) {
      document.body.classList.add("active-service-modal");
    } else {
      document.body.classList.remove("active-service-modal");
    }
  }
  return (
    <section className="relative service-item">
      <div className={`w-[393px] h-[294px] service-${serviceNumber} border-2 border-black rounded bg-cover bg-no-repeat bg-center`}></div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        className={`absolute top-[120px] left-[70px] bg-orange-0 ${nameLength > 18 ? "w-[290px]" : "w-[241px]"} h-[47px] flex justify-center font-bold poster1-bg text-black items-center rounded-full border-2 border-yellow-50`}
      >
        <div onClick={toggleModal} className="flex items-center gap-4 service-icon-wrap cursor-pointer">
          {serviceName}
          <motion.div whileHover={{ scale: 1.2 }} className="service-icon">
            <FaGreaterThan />
          </motion.div>
        </div>
      </motion.div>
      <ServiceModal modal={modal} serviceName={serviceName} personnel={personnel} toggleModal={toggleModal} />
    </section>
  );
}
