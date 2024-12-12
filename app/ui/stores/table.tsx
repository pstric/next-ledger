import { fetchFilteredStores } from "@/app/lib/data";
import EditStore from "./buttons/edit";
// import { DeleteStore } from "./buttons/delete";
import ViewStore from "./buttons/view";

export default async function StoresTable({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    if (query == null && currentPage == null) {
        console.log('');
    }
    const stores = await fetchFilteredStores(query, currentPage);

    return (
        <>
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {stores?.map((store) => (
              <div
                key={store.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{store.chain}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {store.city}
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-medium">
                      {store.address}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <ViewStore id={store.id} />
                    <EditStore id={store.id} />
                    {/* <DeleteStore id={store.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Chain
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  City
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Address
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {stores?.map((store) => (
                <tr
                  key={store.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{store.chain}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {store.city}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {store.address}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewStore id={store.id} />
                      <EditStore id={store.id} />
                      {/* <DeleteStore id={store.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
        </>
    );
}