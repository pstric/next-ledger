import { fetchFilteredChains } from "@/app/lib/data";
import { DeleteChain } from "./buttons/delete";
import ViewChain from "./buttons/view";
import EditChain from "./buttons/edit";

export default async function ChainsTable({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    if (query == null && currentPage == null) {
        console.log('');
    }
    const chains = await fetchFilteredChains(query, currentPage);

    return (
        <>
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {chains?.map((chain) => (
              <div
                key={chain.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                {/* <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="text-sm text-gray-500">{chain.zip}</p>
                  </div>
                </div> */}
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {chain.name}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <ViewChain id={chain.id} />
                    <EditChain id={chain.id} />
                    <DeleteChain id={chain.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {chains?.map((chain) => (
                <tr
                  key={chain.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{chain.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewChain id={chain.id} />
                      <EditChain id={chain.id} />
                      <DeleteChain id={chain.id} />
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