'use client';

import { ItemCategoryState, updateItemCategory } from "@/app/lib/actions";
import { Chain } from "@/app/lib/definitions";
import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/app/ui/button";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function EditChainForm({ itemCategory, }: { itemCategory: Chain; }) {
    const initialState: ItemCategoryState = { message: null, errors: {} };
    const updateItemCategoryWithId = updateItemCategory.bind(null, itemCategory.id);
    const [state, formAction] = useActionState(updateItemCategoryWithId, initialState);
  
      return (
        <form action={formAction} aria-describedby="form-error">
            <input type="hidden" name="id" value={itemCategory.id} />
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Enter Item Category Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                defaultValue={itemCategory.name}
                                placeholder="Enter Item Category Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="name-error"
                            />
                            <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="name-error" aria-live="polite"aria-atomic="true">
                            {state.errors?.name &&
                                state.errors.name.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id="form-error" aria-live="polite"aria-atomic="true">
                    {state.errors &&
                        <p className="mt-2 text-sm text-red-500" key={state.message}>
                            {state.message}
                        </p>
                    }
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/dashboard/itemCategories"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Edit Item Category</Button>
            </div>
        </form>
    );
}