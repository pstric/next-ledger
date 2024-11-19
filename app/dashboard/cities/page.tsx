import { lusitana } from "@/app/ui/fonts";
import { fetchCities } from "@/app/lib/data";

export default function Page() {
    const cities = fetchCities();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Cities</h1>
            </div>
            <table className="table min-w-full">
                <thead className="text-left">
                    <tr>
                        <th>Zip</th>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cities?.map((city) => (
                        <tr key={city.id} className="w-full">
                            <td>{city.zip}</td>
                            <td>{city.name}</td>
                            <td>View</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}