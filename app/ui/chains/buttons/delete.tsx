import { TrashIcon } from "@heroicons/react/24/outline";
// import { deleteChain } from "@/app/lib/actions";

export function DeleteChain({ id }: { id: string }) {
    // const deleteChainWithId = deleteChain.bind(null, id);
  
    return (
      <form /* action={deleteChainWithId} */>
        <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
}
  