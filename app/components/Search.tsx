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
    const inputValue = new URLSearchParams(searchParams).get("country") ?? "";
    const selectValue = new URLSearchParams(searchParams).get("region") ?? "";

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

    if (pathname !== "/") {
        return null;
    }

    return(
        <form onSubmit={(e) => e.preventDefault()} className="max-w-[80%] mt-8 mx-auto flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between lg:items-center">
            <div className="relative">
                <input value={inputValue} ref={inputField} onChange={handleInputChange} type="text" name="nameSearch" 
                placeholder="Search for a country"
                aria-label="Country name"
                className="text-dark-gray block w-full lg:w-100 pl-12 py-2 bg-white rounded shadow-xl dark:bg-dark-blue dark:text-white" 
                />
                <svg className="fill-dark-gray h-4 w-4 absolute top-[50%] left-4 -translate-y-[50%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
            <select value={selectValue} name="region" ref={selectField} id="" onChange={handleSelectionChange} aria-label="Region name" className="w-max py-2 px-6 bg-white rounded shadow-xl dark:bg-dark-blue dark:text-white">
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