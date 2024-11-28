export type Invoice = {
    id: string;
    store_id: string;
    date: string;
};

export type Store = {
    id: string;
    chain_id: string;
    city_id: string;
    address: string;
};

export type StoreTable = {
    id: string;
    chain: string;
    city: string;
    address: string;
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