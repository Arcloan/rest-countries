"use client"
import { useRouter } from "next/navigation"

export default function BackButton() {
    const router = useRouter();
    return (
        <button onClick={(e) => router.back()} className="hover:cursor-pointer mt-12 ml-[10%] block w-max pl-8 py-2 px-4 shadow-xl">Back</button>
    )
}