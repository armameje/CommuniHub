import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { serviceModal } from "@/public/interface/iServiceModal";
import StarRating from "./star-rating";

export default function ServiceModal({ serviceName, toggleModal, personnel = [] }: serviceModal) {
  return (
    <div className="modal z-20 relative">
      <div onClick={toggleModal} className="service-modal-overlay"></div>
      <div className="modal-content flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-[#C74300] text-6xl">{serviceName}</h1>
          <GrClose onClick={toggleModal}/>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {personnel.map((person) => {
            return (
              <div className="flex justify-between gap-16 mb-4 h-[150px]">
                <div className="flex gap-4">
                  <div className="w-28">
                    <img src="/musky.jpg" alt="" className="worker-img" />
                  </div>
                  <div className="flex flex-col gap-1 justify-center">
                    <div>{person.name}</div>
                    <div>{person.age} Years Old</div>
                    <div>Status: {person.status}</div>
                    <div>Contact No.: {person.contactNumber}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-[500px]">
                  <div>{person.skill}</div>
                  <div>
                    <StarRating />
                  </div>
                  <div className="w-full flex justify-center mt-2">
                    <button className="border w-3/5 py-2 bg-zinc-600 border-zinc-600 text-white">-- REVIEW --</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
