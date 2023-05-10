import { Property } from "../property-service/property";
import { Review } from "../review-service/review";

export interface Landlord {
    id: number;

    name: string;
    email: string;
    phone: string;

    reviews: Review[];
    properties: Property[];
}