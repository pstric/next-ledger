import { fetchAllStores } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import CreateInvoiceForm from "@/app/ui/invoices/create-form";

export default async function Page() {
    const [stores] = await Promise.all([
        fetchAllStores(),
    ]);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Invoices', href: '/dashboard/invoices' },
                    {
                        label: 'Create Invoice',
                        href: '/dashboard/invoices/create',
                        active: true,
                    },
                ]}
            />
            <CreateInvoiceForm stores={stores} />
        </main>
    );
}