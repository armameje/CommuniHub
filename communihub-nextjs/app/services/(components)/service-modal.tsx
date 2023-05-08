"use client";

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
          <GrClose onClick={toggleModal} />
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {personnel.map((person) => {
            return (
              <div className="flex justify-between mb-4 h-[150px]">
                <div className="flex gap-6 w-3/5">
                  <div className="w-36 overflow-hidden">
                    <img src="/musky.jpg" alt="" className="worker-img" />
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
                    <StarRating />
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
