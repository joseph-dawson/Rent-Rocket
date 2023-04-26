import { Landlord } from "./landlord";
import { Review } from "./review";
import { PROPERTIES } from "./mock-properties";


export const LANDLORDS: Landlord[] = [

    { name: 'Samantha Martin', email: 'samantha.martine@rentrocket.com', phone: '(555) 123-7654', properties: [PROPERTIES[0], PROPERTIES[1]],
    reviews: [{reviewerName: 'Ava Jackson', rating: 5, 
    reviewText: 'Samantha Martin is the best landlord I\'ve ever had. She is responsive, kind, and always willing to help with any issues that arise. She goes above and beyond to ensure that her tenants are happy and comfortable in their homes. Her communication is excellent, and she always keeps us informed of any updates or changes. Overall, I would highly recommend Samantha Martin as a landlord to anyone.'},
    {reviewerName: 'Ethan Nguyen', rating: 4, 
    reviewText: 'Samantha Martin is a great landlord who is always available and willing to help with any issues that come up. She is friendly and professional, and her communication is excellent. The only reason I\'m giving her four stars instead of five is because there have been some delays in getting maintenance issues resolved. However, overall, I would definitely recommend Samantha Martin as a landlord.'},
    {reviewerName: 'Olivia Patel', rating: 3,
    reviewText: 'Samantha Martin is an okay landlord. She is generally responsive to our needs, but there have been some issues with delays in getting maintenance requests fulfilled. Her communication is good, but sometimes it takes longer than expected to get a response. Overall, she\'s not the best landlord I\'ve had, but she\'s also not the worst. I would recommend her with some reservations.'},
    {reviewerName: 'Noah Singh', rating: 5, 
    reviewText: 'Samantha Martin is an amazing landlord who always goes above and beyond for her tenants at Maplewood Heights Apartments. She is responsive, kind, and professional, and she always ensures that any issues or concerns are addressed in a timely manner. Her communication is excellent, and she always keeps us informed of any updates or changes. Overall, I would highly recommend Samantha Martin as a landlord to anyone looking for a great living experience.'},
    {reviewerName: 'Emily Lee', rating: 4, 
    reviewText: 'Samantha Martin is a good landlord who is generally responsive to our needs at Maplewood Heights Apartments. She is friendly and professional, and her communication is good. There have been some issues with maintenance requests taking longer than expected to be fulfilled, but overall she tries her best to make sure that we are satisfied with our living conditions. I would recommend Samantha Martin as a landlord.'},
    {reviewerName: 'Beverly Mata', rating: 5, 
    reviewText: 'Samantha Martin is an excellent landlord who truly cares about her tenants. She is always available to help with any issues that arise and is extremely responsive to our needs. Her communication is excellent, and she always keeps us informed of any updates or changes. Overall, I would highly recommend Samantha Martin as a landlord to anyone looking for a great living experience.'},
    ] },

    { name: 'Jason Brown', email: 'jason.brown@hillcrestapartments.com', phone: '(555) 987-3456', properties: [PROPERTIES[2]],
    reviews: [{reviewerName: 'Benjamin Kim', rating: 2,
    reviewText: 'Jason Brown is an average landlord at best. He is not very responsive and seems to be absent most of the time. When there are issues, he takes a long time to respond and often doesn\'t seem to care about his tenants\' concerns. His communication is poor, and he does not keep us informed of any updates or changes. Overall, I would not recommend Jason Brown as a landlord.'},
    {reviewerName: 'Isabella Rodriguez', rating: 3, 
    reviewText: 'Jason Brown is an okay landlord, but he could definitely do better. He is sometimes responsive to our needs, but there have been some issues with delays in getting maintenance requests fulfilled. His communication is average, but sometimes it takes longer than expected to get a response. Overall, he\'s not the best landlord I\'ve had, but he\'s also not the worst. I would recommend him with some reservations.'},
    {reviewerName: 'Caleb Chen', rating: 2, 
    reviewText: 'Jason Brown is not a very good landlord. He seems to be absent most of the time and rarely responds to our needs. When there are issues, he takes a long time to address them, and often doesn\'t seem to care about his tenants\' concerns. His communication is poor, and he does not keep us informed of any updates or changes. Overall, I would not recommend Jason Brown as a landlord.'},
    ] },

    { name: 'Michael Thompson', email: 'michael.thompson@shadygroveapartments.com', phone: '(555) 456-7890', properties: [PROPERTIES[4]],
    reviews: [{reviewerName: 'Sophia Lee', rating: 4, 
    reviewText: 'Michael Thompson is a good landlord who is generally responsive to our needs. He is friendly and professional, and his communication is good. There have been some issues with maintenance requests taking longer than expected to be fulfilled, but overall he tries his best to make sure that we are satisfied with our living conditions. I would recommend Michael Thompson as a landlord.'},
    {reviewerName: 'Mason Patel', rating: 3,
    reviewText: 'Michael Thompson is an average landlord who sometimes takes longer than expected to respond to our needs. There have been some issues with maintenance requests being delayed, but he does try to address them eventually. His communication is average, and he keeps us informed of updates and changes. Overall, I would recommend Michael Thompson as a landlord with some reservations.'},
    {reviewerName: 'Chloe Kim', rating: 5, 
    reviewText: 'Michael Thompson is an excellent landlord who always goes above and beyond to make sure that his tenants are happy and comfortable in their homes. He is responsive, kind, and always willing to help with any issues that arise. His communication is excellent, and he always keeps us informed of any updates or changes. Overall, I would highly recommend Michael Thompson as a landlord to anyone.'},
    ] },
    //Noah Singh, Emily Lee, Beverly Mata
];
