import { cleaning, electrician, fashion, gardening, plumbing, transportation } from "../enum"

export interface personnel {
    name: string,
    age: number,
    status: string,
    contactNumber: number,
    skill: cleaning | electrician | fashion | gardening | transportation | plumbing,
    rating: string,
}