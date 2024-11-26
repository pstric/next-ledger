import Form from "@/app/ui/cities/edit-form";
import { fetchCityById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const [city] = await Promise.all([
        fetchCityById(id),
    ]);

    if (!city) {
        return null;
    }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Cities', href: '/dashboard/cities' },
                    {
                        label: 'Edit City',
                        href: `/dashboard/cities/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form city={city} />
        </main>
    );
}