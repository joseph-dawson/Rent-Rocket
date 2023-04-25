import { propertyReview } from "./propertyReview";

export interface Property {
    //important values
    name: string;
    monthlyRent: number;
    address: string;
    reviews: propertyReview[];

    //apartment details
    sqFootage: number;
    numBeds: number;
    numBaths: number;
    description: string;

    //additional information
    petPolicy: string;
    depositAmount: number;
    rentLength: string;
}