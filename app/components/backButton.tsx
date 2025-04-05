"use client"
import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter();
    return (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        <button onClick={(e) => router.back()} 
        className="relative dark:bg-dark-blue hover:cursor-pointer mt-12 ml-[10%] block w-max pl-12 py-2 pr-6 shadow-xl">
            <svg className="dark:fill-white w-4 h-4 absolute top-[50%] -translate-y-[35%] left-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
            Back
            </button>
    )
}