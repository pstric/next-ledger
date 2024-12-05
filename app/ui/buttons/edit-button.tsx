import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function EditButton({ 
    id, 
    path,
    name,
}: { 
    id: string;
    path: string;
    name: string;
}) {
    return (
        <Link
            href={`/dashboard/${path}/${id}/edit`}
            className="rounded-md border p-2 hover:bg-gray-100"
        >
            <span className="hidden md:block">Create {name}</span>{' '}
            <PencilIcon className="w-5" />
        </Link>
    );
}