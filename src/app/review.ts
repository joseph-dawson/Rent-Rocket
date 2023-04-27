export interface Review {
    propertyId?: number;
    landlordId?: number;

    reviewerName: string;
    rating: number;
    reviewText: string;
}