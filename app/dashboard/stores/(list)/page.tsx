import { lusitana } from "@/app/ui/fonts";
import { fetchStoresPages } from "@/app/lib/data";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import { CreateStore } from "@/app/ui/stores/buttons/create";
import StoresTable from "@/app/ui/stores/table";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchStoresPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Stores</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search stores..." />
                <CreateStore />
            </div>
            <StoresTable query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}