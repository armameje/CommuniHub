import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { serviceModal } from "@/public/interface/iServiceModal";

export default function ServiceModal({ serviceName, toggleModal, personnel = [] }: serviceModal) {
  return (
    <div className="modal z-20">
      <div onClick={toggleModal} className="service-modal-overlay"></div>
      <div className="modal-content flex flex-col">
        <div className="flex justify-between">
          <h1>{serviceName}</h1>
          <GrClose onClick={toggleModal}/>
        </div>
        <div className="flex flex-col">
          {personnel.map((person) => {
            return (
              <div className="flex justify-between gap-16 mb-4">
                <div className="flex gap-4">
                  <div className="w-4">{person.name[0]}</div>
                  <div className="flex flex-col gap-1">
                    <div>{person.name}</div>
                    <div>{person.age} Years Old</div>
                    <div>Status: {person.status}</div>
                    <div>Contact No.: {person.contactNumber}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div>{person.skill}</div>
                  <div>star</div>
                  <div>
                    <button>-- REVIEW --</button>
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
