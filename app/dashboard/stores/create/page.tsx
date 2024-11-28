import { fetchAllChains, fetchAllCities } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import CreateStoreForm from "@/app/ui/stores/create-form";

export default async function Page() {
    const [chains, cities] = await Promise.all([
        fetchAllChains(),
        fetchAllCities(),
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Stores', href: '/dashboard/stores' },
                    {
                        label: 'Create Store',
                        href: '/dashboard/stores/create',
                        active: true,
                    },
                ]}
            />
            <CreateStoreForm chains={chains} cities={cities} />
        </main>
    );
}