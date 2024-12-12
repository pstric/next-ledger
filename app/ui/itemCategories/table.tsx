import { fetchFilteredItemCategories } from "@/app/lib/data";
// import { DeleteItemCategory } from "./buttons/delete";
import ViewItemCategory from "./buttons/view";
import EditItemCategory from "./buttons/edit";

export default async function ItemCategoriesTable({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    if (query == null && currentPage == null) {
        console.log('');
    }
    const itemCategories = await fetchFilteredItemCategories(query, currentPage);

    return (
        <>
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {itemCategories?.map((itemCategory) => (
              <div
                key={itemCategory.id}
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
                      {itemCategory.name}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <ViewItemCategory id={itemCategory.id} />
                    <EditItemCategory id={itemCategory.id} />
                    {/* <DeleteItemCategory id={itemCategory.id} /> */}
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
              {itemCategories?.map((itemCategory) => (
                <tr
                  key={itemCategory.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{itemCategory.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <ViewItemCategory id={itemCategory.id} />
                      <EditItemCategory id={itemCategory.id} />
                      {/* <DeleteItemCategory id={itemCategory.id} /> */}
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