import { lusitana } from "@/app/ui/fonts";
// import { fetchCities, fetchCitiesPages } from "@/app/lib/data";
import Search from "@/app/ui/search";
import { CreateCity } from "@/app/ui/cities/buttons/create";
import CitiesTable from "@/app/ui/cities/table";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    // const totalPages = fetchCitiesPages(query);

    // const cities = fetchCities();

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Cities</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search cities..." />
                <CreateCity />
            </div>
            <CitiesTable query={query} currentPage={currentPage} />
        </div>
    );
}