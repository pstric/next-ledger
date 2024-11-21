import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteCity } from "@/app/lib/actions";

export function DeleteCity({ id }: { id: string }) {
    const deleteCityWithId = deleteCity.bind(null, id);
  
    return (
      <form action={deleteCityWithId}>
        <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </button>
      </form>
    );
  }
  