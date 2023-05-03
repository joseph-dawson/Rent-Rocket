import { Landlord } from "../landlord-service/landlord";
import { PROPERTIES } from "./mock-properties";
import { REVIEWS } from "./mock-reviews";


export const LANDLORDS: Landlord[] = [

    { id: 1, name: 'Samantha Martin', email: 'samantha.martine@rentrocket.com', phone: '(555) 123-7654', properties: [PROPERTIES[0], PROPERTIES[1]],
    reviews: REVIEWS.filter(r => r.landlordId === 1) },

    { id: 2, name: 'Jason Brown', email: 'jason.brown@hillcrestapartments.com', phone: '(555) 987-3456', properties: [PROPERTIES[2]],
    reviews: REVIEWS.filter(r => r.landlordId === 2) },

    { id: 3, name: 'Michael Thompson', email: 'michael.thompson@shadygroveapartments.com', phone: '(555) 456-7890', properties: [PROPERTIES[3]],
    reviews: REVIEWS.filter(r => r.landlordId === 3) },
    //Noah Singh, Emily Lee, Beverly Mata
];
