import { lusitana } from "@/app/ui/fonts";
import { fetchItemCategoriesPages } from "@/app/lib/data";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import { CreateItemCategory } from "@/app/ui/itemCategories/buttons/create";
import ItemCategoriesTable from "@/app/ui/itemCategories/table";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchItemCategoriesPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Item Categories</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search item categories..." />
                <CreateItemCategory />
            </div>
            <ItemCategoriesTable query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}