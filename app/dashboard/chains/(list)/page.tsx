import { lusitana } from "@/app/ui/fonts";
import { fetchChainsPages } from "@/app/lib/data";
import Search from "@/app/ui/search";
import Pagination from "@/app/ui/pagination";
import { CreateChain } from "@/app/ui/chains/buttons/create";
import ChainsTable from "@/app/ui/chains/table";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchChainsPages(query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Chains</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search chains..." />
                <CreateChain />
            </div>
            <ChainsTable query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}