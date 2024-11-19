export type Invoice = {
    id: string;
    store_id: string;
    date: string;
};

export type Store = {
    id: string;
    chain_id: string;
    address: string;
    city_id: string;
};

export type Chain = {
    id: string;
    name: string;
};

export type City = {
    id: string;
    zip: string;
    name: string;
};