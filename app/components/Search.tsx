"use client"

export default function Search() {
    return(
        <form className="max-w-[90%] mt-4 mx-auto flex flex-col max-lg:gap-4 lg:flex-row lg:justify-between lg:items-center">
            <input type="text" name="nameSearch" 
            placeholder="Search for a country"
            aria-label="Country name"
            className="text-dark-gray block w-full lg:w-100 pl-8 py-2 bg-white rounded shadow-xl" 
            />
            <select name="region" id="" aria-label="Region name" className="w-max py-2 px-6 bg-white rounded shadow-xl">
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