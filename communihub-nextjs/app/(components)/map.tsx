"use client";

import HouseModal from "./house-modal";
import { useState } from "react";
import { houseList } from "@/public/house-list";
import { house } from "@/public/interface/iHouseList";

export default function Map() {
  const [showHouseModal, setShowHouseModal] = useState<boolean>(false);
  const [houseKey, setHouseKey] = useState<house>({} as house);

  function getHouseDetails(key: number) {
    return houseList.filter((x) => x.ownerId === key)[0];
  }

  function handleModalClose() {
    setShowHouseModal(false);
  }

  return (
    <section className="w-full h-auto bg-[rgb(250,236,225)] flex flex-col items-center justify-center px-52 py-16">
      <div className="w-full px-16 py-8 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="text-4xl">Community Map</h1>
        <p>
          CommuniHub offers an interactive map for users to virtually explore the location of the community in which we are building. This feature would help users navigate and familiarize themselves
          to the location and roads in the community.
        </p>
      </div>
      <div className="map-bg w-full h-[416px] relative">
        <div
          onClick={() => {
            const key = 1;
            setShowHouseModal(true);
            setHouseKey(getHouseDetails(key));
          }}
          className="w-[97px] h-[55px] bg-[rgb(250,236,225)] absolute top-[33%] left-[8%] rotate-[-10deg] hover:cursor-pointer"
        ></div>
        <div
          onClick={() => {
            const key = 5;
            setShowHouseModal(true);
            setHouseKey(getHouseDetails(key));
          }}
          className="w-[96px] h-[55px] bg-[rgb(250,236,225)] absolute top-[25%] left-[27%] rotate-[-10deg] hover:cursor-pointer"
        ></div>
        <div
          onClick={() => {
            const key = 3;
            setShowHouseModal(true);
            setHouseKey(getHouseDetails(key));
          }}
          className="w-[100px] h-[55px] bg-[rgb(250,236,225)] absolute top-[60%] left-[16%] rotate-[-10deg] hover:cursor-pointer"
        ></div>
        <div
          onClick={() => {
            const key = 4;
            setShowHouseModal(true);
            setHouseKey(getHouseDetails(key));
          }}
          className="w-[88px] h-[38px] bg-[rgb(250,236,225)] absolute top-[58%] left-[39%] rotate-[-10deg] hover:cursor-pointer"
        ></div>
        <div
          onClick={() => {
            const key = 4;
            setShowHouseModal(true);
            setHouseKey(getHouseDetails(key));
          }}
          className="w-[40px] h-[40px] bg-[rgb(250,236,225)] absolute top-[10%] left-[63%] rotate-[-8deg] hover:cursor-pointer"
        ></div>
        <div
          onClick={() => {
            const key = 2;
            setShowHouseModal(true);
            setHouseKey(getHouseDetails(key));
          }}
          className="w-[55px] h-[55px] bg-[rgb(250,236,225)] absolute top-[14%] right-[18%] rotate-[-8deg] hover:cursor-pointer"
        ></div>
        <div
          onClick={() => {
            const key = 2;
            setShowHouseModal(true);
            setHouseKey(getHouseDetails(key));
          }}
          className="w-[55px] h-[55px] bg-[rgb(250,236,225)] absolute top-[50%] right-[15%] rotate-[-8deg] hover:cursor-pointer"
        ></div>
      </div>
      {showHouseModal && (
        <HouseModal
          onModalClose={handleModalClose}
          ownerId={houseKey.ownerId}
          owner={houseKey.owner}
          capacity={houseKey.capacity}
          age={houseKey.age}
          birthday={houseKey.birthday}
          hobbies={houseKey.hobbies}
        />
      )}
    </section>
  );
}
