'use client';

import { StoreState, updateStore } from "@/app/lib/actions";
import { Chain, City, Store } from "@/app/lib/definitions";
import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/app/ui/button";
import { BuildingLibraryIcon, BuildingStorefrontIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function EditStoreForm({
    store, 
    chains, 
    cities,
}: {
    store: Store;
    chains: Chain[];
    cities: City[];
}) {
    const initialState: StoreState = { message: null, errors: {} };
    const updateStoreWithId = updateStore.bind(null, store.id);
    const [state, formAction] = useActionState(updateStoreWithId, initialState);
  
    return (
        <form action={formAction} aria-describedby="form-error">
            <input type="hidden" name="id" value={store.id} />
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Chain */}
                <div className="mb-4">
                    <label htmlFor="chain" className="mb-2 block text-sm font-medium">
                        Choose Chain
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="chain"
                                name="chain_id"
                                defaultValue={store.chain_id}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="chain-error"
                            >
                                <option value="" disabled>
                                    Select a store
                                </option>
                                {chains.map((chain) => (
                                    <option key={chain.id} value={chain.id}>
                                        {chain.name}
                                    </option>
                                ))}
                            </select>
                            <BuildingStorefrontIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="chain-error" aria-live="polite"aria-atomic="true">
                            {state.errors?.chain_id &&
                                state.errors.chain_id.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                    
                {/* City */}
                <div className="mb-4">
                    <label htmlFor="city" className="mb-2 block text-sm font-medium">
                        Choose City
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="city"
                                name="city_id"
                                defaultValue={store.city_id}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="city-error"
                            >
                                <option value="" disabled>
                                    Select a city
                                </option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {`${city.zip} ${city.name}`}
                                    </option>
                                ))}
                            </select>
                            <BuildingLibraryIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="city-error" aria-live="polite"aria-atomic="true">
                            {state.errors?.city_id &&
                                state.errors.city_id.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                    
                {/* Address */}
                <div className="mb-4">
                    <label htmlFor="address" className="mb-2 block text-sm font-medium">
                        Enter Store Address
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="address"
                                name="address"
                                type="string"
                                defaultValue={store.address}
                                placeholder="Enter Store Address"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="address-error"
                            />
                            <HomeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="address-error" aria-live="polite"aria-atomic="true">
                            {state.errors?.address &&
                                state.errors.address.map((error: string) => (
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
                    href="/dashboard/stores"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Edit Store</Button>
            </div>
        </form>
    );
}