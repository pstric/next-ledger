import { fetchAllInvoices } from "@/app/lib/data";

export default function Page() {
    const invoices = fetchAllInvoices();
    // return <p>Invoices Page</p>;
    return (
        <div className="bg-gray-50 rounded-lg">
            <table className="table min-w-full text-gray-900">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Store</th>
                        <th>Amount</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {invoices?.map((invoice) => (
                        <tr key={invoice.id}>
                            <td>{invoice.date}</td>
                            <td>{invoice.store}</td>
                            <td>{invoice.amount}</td>
                            <td><a href={`/dashboard/invoices/${invoice.id}/view`}>View</a></td>
                            <td><a href={`/dashboard/invoices/${invoice.id}/edit`}>Edit</a></td>
                            <td><a href={`/dashboard/invoices/${invoice.id}/delete`}>Delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}