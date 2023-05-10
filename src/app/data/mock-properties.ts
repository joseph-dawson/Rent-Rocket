import { Property } from "./property-service/property";
import { REVIEWS } from "./mock-reviews";

export const PROPERTIES: Property[] = [

    //unsure why this was in property, but if it needs to be added back in just copy this into reviews after filter(r.propertyId === x)
    //reviewStars:[[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0],[255,0,0,0]], 


    //alt address: 1234 Maple Street, Suite 567, Fargo, USA
    { id: 1, landlordId: 1, name: 'Maplewood Heights Apartments', 
    description: 'Maplewood Heights Apartments is a luxury apartment complex nestled in the heart of a bustling downtown area. The complex boasts modern amenities such as a fitness center, rooftop pool, and 24-hour concierge service. The units are spacious and feature high-end finishes, stainless steel appliances, and breathtaking views of the city skyline.', 
    monthlyRent: 3500, address: '1234 Maple Street, Suite 567, Fargo, USA', sqFootage: 1200, numBeds: 2, numBaths: 1, 
    depositAmount: 5500, rentLength: '6 month lease', petPolicy: 'Allowed', 
    reviews: REVIEWS.filter(r => r.propertyId === 1),latLng : {lat:46.918355,lng:-96.792087}, imageSrc: '/assets/img/Heights.jpg' },
    
    //alt address: 4321 Main St, Suite 234, Fargo, USA
    { id: 2, landlordId: 1, name: 'Park View Residences',
    description: 'Park View Residences offers luxurious, modern living in the heart of the city. The spacious apartments feature high-end finishes, stainless steel appliances, and stunning city views. Building amenities include a fitness center, rooftop pool, and 24-hour concierge service.',
    monthlyRent: 3400, address: '5100 44TH AVE S  APT 207 FARGO ND 58104-3931 USA', sqFootage: 1100, numBeds: 2, numBaths: 2, 
    depositAmount: 5000, rentLength: '12 month lease', petPolicy: 'Pets are welcome with an additional monthly fee of $50 per pet. Some breed and weight restrictions may apply.', 
    reviews: REVIEWS.filter(r => r.propertyId === 2), latLng:{lat:46.940607,lng:-96.795984}, imageSrc: '/assets/img/Parkview.jpg'},

    //alt address: 5678 Oak St, Suite, Fargo, USA
    { id: 3, landlordId: 2, name: 'Hillcrest Apartments',
    description: 'Hillcrest Apartments offers affordable and comfortable living in a convenient location. The apartments feature basic finishes and appliances, but provide all the necessary amenities for everyday living. Building amenities include a fitness center and laundry facilities.',
    monthlyRent: 1200, address: '1100 NP AVE N  FARGO ND 58102-4626 USA', sqFootage: 800, numBeds: 1, numBaths: 1,
    depositAmount: 1200, rentLength: '6 or 12 month lease', petPolicy: 'Cats and small dogs are welcome with an additional monthly fee of $25 per pet. Some breed and weight restrictions may apply.',
    reviews: REVIEWS.filter(r => r.propertyId === 3), latLng:{lat:46.896867,lng:-96.856775}, imageSrc: '/assets/img/Hilltop.jpg'},

    //alt address: 9012 Elm St, Fargo, USA
    { id: 4, landlordId: 3, name: 'Shady Grove Apartments', 
    description: 'Shady Grove Apartments offers low-cost living in a less desirable location. The apartments are old and in poor condition, with outdated appliances and worn-out finishes. Building amenities are minimal and may not be properly maintained.', 
    monthlyRent: 800, address: '6050 36TH ST S  APT A10 FARGO ND 58104-7711 USA', sqFootage: 600, numBeds: 1, numBaths: 2,
    depositAmount: 500, rentLength: 'Month-to-month lease', petPolicy: 'No pets allowed.',
    reviews: REVIEWS.filter(r => r.propertyId === 4), latLng:{lat:46.868160,lng:-96.854338}, imageSrc: '/assets/img/Shady.jpg'},

    //alt address: 4567 Oak Street, Fargo, USA
    { id: 5, landlordId: 4, name: 'Sunset Terrace Apartments',
    description: 'Newly renovated apartments with modern amenities and scenic views of the city. Close to public transportation, shopping, and dining options.',
    monthlyRent: 1800, address: '1307 13 1/2 ST S  APT 1 FARGO ND 58103-3949 USA', sqFootage: 900, numBeds: 2, numBaths: 1,
    depositAmount: 1800, rentLength: '12 month lease', petPolicy: 'Cats and dogs allowed with additional pet deposit and monthly fee.',
    reviews: REVIEWS.filter(r => r.propertyId === 5),latLng:{lat:46.825935,lng:-96.875889}, imageSrc: '/assets/img/Sunset.jpg'},

    //alt address: 1234 Main Street, Fargo, USA
    { id: 6, landlordId: 5, name: 'Westwood Park Apartments',
    description: 'Spacious and newly renovated apartments with great amenities, including a fitness center and a swimming pool. Conveniently located near shopping, dining, and entertainment options.',
    monthlyRent: 1500, address: '3200 22ND ST S  APT 319 FARGO ND 58104-6565 USA', sqFootage: 1000, numBeds: 2, numBaths: 2,
    depositAmount: 1500, rentLength: '6 month lease', petPolicy: 'Cats and dogs allowed with additional pet deposit and monthly fee.',
    reviews: REVIEWS.filter(r => r.propertyId === 6), latLng:{lat:46.798522,lng:-96.804256} ,imageSrc: 'assets/img/Westwood.jpg'},

    //alt address: 1234 Cedarwood Lane, Fargo, USA
    {id: 7, landlordId: 6, name: 'Cedarwood Heights', 
    description: 'Cozy apartment with basic amenities and modest furnishings.',
    monthlyRent: 900, address: '1317 BROADWAY N  APT 1 FARGO ND 58102-2661 USA', sqFootage: 750, numBeds: 1, numBaths: 1,
    depositAmount: 500, rentLength: '12 month lease', petPolicy: 'Cats and small dogs allowed with a $200 non-refundable deposit and an additional $25 monthly fee.',
    reviews: REVIEWS.filter(r => r.propertyId === 7),latLng:{lat:46.855995,lng:-96.784101}, imageSrc: 'assets/img/Cedarwood.jpg'},

];
