import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ViewItemCategory({ id }: { id: string }) {
    return (
        <Link
            href={`/dashboard/itemCategories/${id}/view`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <EyeIcon className="w-5" />
        </Link>
    );
}