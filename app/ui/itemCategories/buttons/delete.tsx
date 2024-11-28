import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteItemCategory } from "@/app/lib/actions";

export function DeleteItemCategory({ id }: { id: string }) {
    const deleteItemCategoryWithId = deleteItemCategory.bind(null, id);
  
    return (
      <form action={deleteItemCategoryWithId}>
        <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
}
  