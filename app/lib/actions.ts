'use server';

export type CityState = {
    errors?: {
        zip?: string[];
        name?: string[];
    };
    message?: string | null;
};

export async function deleteCity(id: string) {
    if (id != null) {
        throw new Error('Failed to Delete City.');
    }
    throw new Error('Failed to Delete City.');
    
/*     try {
        await sql`DELETE FROM cities WHERE id = ${id}`;
    } catch (error) {
        return {
            message: `Database Error: Failed to Delete City. ${error}`,
        };
    }
    revalidatePath('/dashboard/cities');
 */}
