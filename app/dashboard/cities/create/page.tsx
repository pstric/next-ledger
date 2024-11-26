import Breadcrumbs from "@/app/ui/breadcrumbs";
import CreateCityForm from "@/app/ui/cities/create-form";

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Cities', href: '/dashboard/cities' },
                    {
                        label: 'Create City',
                        href: '/dashboard/cities/create',
                        active: true,
                    },
                ]}
            />
            <CreateCityForm />
        </main>
    );
}