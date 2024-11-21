import { fetchCities } from "@/app/lib/data";
import EditCity from "./buttons/edit";
import { DeleteCity } from "./buttons/delete";
import ViewCity from "./buttons/view";

export default async function CitiesTable({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    const cities = fetchCities();

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
{/*                     <div className="md:hidden">
                        {cities?.map((city) => (
                            <div
                                key={city.id}
                                className="mb-2 w-full rounded-md bg-white p-4"
                            >
                                <div className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <p>{city.zip}</p>
                                    </div>
                                    <p className="text-sm text-gray-500">{city.name}</p>
                                </div>
                            </div>
                            <div className="flex w-full items-center justify-between pt-4">
                                <div></div>
                                <div></div>
                            </div>
                        ))}
                    </div> */}
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Zip
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Name
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {cities?.map((city) => (
                                <tr
                                    key={city.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        {city.zip}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {city.name}
                                    </td>
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex justify-end gap-3">
                                            <ViewCity id={city.id} />
                                            <EditCity id={city.id} />
                                            <DeleteCity id={city.id} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}