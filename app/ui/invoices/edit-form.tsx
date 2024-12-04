'use client';

import Link from "next/link";
import { useActionState } from "react";
import { BuildingStorefrontIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { InvoiceState, updateInvoice } from "@/app/lib/actions";
import { Invoice, StoreTable } from "@/app/lib/definitions";
import { Button } from "@/app/ui/button";

export default function EditInvoiceForm({
    invoice, 
    stores, 
}: {
    invoice: Invoice;
    stores: StoreTable[];
}) {
    const initialState: InvoiceState = { message: null, errors: {} };
    const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
    const [state, formAction] = useActionState(updateInvoiceWithId, initialState);
  
    return (
        <form action={formAction} aria-describedby="form-error">
            <input type="hidden" name="id" value={invoice.id} />
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Store */}
                <div className="mb-4">
                    <label htmlFor="store" className="mb-2 block text-sm font-medium">
                        Choose Store
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <select
                                id="store"
                                name="store_id"
                                defaultValue={invoice.store_id}
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="store-error"
                            >
                                <option value="" disabled>
                                    Select a store
                                </option>
                                {stores.map((store) => (
                                    <option key={store.id} value={store.id}>
                                        {store.city} {store.chain} {store.address}
                                    </option>
                                ))}
                            </select>
                            <BuildingStorefrontIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="store-error" aria-live="polite"aria-atomic="true">
                            {state.errors?.store_id &&
                                state.errors.store_id.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                    
                {/* Date */}
                <div className="mb-4">
                    <label htmlFor="date" className="mb-2 block text-sm font-medium">
                        Enter Purchase Date
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="date"
                                name="date"
                                type="string"
                                defaultValue={invoice.date}
                                placeholder="Enter Purchase Date"
                                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="date-error"
                            />
                            <CalendarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                        <div id="date-error" aria-live="polite"aria-atomic="true">
                            {state.errors?.date &&
                                state.errors.date.map((error: string) => (
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
                    href="/dashboard/invoices"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Edit Invoice</Button>
            </div>
        </form>
    );
}