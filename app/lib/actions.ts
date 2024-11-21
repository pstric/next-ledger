'use server';

export async function deleteCity(id: string) {
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
