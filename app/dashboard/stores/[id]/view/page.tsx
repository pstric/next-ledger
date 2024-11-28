import { /* fetchAllChains, fetchAllCities, */ fetchStoreById } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const [ store/* , chains, cities */ ] = await Promise.all([
        fetchStoreById(id),
        // fetchAllChains(),
        // fetchAllCities(),
    ]);

    if (!store) {
        return null;
    }
    
    return (
        <div>
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>View Store</h1>
            </div>
            <div>
                {/* <span>{store?.name}</span> */}
            </div>
        </div>
    );
}