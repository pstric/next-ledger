'use client';

import { ChainState, createChain } from "@/app/lib/actions";
import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/app/ui/button";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function CreateChainForm() {
    const initialState: ChainState = { message: null, errors: {} };
    const createChainWithId = createChain.bind(null);
    const [state, formAction] = useActionState(createChainWithId, initialState);
  
      return (
        <form action={formAction} aria-describedby="form-error">
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Enter Chain Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="name"
                                name="name"
                                type="string"
                                defaultValue=""
                                placeholder="Enter Chain Name"
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
                    href="/dashboard/chains"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Create Chain</Button>
            </div>
        </form>
    );
}