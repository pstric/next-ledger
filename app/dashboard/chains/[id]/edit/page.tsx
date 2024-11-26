import Form from "@/app/ui/chains/edit-form";
import { fetchChainById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const [chain] = await Promise.all([
        fetchChainById(id),
    ]);

    if (!chain) {
        return null;
    }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Chains', href: '/dashboard/chains' },
                    {
                        label: 'Edit Chain',
                        href: `/dashboard/chains/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form chain={chain} />
        </main>
    );
}