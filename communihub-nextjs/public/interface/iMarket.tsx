import { menuItem } from "./iMenuItem"

export interface market {
    key: number,
    marketId: number,
    name: string,
    ratings: number,
    contactNumber: string,
    address: string,
    payments: string,
    time: string
    menuItems: menuItem[]
}