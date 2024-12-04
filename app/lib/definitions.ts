export type Invoice = {
    id: string;
    store_id: string;
    date: string;
};

export type InvoiceTable = {
    id: string;
    chain: string;
    date: string;
};

export type Item = {
    id: string;
    invoice_id: string;
    category_id: string;
    name: string;
    count: number;
    amount: number;
    discount: number;
};

export type ItemCategory = {
    id: string;
    name: string;
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