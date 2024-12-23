import { sql } from "@vercel/postgres";
import { City, Chain, Store, StoreTable, Invoice, InvoiceTable, ItemCategory } from "./definitions";

// export function fetchAllInvoices() {
//     const invoices = [
//         {
//             id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
//             date: '2024-11-16',
//             store: 'Netto',
//             amount: '200.00',
//         },
//         {
//             id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
//             date: '2024-11-15',
//             store: 'Fakta',
//             amount: '150.00',
//         },
//         {
//             id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
//             date: '2024-11-14',
//             store: 'Bilka',
//             amount: '125.00',
//         },
//     ];
//     return invoices;
// }

// export function fetchInvoiceById(id: string) {
//     console.log(id);
//     const invoices = fetchAllInvoices();
//     let result = invoices[0];
//     invoices.forEach((invoice) => {
//         if (invoice.id === id) {
//             console.log('found');
//             result = invoice;
//         }
//     });
//     console.log(result);
//     return result;
// }

const ITEMS_PER_PAGE = 6;

export async function fetchFilteredCities(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const cities = await sql<City>`
            SELECT
                cities.id,
                cities.zip,
                cities.name
            FROM
                cities
            WHERE
                cities.zip ILIKE ${`%${query}%`} OR
                cities.name ILIKE ${`%${query}%`}
            ORDER BY cities.zip ASC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return cities.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch cities.');
    }
}

export async function fetchCitiesPages(query: string) {
    try {
        const count = await sql`
            SELECT
                COUNT(*)
            FROM
                cities
            WHERE
                cities.zip ILIKE ${`%${query}%`} OR
                cities.name ILIKE ${`%${query}%`}
        `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of cities.');
    }
}

export async function fetchCityById(id: string) {
    try {
        const data = await sql<City>`
            SELECT
                cities.id,
                cities.zip,
                cities.name
            FROM
                cities
            WHERE
                cities.id = ${id}
            ORDER BY
                cities.zip ASC;
        `;

        const city = data.rows.map((city) => ({
            ...city,
        }));

        return city[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch city.');
    }
}

export async function fetchAllCities() {
    try {
        const cities = await sql<City>`
            SELECT *
            FROM cities
            ORDER BY cities.zip ASC
        `;

        return cities.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch cities.');
    }
}

export async function fetchFilteredChains(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const chains = await sql<Chain>`
            SELECT
                chains.id,
                chains.name
            FROM
                chains
            WHERE
                chains.name ILIKE ${`%${query}%`}
            ORDER BY chains.name ASC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return chains.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch chains.');
    }
}

export async function fetchChainsPages(query: string) {
    try {
        const count = await sql`
            SELECT
                COUNT(*)
            FROM
                chains
            WHERE
                chains.name ILIKE ${`%${query}%`}
        `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of chains.');
    }
}

export async function fetchChainById(id: string) {
    try {
        const data = await sql<Chain>`
            SELECT
                chains.id,
                chains.name
            FROM
                chains
            WHERE
                chains.id = ${id}
            ORDER BY
                chains.name ASC;
        `;

        const chain = data.rows.map((chain) => ({
            ...chain,
        }));

        return chain[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch chain.');
    }
}

export async function fetchAllChains() {
    try {
        const chains = await sql<Chain>`
            SELECT *
            FROM chains
            ORDER BY chains.name ASC
        `;

        return chains.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch chains.');
    }
}

export async function fetchFilteredStores(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const stores = await sql<StoreTable>`
            SELECT
                stores.id AS id,
                chains.name AS chain,
                CONCAT_WS( ' ', cities.zip, cities.name ) AS city,
                stores.address AS address
            FROM stores
            JOIN chains ON chains.id = stores.chain_id
            JOIN cities ON cities.id = stores.city_id
            WHERE
                chains.name ILIKE ${`%${query}%`} OR
                cities.zip ILIKE ${`%${query}%`} OR
                cities.name ILIKE ${`%${query}%`} OR
                stores.address ILIKE ${`%${query}%`}
            ORDER BY chains.name, cities.zip, stores.address ASC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;
        console.log(stores);

        return stores.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch stores.');
    }
}

export async function fetchStoresPages(query: string) {
    try {
        const count = await sql`
            SELECT COUNT(*)
            FROM stores
            JOIN chains ON chains.id = stores.chain_id
            JOIN cities ON cities.id = stores.city_id
            WHERE
                chains.name ILIKE ${`%${query}%`} OR
                cities.zip ILIKE ${`%${query}%`} OR
                cities.name ILIKE ${`%${query}%`} OR
                stores.address ILIKE ${`%${query}%`}
            `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of stores.');
    }
}

export async function fetchStoreById(id: string) {
    try {
        const data = await sql<Store>`
            SELECT
                stores.id,
                stores.chain_id,
                stores.city_id,
                stores.address
            FROM stores
            WHERE stores.id = ${id}
        `;

        const store = data.rows.map((store) => ({
            ...store,
        }));

        return store[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch store.');
    }
}

export async function fetchAllStores() {
    try {
        const stores = await sql<StoreTable>`
            SELECT
                stores.id AS id,
                chains.name AS chain,
                CONCAT_WS( ' ', cities.zip, cities.name ) AS city,
                stores.address AS address
            FROM stores
            JOIN chains ON chains.id = stores.chain_id
            JOIN cities ON cities.id = stores.city_id
            ORDER BY chains.name, cities.zip, stores.address ASC
        `;
        console.log(stores);

        return stores.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch stores.');
    }
}

export async function fetchFilteredInvoices(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const invoices = await sql<InvoiceTable>`
            SELECT
                invoices.id AS id,
                chains.name AS chain,
                invoices.date AS date
            FROM invoices
            JOIN stores ON stores.id = invoices.store_id
            JOIN chains ON chains.id = stores.chain_id
            WHERE
                chains.name ILIKE ${`%${query}%`} OR
                invoices.date ILIKE ${`%${query}%`}
            ORDER BY invoices.date ASC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return invoices.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoices.');
    }
}

export async function fetchInvoicesPages(query: string) {
    try {
        const count = await sql`
            SELECT COUNT(*)
            FROM invoices
            JOIN stores ON stores.id = invoices.store_id
            JOIN chains ON chains.id = stores.chain_id
            WHERE
                chains.name ILIKE ${`%${query}%`} OR
                invoices.date ILIKE ${`%${query}%`}
            `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
    }
}

export async function fetchInvoiceById(id: string) {
    try {
        const data = await sql<Invoice>`
            SELECT
                invoices.id,
                invoices.store_id,
                invoices.date
            FROM invoices
            WHERE invoices.id = ${id}
        `;

        const invoice = data.rows.map((invoice) => ({
            ...invoice,
        }));

        return invoice[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoice.');
    }
}

export async function fetchAllInvoices() {
    try {
        const invoices = await sql<Invoice>`
            SELECT
                invoices.id,
                invoices.store_id,
                invoices.date
            FROM invoices
            ORDER BY invoices.date ASC
        `;

        return invoices.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoices.');
    }
}

export async function fetchFilteredItemCategories(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    
    try {
        const itemCategories = await sql<ItemCategory>`
            SELECT
                item_categories.id,
                item_categories.name
            FROM
                item_categories
            WHERE
                item_categories.name ILIKE ${`%${query}%`}
            ORDER BY item_categories.name ASC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
        `;

        return itemCategories.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch item categories.');
    }
}

export async function fetchItemCategoriesPages(query: string) {
    try {
        const count = await sql`
            SELECT
                COUNT(*)
            FROM
                item_categories
            WHERE
                item_categories.name ILIKE ${`%${query}%`}
        `;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of item categories.');
    }
}

export async function fetchItemCategoryById(id: string) {
    try {
        const data = await sql<ItemCategory>`
            SELECT
                item_categories.id,
                item_categories.name
            FROM
                item_categories
            WHERE
                item_categories.id = ${id}
            ORDER BY
                item_categories.name ASC;
        `;

        const itemCategory = data.rows.map((itemCategory) => ({
            ...itemCategory,
        }));

        return itemCategory[0];
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch item categories.');
    }
}

export async function fetchAllItemCategories() {
    try {
        const itemCategories = await sql<ItemCategory>`
            SELECT *
            FROM item_categories
            ORDER BY item_categories.name ASC
        `;

        return itemCategories.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch item categories.');
    }
}

