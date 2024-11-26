import { fetchCityById } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const city = await fetchCityById(id);

    if (!city) {
        return null;
    }
    
    return (
        <div>
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>View City</h1>
            </div>
            <div>
                <span>{city?.zip}</span>
                <span>{city?.name}</span>
            </div>
        </div>
    );
}