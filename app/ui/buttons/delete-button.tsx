import { TrashIcon } from "@heroicons/react/24/outline";

export function DeleteButton(/* {
    id,
    func,
}: {
    id: string;
    func: (id: string) => void;
} */) {
  
    return (
        <form /* action={func(id)} */>
            <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5" />
            </button>
        </form>
    );
}
  