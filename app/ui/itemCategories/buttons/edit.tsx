import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EditItemCategory({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/itemCategories/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <PencilIcon className="w-5" />
        </Link>
    );
}