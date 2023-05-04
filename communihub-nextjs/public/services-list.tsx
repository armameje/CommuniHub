import { cleaning, electrician, fashion, gardening, plumbing, transportation } from "./enum"
import { personnel } from "./interface/iPersonnel"
import { service } from "./interface/iService"

export const servicesList: service[] = [
    {
        key: 1,
        serviceName: "CLEANING SERVICES",
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: cleaning.IndoorCleaing,
                rating: 3
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: cleaning.IndoorCleaing,
                rating: 3
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: cleaning.OutdoorCleaning,
                rating: 3
            } satisfies personnel
        ] 
    } satisfies service,
    {
        key: 2,
        serviceName: "GARDENING SERVICES",
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: gardening.LawnMowing,
                rating: 3
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: gardening.Landscaping,
                rating: 3
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: gardening.Landscaping,
                rating: 3
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 3,
        serviceName: "PLUMBING SERVICES",
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: plumbing.Installation,
                rating: 3
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: plumbing.Repairs,
                rating: 3
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: plumbing.Cleaning,
                rating: 3
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 4,
        serviceName: "ELECTRICIAN SERVICES",
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: electrician.Installation,
                rating: 3
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: electrician.Repairs,
                rating: 3
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: electrician.Safety,
                rating: 3
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 5,
        serviceName: "FASHION SERVICES",
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: fashion.Stylist,
                rating: 3
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: fashion.Rental,
                rating: 3
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: fashion.Retailing,
                rating: 3
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 6,
        serviceName: "TRANSPORTATION SERVICES",
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: transportation.Jeep,
                rating: 3
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: transportation.Trike,
                rating: 3
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: transportation.SUV,
                rating: 3
            } satisfies personnel
        ]
    } satisfies service
]