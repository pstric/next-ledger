import { lusitana } from "@/app/ui/fonts";
import { fetchCities } from "@/app/lib/data";

export default function Page() {
    const cities = fetchCities();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Cities</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Zip</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {cities?.map((city) => (
                        <tr key={city.id}>
                            <td>{city.zip}</td>
                            <td>{city.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}