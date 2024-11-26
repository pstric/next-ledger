import { fetchChainById } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const chain = await fetchChainById(id);

    if (!chain) {
        return null;
    }
    
    return (
        <div>
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>View Chain</h1>
            </div>
            <div>
                <span>{chain?.name}</span>
            </div>
        </div>
    );
}