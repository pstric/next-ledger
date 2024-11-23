/* import { fetchCityById } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";
 */
/* export default function Page() {
    return (<p>Edit City</p>);
}
 */
/* export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const city = fetchCityById(id);

    if (!city) {
        return null;
    }
    
    return (
        <div>
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Edit City</h1>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Zip</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{city?.zip}</td>
                            <td>{city?.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
} */