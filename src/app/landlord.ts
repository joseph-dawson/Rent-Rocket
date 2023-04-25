import { Property } from "./property";
import { landlordReview } from "./landlordReview";

export interface Landlord {
    name: string;
    email: string;
    phone: string;

    reviews: landlordReview[];
    properties: Property[];
}