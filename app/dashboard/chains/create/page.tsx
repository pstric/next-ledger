import Breadcrumbs from "@/app/ui/breadcrumbs";
import CreateChainForm from "@/app/ui/chains/create-form";

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Chains', href: '/dashboard/chains' },
                    {
                        label: 'Create Chain',
                        href: '/dashboard/chains/create',
                        active: true,
                    },
                ]}
            />
            <CreateChainForm />
        </main>
    );
}