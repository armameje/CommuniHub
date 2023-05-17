import { cleaning, electrician, fashion, gardening, plumbing, transportation } from "./enum"
import { personnel } from "./interface/iPersonnel"
import { service } from "./interface/iService"

export const servicesList: service[] = [
    {
        key: 1,
        serviceName: "CLEANING SERVICES",
        serviceNumber: 1,
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: cleaning.IndoorCleaing,
                rating: 'cleaner-1'
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: cleaning.IndoorCleaing,
                rating: 'cleaner-2'
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: cleaning.OutdoorCleaning,
                rating: 'cleaner-3'
            } satisfies personnel
        ] 
    } satisfies service,
    {
        key: 2,
        serviceName: "GARDENING SERVICES",
        serviceNumber: 2,
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: gardening.LawnMowing,
                rating: 'gardener-1'
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: gardening.Landscaping,
                rating: 'gardener-2'
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: gardening.Landscaping,
                rating: 'gardener-3'
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 3,
        serviceName: "PLUMBING SERVICES",
        serviceNumber: 3,
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: plumbing.Installation,
                rating: 'plumber-1'
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: plumbing.Repairs,
                rating: 'plumber-2'
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: plumbing.Cleaning,
                rating: 'plumber-3'
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 4,
        serviceName: "ELECTRICIAN SERVICES",
        serviceNumber: 4,
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: electrician.Installation,
                rating: 'electrician-1'
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: electrician.Repairs,
                rating: 'electrician-2'
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: electrician.Safety,
                rating: 'electrician-3'
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 5,
        serviceName: "FASHION SERVICES",
        serviceNumber: 5,
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: fashion.Stylist,
                rating: 'fashion-1'
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: fashion.Rental,
                rating: 'fashion-2'
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: fashion.Retailing,
                rating: 'fashion-3'
            } satisfies personnel
        ]
    } satisfies service,
    {
        key: 6,
        serviceName: "TRANSPORTATION SERVICES",
        serviceNumber: 6,
        personnel: [
            {
                name: "Johnny Sins",
                age: 69,
                status: "Available",
                contactNumber: 9887434,
                skill: transportation.Jeep,
                rating: 'transpo-1'
            } satisfies personnel,
            {
                name: "Mang Thomas",
                age: 54,
                status: "Unavailable",
                contactNumber: 9887434,
                skill: transportation.Trike,
                rating: 'transpo-2'
            } satisfies personnel,
            {
                name: "Damaso Kun",
                age: 71,
                status: "Available",
                contactNumber: 9887434,
                skill: transportation.SUV,
                rating: 'transpo-3'
            } satisfies personnel
        ]
    } satisfies service
]