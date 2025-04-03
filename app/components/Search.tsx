"use client"

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function Search() {
    const inputField = useRef(null);
    const selectField = useRef(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    function handleSubmit() {
        const selectValue = (selectField.current as unknown as HTMLSelectElement).value;
        const inputValue = (inputField.current as unknown as HTMLInputElement).value;
        const params = new URLSearchParams(searchParams);
        if (inputValue) {
            params.set("country", inputValue);
        }
        else {
            params.delete("country");
        }
        if (selectValue) {
            params.set("region", selectValue);
        }
        else {
            params.delete("region");
        }
        const newUrl = `${pathname}?${params.toString()}`;
        router.replace(newUrl);

    }

    function handleSelectionChange() {
        handleSubmit();
    }

    function handleInputChange() {
        handleSubmit();
    }

    return(
        <form className="max-w-[90%] mt-4 mx-auto flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between lg:items-center">
            <input ref={inputField} onChange={handleInputChange} type="text" name="nameSearch" 
            placeholder="Search for a country"
            aria-label="Country name"
            className="text-dark-gray block w-full lg:w-100 pl-8 py-2 bg-white rounded shadow-xl" 
            />
            <select name="region" ref={selectField} id="" onChange={handleSelectionChange} aria-label="Region name" className="w-max py-2 px-6 bg-white rounded shadow-xl">
                <option value="" disabled selected hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}