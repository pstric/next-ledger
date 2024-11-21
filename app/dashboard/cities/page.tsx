import { lusitana } from "@/app/ui/fonts";
import { fetchCities } from "@/app/lib/data";
import ViewCity from "@/app/ui/cities/buttons/view";
import EditCity from "@/app/ui/cities/buttons/edit";
import { DeleteCity } from "@/app/ui/cities/buttons/delete";

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
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {cities?.map((city) => (
                        <tr key={city.id} className="w-full">
                            <td>{city.zip}</td>
                            <td>{city.name}</td>
                            <td><ViewCity id={city.id} /></td>
                            <td><EditCity id={city.id} /></td>
                            <td><DeleteCity id={city.id} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}