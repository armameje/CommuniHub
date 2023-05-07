import { market } from "./interface/iMarket";
import { menuItem } from "./interface/iMenuItem";

export const marketList = [
  {
    key: 1,
    marketId: 1,
    name: "Boss Cunag's Tapa and Longganisa",
    ratings: 0,
    contactNumber: "09247495061",
    address: "No. 26, Narra Street, Villas Del Pueblo, Buli, Taal Batangas",
    payments: "Cash, Gcash and Card",
    time: "7:00 am to 6:00 pm",
    menuItems: [
      {
        name: "Tapang Taal",
        price: 400,
      } satisfies menuItem,
      {
        name: "Longganisang Taal",
        price: 250,
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 2,
    marketId: 2,
    name: "Larr's Special Empanada and Delicacies",
    ratings: 0,
    contactNumber: "09247495061",
    address: "No. 26, Narra Street, Nueva Villa, Alangilan, Batangas City",
    payments: "Cash, Gcash and Card",
    time: "5:00 am to 12:00 pm",
    menuItems: [
      {
        name: "Special Empanada",
        price: 30,
      } satisfies menuItem,
      {
        name: "Suman Taal",
        price: 25,
      } satisfies menuItem,
      {
        name: "Panutsa",
        price: 40,
      } satisfies menuItem,
      {
        name: "Tablea Cocoa",
        price: 50,
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 3,
    marketId: 3,
    name: "Kuya Al's Palamig",
    ratings: 0,
    contactNumber: "09247495061",
    address: "No. 26, Narra Street, Nueva Villa, Alangilan, Batangas City",
    payments: "Cash, Gcash and Card",
    time: "7:00 am to 4:00 pm",
    menuItems: [
      {
        name: "Buko Juice",
        price: 25,
      } satisfies menuItem,
      {
        name: "Buko Pandan",
        price: 25,
      } satisfies menuItem,
      {
        name: "Sago't Gulaman",
        price: 25,
      } satisfies menuItem,
      {
        name: "Calamansi Juice",
        price: 10,
      } satisfies menuItem,
      {
        name: "Melon Juice",
        price: 15,
      } satisfies menuItem,
      {
        name: "Buko Salad",
        price: 20,
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 4,
    marketId: 4,
    name: "Bonito's Karinderya",
    ratings: 0,
    contactNumber: "09247495061",
    address: "No. 26, Narra Street, Nueva Villa, Alangilan, Batangas City",
    payments: "Cash, Gcash and Card",
    time: "5:00 am to 12:00 pm",
    menuItems: [
      {
        name: "Pork Adobo",
        price: 50,
      } satisfies menuItem,
      {
        name: "Chicken Adobo",
        price: 50,
      } satisfies menuItem,
      {
        name: "Bistek",
        price: 50,
      } satisfies menuItem,
      {
        name: "Beef Tapa",
        price: 50,
      } satisfies menuItem,
      {
        name: "Tinolang Manok",
        price: 50,
      } satisfies menuItem,
      {
        name: "Pork Sinigang",
        price: 50,
      } satisfies menuItem,
      {
        name: "Pork Giniling",
        price: 50,
      } satisfies menuItem,
      {
        name: "Sinaing na Tulingan",
        price: 50,
      } satisfies menuItem,
      {
        name: "Fried Chicken",
        price: 50,
      } satisfies menuItem,
      {
        name: "Porkchop",
        price: 50,
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 5,
    marketId: 5,
    name: "Nikko's Meryenda",
    ratings: 0,
    contactNumber: "09760246800",
    address: "No. 26, Narra Street, Nueva Villa, Alangilan, Batangas City",
    payments: "Cash, Gcash and Card",
    time: "10:00 am to 5:00 pm",
    menuItems: [
      {
        name: "Pancit Bihon",
        price: 25,
      } satisfies menuItem,
      {
        name: "Pancit Canton",
        price: 25,
      } satisfies menuItem,
      {
        name: "Turon",
        price: 10,
      } satisfies menuItem,
      {
        name: "Banana Cue",
        price: 15,
      } satisfies menuItem,
      {
        name: "Lumpiang Toge",
        price: 10,
      } satisfies menuItem,
      {
        name: "Siomai",
        price: "25 / 4 pcs",
      } satisfies menuItem,
      {
        name: "Halo-halo",
        price: 30,
      } satisfies menuItem,
      {
        name: "Mais Con Yelo",
        price: 25,
      } satisfies menuItem,
    ],
  } satisfies market,
  {
    key: 6,
    marketId: 6,
    name: "Aling Benett's Lutong Bahay",
    ratings: 0,
    contactNumber: "09247495061",
    address: "No. 26, Narra Street, Nueva Villa, Alangilan, Batangas City",
    payments: "Cash, Gcash and Card",
    time: "10:00 am to 5:00 pm",
    menuItems: [
      {
        name: "Ginisang Ampalaya",
        price: 30,
      } satisfies menuItem,
      {
        name: "Adobong Sitaw",
        price: 30,
      } satisfies menuItem,
      {
        name: "Ginataang Kalabasa",
        price: 30,
      } satisfies menuItem,
      {
        name: "Laing",
        price: 30,
      } satisfies menuItem,
      {
        name: "Ginisang Munggo",
        price: 30,
      } satisfies menuItem,
      {
        name: "Ginisang Gulay",
        price: 30,
      } satisfies menuItem,
      {
        name: "Ginisang Labanos",
        price: 30,
      } satisfies menuItem,
      {
        name: "Ginataang Langka",
        price: 30,
      } satisfies menuItem,
      {
        name: "Chop Suey",
        price: 30,
      } satisfies menuItem,
      {
        name: "Pritong Talong",
        price: 30,
      } satisfies menuItem,
    ],
  } satisfies market,
];
