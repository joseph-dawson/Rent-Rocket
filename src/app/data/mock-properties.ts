import { Property } from "../property-service/property";
import { REVIEWS } from "./mock-reviews";

export const PROPERTIES: Property[] = [
    { id: 1, landlordId: 1, name: 'Maplewood Heights Apartments', 
    description: 'Maplewood Heights Apartments is a luxury apartment complex nestled in the heart of a bustling downtown area. The complex boasts modern amenities such as a fitness center, rooftop pool, and 24-hour concierge service. The units are spacious and feature high-end finishes, stainless steel appliances, and breathtaking views of the city skyline.', 
    monthlyRent: 3500, address: '1234 Maple Street, Suite 567, Fargo, USA', sqFootage: 1200, numBeds: '2', numBaths: '2', 
    depositAmount: 5500, rentLength: '6 month lease', petPolicy: 'Allowed', 
    reviews: REVIEWS.filter(r => r.propertyId === 1), reviewStars:[[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0]], imageSrc: '/assets/img/Heights.jpg' },
    
    { id: 2, landlordId: 1, name: 'Park View Residences',
    description: 'Park View Residences offers luxurious, modern living in the heart of the city. The spacious apartments feature high-end finishes, stainless steel appliances, and stunning city views. Building amenities include a fitness center, rooftop pool, and 24-hour concierge service.',
    monthlyRent: 3400, address: '4321 Main St, Suite 234, Fargo, USA', sqFootage: 1100, numBeds: '2', numBaths: '2', 
    depositAmount: 5000, rentLength: '12 month lease', petPolicy: 'Pets are welcome with an additional monthly fee of $50 per pet. Some breed and weight restrictions may apply.', 
    reviews: REVIEWS.filter(r => r.propertyId === 2), reviewStars:[[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0]], imageSrc: '/assets/img/Parkview.jpg'},

    { id: 3, landlordId: 2, name: 'Hillcrest Apartments',
    description: 'Hillcrest Apartments offers affordable and comfortable living in a convenient location. The apartments feature basic finishes and appliances, but provide all the necessary amenities for everyday living. Building amenities include a fitness center and laundry facilities.',
    monthlyRent: 1200, address: '5678 Oak St, Suite, Fargo, USA', sqFootage: 800, numBeds: '1', numBaths: '1',
    depositAmount: 1200, rentLength: '6 or 12 month lease', petPolicy: 'Cats and small dogs are welcome with an additional monthly fee of $25 per pet. Some breed and weight restrictions may apply.',
    reviews: REVIEWS.filter(r => r.propertyId === 3), reviewStars:[[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0]], imageSrc: '/assets/img/Hilltop.jpg'},

    { id: 4, landlordId: 3, name: 'Shady Grove Apartments', 
    description: 'Shady Grove Apartments offers low-cost living in a less desirable location. The apartments are old and in poor condition, with outdated appliances and worn-out finishes. Building amenities are minimal and may not be properly maintained.', 
    monthlyRent: 800, address: '9012 Elm St, Fargo, USA', sqFootage: 600, numBeds: 'Studio', numBaths: '1',
    depositAmount: 500, rentLength: 'Month-to-month lease', petPolicy: 'No pets allowed.',
    reviews: REVIEWS.filter(r => r.propertyId === 4), reviewStars:[[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0]], imageSrc: '/assets/img/Shady.jpg'},
];
