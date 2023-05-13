"use client";

import { houseList } from "@/public/house-list";
import { house } from "@/public/interface/iHouseList";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

interface houseModalProps extends house {
  onModalClose: () => void;
}

export default function HouseModal({ ownerId, owner, capacity, age, birthday, hobbies, onModalClose }: houseModalProps) {
  return (
    <div className="modal z-40 relative">
      <div onClick={onModalClose} className="service-modal-overlay"></div>
      <div className="modal-content flex gap-8">
        <div>
          <img src={`member-${ownerId}.jpg`} alt={owner} className="w-72 h-72" />
        </div>
        <div className="flex flex-col grow justify-between pb-16">
          <div className="flex justify-between">
            <div className="text-2xl font-bold">{owner}</div>
            <div>
              <GrClose onClick={onModalClose} />
            </div>
          </div>
          <div className="text-xl">{capacity}</div>
          <div className="text-md">
            <p>Age: {age} years old</p>
            <p>Birth: {birthday}</p>
            <p>Hobbies: {hobbies}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
