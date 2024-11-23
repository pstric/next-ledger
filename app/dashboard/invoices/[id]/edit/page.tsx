import { fetchInvoiceById } from "@/app/lib/data";

export default function Page(id: string) {
    const invoice = fetchInvoiceById(id);

    return (
        <div>Edit invoice: {invoice.id}</div>
    );
}