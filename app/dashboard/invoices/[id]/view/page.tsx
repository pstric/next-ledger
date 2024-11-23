import { fetchInvoiceById } from "@/app/lib/data";

export default function Page(id: string) {
    const invoice = fetchInvoiceById(id);
    return (
        <div>{`Invoice view: ${invoice.id}`}</div>
    );
}