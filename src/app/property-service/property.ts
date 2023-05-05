import { Review } from "../review-service/review";

export interface Property {
    id: number;
    landlordId: number;

    //important values
    name: string;
    monthlyRent: number;
    address: string;
    reviews: Review[];

    //apartment details
    sqFootage: number;
    numBeds: number;
    numBaths: number;
    description: string;

    //additional information
    petPolicy: string;
    depositAmount: number;
    rentLength: string;

    //reviewStars: number[][];
    imageSrc: string;
}