import React from "react";
import { GrClose } from "react-icons/gr";
import { serviceModal } from "@/public/interface/iServiceModal";
import StarRating from "./star-rating";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceModal({ serviceName, toggleModal, modal, personnel = [] }: serviceModal) {
  return (
    <AnimatePresence mode="wait">
      {modal && (
        <div className="modal z-20 relative">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={toggleModal} className="service-modal-overlay"></motion.div>
          <motion.div initial={{ y: "-100vh", opacity: 0 }} animate={{ y: "10%", opacity: 1 }} transition={{ delay: 0.5 }} className="modal-content flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-[#C74300] text-6xl font-bold">{serviceName}</h1>
              <GrClose onClick={toggleModal} />
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {personnel.map((person, i) => {
                return (
                  <div key={i + 1} className="flex justify-between mb-4 h-[150px]">
                    <div className="flex gap-6 w-3/5">
                      <div className="w-36 overflow-hidden">
                        <img src={`/${person.rating}.jpg`} alt="" className="worker-img" />
                      </div>
                      <div className="flex flex-col gap-1 justify-center grow">
                        <div className="font-bold">{person.name}</div>
                        <div>{person.age} Years Old</div>
                        <div>Status: {person.status}</div>
                        <div>Contact No.: {person.contactNumber}</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center grow">
                      <div className="font-bold">{person.skill}</div>
                      <div className="w-full">
                        <StarRating key={person.skill} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
