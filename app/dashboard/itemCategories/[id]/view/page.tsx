import { fetchItemCategoryById } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const itemCategory = await fetchItemCategoryById(id);

    if (!itemCategory) {
        return null;
    }
    
    return (
        <div>
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>View Item Category</h1>
            </div>
            <div>
                <span>{itemCategory?.name}</span>
            </div>
        </div>
    );
}