import { Landlord } from "./landlord-service/landlord";
import { PROPERTIES } from "./mock-properties";
import { REVIEWS } from "./mock-reviews";


export const LANDLORDS: Landlord[] = [

    { id: 1, name: 'Samantha Martin', email: 'samantha.martine@rentrocket.com', phone: '(555) 123-7654', properties: [PROPERTIES[0], PROPERTIES[1]],
    reviews: REVIEWS.filter(r => r.landlordId === 1) },

    { id: 2, name: 'Jason Brown', email: 'jason.brown@hillcrestapartments.com', phone: '(555) 987-3456', properties: [PROPERTIES[2]],
    reviews: REVIEWS.filter(r => r.landlordId === 2) },

    { id: 3, name: 'Michael Thompson', email: 'michael.thompson@shadygroveapartments.com', phone: '(555) 456-7890', properties: [PROPERTIES[3]],
    reviews: REVIEWS.filter(r => r.landlordId === 3) },

    { id: 4, name: 'Jennifer Kim', email: 'jennifer.kim@sunsetterraceapartments.com', phone: '(555) 123-4567', properties: [PROPERTIES[4]],
    reviews: REVIEWS.filter(r => r.landlordId === 4) },

    { id: 5, name: 'David Chen', email: 'david.chen@westwoodparkapartments.com', phone: '(555) 987-6543', properties: [PROPERTIES[5]],
    reviews: REVIEWS.filter(r => r.landlordId === 5) },

    { id: 6, name: 'Jessica Lee', email: 'jessica.lee@cedarwoodheights.com', phone: '(555) 555-5555', properties: [PROPERTIES[6]],
    reviews: REVIEWS.filter(r => r.landlordId === 6) },
];
