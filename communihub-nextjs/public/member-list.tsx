import { member } from "./interface/iMember";

export const memberList: member[] = [
  {
    key: 1,
    name: "Mission, Benett Andrea B.",
    location: "Top of the CICS building",
    id: 1,
  } satisfies member,
  {
    key: 2,
    name: "Gallos, Larr Joshua B",
    location: "Top of the CICS building",
    id: 2,
  } satisfies member,
  {
    key: 3,
    name: "Armamento, Nikko Nel J.",
    location: "Top of the CICS building",
    id: 3,
  } satisfies member,
  {
    key: 4,
    name: "Carolino, Al Vincent I.",
    location: "CpE Lab",
    id: 4,
  } satisfies member,
  {
    key: 5,
    name: "Cunag, Carl Matthew G.",
    location: "Cananimus",
    id: 5,
  } satisfies member,
];
