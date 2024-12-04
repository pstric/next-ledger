'use server';

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const CityFormSchema = z.object({
    id: z.string(),
    zip: z.string().length(4).transform((val) => {
        return parseInt(val, 10);
    }),
    // zip: z.coerce
    //     .number()
    //     .gt(0, { message: 'Please enter a number greater than 0.' }),
    name: z.string(),
});

const CreateCity = CityFormSchema.omit({ id: true, });

export type CityState = {
    errors?: {
        zip?: string[];
        name?: string[];
    };
    message?: string | null;
};

export async function createCity(prevState: CityState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateCity.safeParse({
        zip: formData.get('zip'),
        name: formData.get('name'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Create City.'
        };
    }

    // Prepare data for insertion into the database
    const { zip, name } = validatedFields.data;

    try {
        await sql`
            INSERT INTO cities (zip, name)
            VALUES (${zip}, ${name})
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Create City. ${error}`,
        };
    }

    revalidatePath('/dashboard/cities');
    redirect('/dashboard/cities');
}

export async function updateCity(id: string, prevState: CityState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateCity.safeParse({
        zip: formData.get('zip'),
        name: formData.get('name'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Update City.'
        };
    }

    // Prepare data for insertion into the database
    const { zip, name } = validatedFields.data;

    try {
        await sql`
            UPDATE cities
            SET zip = ${zip}, name = ${name}
            WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Update City. ${error}`,
        };
    }

    revalidatePath('/dashboard/cities');
    redirect('/dashboard/cities');
}

export async function deleteCity(id: string) {
    try {
        await sql`DELETE FROM cities WHERE id = ${id}`;
    } catch (error) {
        return {
            message: `Database Error: Failed to Delete City. ${error}`,
        };
    }
    revalidatePath('/dashboard/cities');
}

const ChainFormSchema = z.object({
    id: z.string(),
    name: z.string(),
});

const CreateChain = ChainFormSchema.omit({ id: true, });

export type ChainState = {
    errors?: {
        name?: string[];
    };
    message?: string | null;
};

export async function createChain(prevState: ChainState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateChain.safeParse({
        name: formData.get('name'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Create Chain.'
        };
    }

    // Prepare data for insertion into the database
    const { name } = validatedFields.data;

    try {
        await sql`
            INSERT INTO chains (name)
            VALUES (${name})
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Create Chain. ${error}`,
        };
    }

    revalidatePath('/dashboard/chains');
    redirect('/dashboard/chains');
}

export async function updateChain(id: string, prevState: ChainState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateChain.safeParse({
        name: formData.get('name'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Update Chain.'
        };
    }

    // Prepare data for insertion into the database
    const { name } = validatedFields.data;

    try {
        await sql`
            UPDATE chains
            SET name = ${name}
            WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Update Chain. ${error}`,
        };
    }

    revalidatePath('/dashboard/chains');
    redirect('/dashboard/chains');
}

export async function deleteChain(id: string) {
    try {
        await sql`DELETE FROM chains WHERE id = ${id}`;
    } catch (error) {
        return {
            message: `Database Error: Failed to Delete Chain. ${error}`,
        };
    }
    revalidatePath('/dashboard/chains');
}

const StoreFormSchema = z.object({
    id: z.string(),
    chain_id: z.string(),
    city_id: z.string(),
    address: z.string(),
});

const CreateStore = StoreFormSchema.omit({ id: true, });

export type StoreState = {
    errors?: {
        chain_id?: string[];
        city_id?: string[];
        address?: string[];
    };
    message?: string | null;
};

export async function createStore(prevState: StoreState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateStore.safeParse({
        chain_id: formData.get('chain_id'),
        city_id: formData.get('city_id'),
        address: formData.get('address'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Create Store.'
        };
    }

    // Prepare data for insertion into the database
    const { chain_id, city_id, address } = validatedFields.data;

    try {
        await sql`
            INSERT INTO stores (chain_id, city_id, address)
            VALUES (${chain_id}, ${city_id}, ${address})
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Create Store. ${error}`,
        };
    }

    revalidatePath('/dashboard/stores');
    redirect('/dashboard/stores');
}

export async function updateStore(id: string, prevState: StoreState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateStore.safeParse({
        chain_id: formData.get('chain_id'),
        city_id: formData.get('city_id'),
        address: formData.get('address'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Update Store.'
        };
    }

    // Prepare data for insertion into the database
    const { chain_id, city_id, address } = validatedFields.data;

    try {
        await sql`
            UPDATE stores
            SET chain_id = ${chain_id}, city_id = ${city_id}, address = ${address}
            WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Update Store. ${error}`,
        };
    }

    revalidatePath('/dashboard/stores');
    redirect('/dashboard/stores');
}

export async function deleteStore(id: string) {
    try {
        await sql`DELETE FROM stores WHERE id = ${id}`;
    } catch (error) {
        return {
            message: `Database Error: Failed to Delete Store. ${error}`,
        };
    }
    revalidatePath('/dashboard/stores');
}

const InvoiceFormSchema = z.object({
    id: z.string(),
    store_id: z.string(),
    date: z.string(),
});

const CreateInvoice = InvoiceFormSchema.omit({ id: true, });

export type InvoiceState = {
    errors?: {
        store_id?: string[];
        date?: string[];
    };
    message?: string | null;
};

export async function createInvoice(prevState: InvoiceState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateInvoice.safeParse({
        store_id: formData.get('store_id'),
        date: formData.get('date'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Create Invoice.'
        };
    }

    // Prepare data for insertion into the database
    const { store_id, date } = validatedFields.data;

    try {
        await sql`
            INSERT INTO invoices (store_id, date)
            VALUES (${store_id}, ${date})
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Create Invoice. ${error}`,
        };
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, prevState: InvoiceState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateInvoice.safeParse({
        store_id: formData.get('store_id'),
        date: formData.get('date'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Update Invoice.'
        };
    }

    // Prepare data for insertion into the database
    const { store_id, date } = validatedFields.data;

    try {
        await sql`
            UPDATE invoices
            SET store_id = ${store_id}, date = ${date}
            WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Update Invoice. ${error}`,
        };
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`;
    } catch (error) {
        return {
            message: `Database Error: Failed to Delete Invoice. ${error}`,
        };
    }
    revalidatePath('/dashboard/invoices');
}

const ItemCategoryFormSchema = z.object({
    id: z.string(),
    name: z.string(),
});

const CreateItemCategory = ItemCategoryFormSchema.omit({ id: true, });

export type ItemCategoryState = {
    errors?: {
        name?: string[];
    };
    message?: string | null;
};

export async function createItemCategory(prevState: ItemCategoryState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateItemCategory.safeParse({
        name: formData.get('name'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Create Item Category.'
        };
    }

    // Prepare data for insertion into the database
    const { name } = validatedFields.data;

    try {
        await sql`
            INSERT INTO item_categories (name)
            VALUES (${name})
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Create Item Category. ${error}`,
        };
    }

    revalidatePath('/dashboard/itemCategories');
    redirect('/dashboard/itemCategories');
}

export async function updateItemCategory(id: string, prevState: ItemCategoryState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = CreateChain.safeParse({
        name: formData.get('name'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing fields. Failed to Update Item Category.'
        };
    }

    // Prepare data for insertion into the database
    const { name } = validatedFields.data;

    try {
        await sql`
            UPDATE item_categories
            SET name = ${name}
            WHERE id = ${id}
        `;
    } catch (error) {
        return {
            message: `Database Error: Failed to Update Item Category. ${error}`,
        };
    }

    revalidatePath('/dashboard/itemCategories');
    redirect('/dashboard/itemCategories');
}

export async function deleteItemCategory(id: string) {
    try {
        await sql`DELETE FROM item_categories WHERE id = ${id}`;
    } catch (error) {
        return {
            message: `Database Error: Failed to Delete Item Category. ${error}`,
        };
    }
    revalidatePath('/dashboard/itemCategories');
}

