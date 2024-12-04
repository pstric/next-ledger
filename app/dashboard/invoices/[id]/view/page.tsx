import Form from "@/app/ui/invoices/edit-form";
import { fetchAllStores, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";


export default async function Page(props: { params: Promise<{ id: string }>}) {
    console.log('No invoice!');
    const params = await props.params;
    const id = params.id;
    const [invoice, stores] = await Promise.all([
        fetchInvoiceById(id),
        fetchAllStores(),
    ]);

    if (!invoice) {
        return null;
    }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'View Invoice',
                        href: `/dashboard/invoices/${id}/view`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoice} stores={stores} />
        </main>
    );
}