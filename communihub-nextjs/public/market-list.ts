import { market } from "./interface/iMarket";
import { menuItem } from "./interface/iMenuItem";

export const marketList = [
  {
    key: 1,
    marketId: 1,
    name: "Marinela's Special Tapa and Longganisa",
    ratings: 0,
    contactNumber: "09247495061",
    address: "Baguio Street, Villas Del Pueblo, Buli, Taal Batangas",
    payments: "Cash, Gcash and Card",
    time: "7:00 am to 6:00 pm",
    menuItems: [
      {
        name: "Tapang Taal",
        price: "400 / Kilo",
        itemCode: 'boss-1'
      } satisfies menuItem,
      {
        name: "Longganisang Taal",
        price: "250 / Kilo",
        itemCode: 'boss-2'
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 2,
    marketId: 2,
    name: "Valeriana's Special Empanada and Delicacies",
    ratings: 0,
    contactNumber: "09247495061",
    address: "Batanes Street, Villas Del Pueblo, Buli, Taal Batangas",
    payments: "Cash, Gcash and Card",
    time: "5:00 am to 12:00 pm",
    menuItems: [
      {
        name: "Special Empanada",
        price: "30 / pc",
        itemCode: 'larr-1'
      } satisfies menuItem,
      {
        name: "Suman Taal",
        price: "25 / pc",
        itemCode: 'larr-2'
      } satisfies menuItem,
      {
        name: "Panutsa",
        price: "40 / pack",
        itemCode: 'larr-3'
      } satisfies menuItem,
      {
        name: "Tablea Cocoa",
        price: "50 / pack",
        itemCode: 'larr-4'
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 3,
    marketId: 3,
    name: "Yarie's Palamig",
    ratings: 0,
    contactNumber: "09247495061",
    address: "Ilo-Ilo Street, Villas Del Pueblo, Buli, Taal Batangas",
    payments: "Cash, Gcash and Card",
    time: "7:00 am to 4:00 pm",
    menuItems: [
      {
        name: "Buko Juice",
        price: 25,
        itemCode: 'kuya-1'
      } satisfies menuItem,
      {
        name: "Buko Pandan",
        price: 25,
        itemCode: 'kuya-2'
      } satisfies menuItem,
      {
        name: "Sago't Gulaman",
        price: 25,
        itemCode: 'kuya-3'
      } satisfies menuItem,
      {
        name: "Calamansi Juice",
        price: 10,
        itemCode: 'kuya-4'
      } satisfies menuItem,
      {
        name: "Melon Juice",
        price: 15,
        itemCode: 'kuya-5'
      } satisfies menuItem,
      {
        name: "Buko Salad",
        price: 20,
        itemCode: 'kuya-6'
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 4,
    marketId: 4,
    name: "Bonito's Karinderya",
    ratings: 0,
    contactNumber: "09247495061",
    address: "Boracay Street, Villas Del Pueblo, Buli, Taal Batangas",
    payments: "Cash, Gcash and Card",
    time: "5:00 am to 12:00 pm",
    menuItems: [
      {
        name: "Pork Adobo",
        price: 50,
        itemCode: 'bonito-1'
      } satisfies menuItem,
      {
        name: "Chicken Adobo",
        price: 50,
        itemCode: 'bonito-2'
      } satisfies menuItem,
      {
        name: "Bistek",
        price: 50,
        itemCode: 'bonito-3'
      } satisfies menuItem,
      {
        name: "Beef Tapa",
        price: 50,
        itemCode: 'bonito-4'
      } satisfies menuItem,
      {
        name: "Tinolang Manok",
        price: 50,
        itemCode: 'bonito-5'
      } satisfies menuItem,
      {
        name: "Pork Sinigang",
        price: 50,
        itemCode: 'bonito-6'
      } satisfies menuItem,
      {
        name: "Pork Giniling",
        price: 50,
        itemCode: 'bonito-7'
      } satisfies menuItem,
      {
        name: "Sinaing na Tulingan",
        price: 50,
        itemCode: 'bonito-8'
      } satisfies menuItem,
      {
        name: "Fried Chicken",
        price: 50,
        itemCode: 'bonito-9'
      } satisfies menuItem,
      {
        name: "Porkchop",
        price: 50,
        itemCode: 'bonito-10'
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 5,
    marketId: 5,
    name: "Yebra's Meryenda",
    ratings: 0,
    contactNumber: "09760246800",
    address: "Pampanga Street, Villas Del Pueblo, Buli, Taal Batangas",
    payments: "Cash, Gcash and Card",
    time: "10:00 am to 5:00 pm",
    menuItems: [
      {
        name: "Pancit Bihon",
        price: 25,
        itemCode: 'nikko-1'
      } satisfies menuItem,
      {
        name: "Pancit Canton",
        price: 25,
        itemCode: 'nikko-2'
      } satisfies menuItem,
      {
        name: "Turon",
        price: 10,
        itemCode: 'nikko-3'
      } satisfies menuItem,
      {
        name: "Banana Cue",
        price: 15,
        itemCode: 'nikko-4'
      } satisfies menuItem,
      {
        name: "Lumpiang Toge",
        price: 10,
        itemCode: 'nikko-5'
      } satisfies menuItem,
      {
        name: "Siomai",
        price: "25 / 4 pcs",
        itemCode: 'nikko-6'
      } satisfies menuItem
    ],
  } satisfies market,
  {
    key: 6,
    marketId: 6,
    name: "Aling Maring's Lutong Bahay",
    ratings: 0,
    contactNumber: "09247495061",
    address: "Pangasinan Street, Villas Del Pueblo, Buli, Taal Batangas",
    payments: "Cash, Gcash and Card",
    time: "10:00 am to 5:00 pm",
    menuItems: [
      {
        name: "Ginisang Ampalaya",
        price: 30,
        itemCode: 'aling-1'
      } satisfies menuItem,
      {
        name: "Adobong Sitaw",
        price: 30,
        itemCode: 'aling-2'
      } satisfies menuItem,
      {
        name: "Ginataang Kalabasa",
        price: 30,
        itemCode: 'aling-3'
      } satisfies menuItem,
      {
        name: "Laing",
        price: 30,
        itemCode: 'aling-4'
      } satisfies menuItem,
      {
        name: "Ginisang Munggo",
        price: 30,
        itemCode: 'aling-5'
      } satisfies menuItem,
    ],
  } satisfies market,
];
