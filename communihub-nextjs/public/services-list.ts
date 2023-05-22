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
                name: "Leon Mangubat",
                age: 40,
                status: "Available",
                contactNumber: 63925256853,
                skill: cleaning.IndoorCleaing,
                rating: 'cleaner-1'
            } satisfies personnel,
            {
                name: "Angelika De Leyos",
                age: 44,
                status: "Unavailable",
                contactNumber: 639344321445 ,
                skill: cleaning.IndoorCleaing,
                rating: 'cleaner-2'
            } satisfies personnel,
            {
                name: "Emilio Masalat",
                age: 30,
                status: "Available",
                contactNumber: 639742833842,
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
                name: "Francis Arroyo",
                age: 39,
                status: "Available",
                contactNumber: 639753848274 ,
                skill: gardening.LawnMowing,
                rating: 'gardener-1'
            } satisfies personnel,
            {
                name: "Jose Mario Dela Cruz",
                age: 34,
                status: "Unavailable",
                contactNumber: 639637840093,
                skill: gardening.Landscaping,
                rating: 'gardener-2'
            } satisfies personnel,
            {
                name: "Agapito Batumbakal",
                age: 31,
                status: "Available",
                contactNumber: 639123137646,
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
                name: "Christian Villanueva",
                age: 29,
                status: "Available",
                contactNumber: 639757453754 ,
                skill: plumbing.Installation,
                rating: 'plumber-1'
            } satisfies personnel,
            {
                name: "Joshua Gonzales",
                age: 24,
                status: "Unavailable",
                contactNumber: 639748839736 ,
                skill: plumbing.Repairs,
                rating: 'plumber-2'
            } satisfies personnel,
            {
                name: "Kurt Sanchez",
                age: 31,
                status: "Available",
                contactNumber: 639223449743 ,
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
                name: "Adam Aguilar",
                age: 39,
                status: "Available",
                contactNumber: 639669835622 ,
                skill: electrician.Installation,
                rating: 'electrician-1'
            } satisfies personnel,
            {
                name: "Jose Manalo",
                age: 34,
                status: "Unavailable",
                contactNumber: 639871764783 ,
                skill: electrician.Repairs,
                rating: 'electrician-2'
            } satisfies personnel,
            {
                name: "Rodrigo Ramirez",
                age: 41,
                status: "Available",
                contactNumber: 639849788271,
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
                name: "Iza Ortega",
                age: 29,
                status: "Available",
                contactNumber: 639639275283 ,
                skill: fashion.Stylist,
                rating: 'fashion-1'
            } satisfies personnel,
            {
                name: "Gloria Briones",
                age: 24,
                status: "Unavailable",
                contactNumber: 63984131103 ,
                skill: fashion.Rental,
                rating: 'fashion-2'
            } satisfies personnel,
            {
                name: "Lyka Estrera",
                age: 26,
                status: "Available",
                contactNumber: 639368761834 ,
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
                name: "Jepoy Dizon",
                age: 29,
                status: "Available",
                contactNumber: 63924826135 ,
                skill: transportation.Jeep,
                rating: 'transpo-1'
            } satisfies personnel,
            {
                name: "Manuel Pineda",
                age: 44,
                status: "Unavailable",
                contactNumber: 639859242847 ,
                skill: transportation.Trike,
                rating: 'transpo-2'
            } satisfies personnel,
            {
                name: "Tristan Espiritu",
                age: 71,
                status: "Available",
                contactNumber: 639378371766,
                skill: transportation.SUV,
                rating: 'transpo-3'
            } satisfies personnel
        ]
    } satisfies service
]