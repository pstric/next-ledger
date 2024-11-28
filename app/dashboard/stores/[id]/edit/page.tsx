import Form from "@/app/ui/stores/edit-form";
import { fetchAllChains, fetchAllCities, fetchStoreById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const [store, chains, cities] = await Promise.all([
        fetchStoreById(id),
        fetchAllChains(),
        fetchAllCities(),
    ]);

    if (!store) {
        return null;
    }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Stores', href: '/dashboard/stores' },
                    {
                        label: 'Edit Store',
                        href: `/dashboard/stores/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form store={store} chains={chains} cities={cities} />
        </main>
    );
}