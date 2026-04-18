export interface Agent {
    name: string;
    company: string;
    phone: string;
    email: string;
    avatar: string;
}

export interface Enquiry {
    id: string;
    propertyTitle: string;
    price: string;
    address: string;
    image: string;
    sentTo: string;
    message: string;
    timeAgo: string;
    sentOn: string;
    agent: Agent;
}