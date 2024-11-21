import { cities } from "./placeholder-data";

export function fetchAllInvoices() {
    const invoices = [
        {
            id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
            date: '2024-11-16',
            store: 'Netto',
            amount: '200.00',
        },
        {
            id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
            date: '2024-11-15',
            store: 'Fakta',
            amount: '150.00',
        },
        {
            id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
            date: '2024-11-14',
            store: 'Bilka',
            amount: '125.00',
        },
    ];
    return invoices;
}

export function fetchInvoiceById(id: string) {
    console.log(id);
    const invoices = fetchAllInvoices();
    var result = invoices[0];
    invoices.forEach((invoice) => {
        if (invoice.id === id) {
            console.log('found');
            result = invoice;
        }
    });
    console.log(result);
    return result;
}

export function fetchCities() {
    return cities;
}

export function fetchCityById(id: string) {
    return cities.find(city => city.id === id);
}

export async function fetchCitiesPages(query: string) {
    return 1;
}