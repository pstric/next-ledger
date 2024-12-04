import Form from "@/app/ui/invoices/edit-form";
import { fetchAllStores, fetchInvoiceById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const [invoice, stores] = await Promise.all([
        fetchInvoiceById(id),
        fetchAllStores(),
    ]);

    if (!invoice) {
        console.log('No invoice!');
        return null;
    } else {
        console.log(invoice);
    }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form invoice={invoice} stores={stores} />
        </main>
    );
}