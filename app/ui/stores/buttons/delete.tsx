import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteStore } from "@/app/lib/actions";

export function DeleteStore({ id }: { id: string }) {
    const deleteStoreWithId = deleteStore.bind(null, id);
  
    return (
      <form action={deleteStoreWithId}>
        <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
}
  