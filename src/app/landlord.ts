import { Property } from "./property";
import { Review } from "./review";

export interface Landlord {
    id: number;

    name: string;
    email: string;
    phone: string;

    reviews: Review[];
    properties: Property[];
}