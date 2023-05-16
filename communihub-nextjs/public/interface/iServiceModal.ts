import { personnel } from "./iPersonnel"

export interface serviceModal {
    serviceName: string,
    toggleModal: () => void,
    personnel?: personnel[],
    modal: boolean
}