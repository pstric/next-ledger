import { /* fetchFilteredChains, fetchFilteredCities, */ fetchFilteredItemCategories/* , fetchFilteredStores */ } from "./data";

// const cities = [
//     {
//         id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//         zip: '6400',
//         name: 'Sønderborg',
//     },
//     {
//         id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
//         zip: '8700',
//         name: 'Horsens',
//     },
// ];
// const cities = await fetchFilteredCities("", 1);

// const chains = [
//     {
//         id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
//         name: 'Netto',
//     },
//     {
//         id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
//         name: 'Fakta',
//     },
//     {
//         id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
//         name: 'Nørrebros Kiosk',
//     },
// ];
// const chains = await fetchFilteredChains("", 1);

// const stores = [
//     {
//         id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
//         chain_id: chains[0].id,
//         city_id: cities[1].id,
//         address: 'Vestergade 25',
//     },
//     {
//         id: '410544b2-4001-4271-9855-fec4b6a6442a',
//         chain_id: chains[2].id,
//         city_id: cities[1].id,
//         address: 'Nørretorv 2',
//     },
// ];

// const itemCategories = [
//     {
//         id: '385bb54a-312d-4dda-9db5-05cd60ab2482',
//         name: 'Bager',
//     },
//     {
//         id: '9fef9c2b-5ad4-4fe6-9c5f-cc79b37e971e',
//         name: 'Frugt & grønt',
//     },
// ];

// export type Item = {
//     id: string;
//     invoice_id: string;
//     category_id: string;
//     name: string;
//     count: number;
//     amount: number;
//     discount: number;
// };

const itemCategories = await fetchFilteredItemCategories("", 1);

const items = [
    {
        id: '6888dc3b-292b-4b31-812c-18274ab2d3ff',
        invoice_id: '',
        category_id: itemCategories[0].id,
        name: 'Formbrød med birkes',
        count: 1,
        amount: 20.00,
        discount: 0,
    },
    {
        id: '614f39ab-23a7-40ea-819c-e345e12afed4',
        invoice_id: '',
        category_id: itemCategories[1].id,
        name: 'Ananas, family pack',
        count: 1,
        amount: 18.95,
        discount: 0,
    },
];

// const stores = await fetchFilteredStores("", 1);

// const invoices = [
//     {
//         id: '7b0ed018-1a6d-43b5-8ebc-a79298e2da48',
//         store_id: stores[0].id,
//         date: '2024-12-04',
//     },
// ];

export { /* cities, chains, stores, itemCategories, */items/* , invoices */ };