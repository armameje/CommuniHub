import { personnel } from "./iPersonnel"

export interface service {
    key: number,
    serviceName: string,
    personnel: personnel[]
}