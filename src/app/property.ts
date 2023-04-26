import { Review } from "./review";

export interface Property {
    //important values
    name: string;
    monthlyRent: number;
    address: string;
    reviews: Review[];

    //apartment details
    sqFootage: number;
    numBeds: string;
    numBaths: string;
    description: string;

    //additional information
    petPolicy: string;
    depositAmount: number;
    rentLength: string;
}