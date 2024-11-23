'use client';

// import { CityState } from "@/app/lib/actions";
import { City } from "@/app/lib/definitions";

export default function EditCityForm({ city }: { city: City }) {
    // const initialState: CityState = { message: null, errors: {} };
    if (city == null) {
        console.log('');
    }
}