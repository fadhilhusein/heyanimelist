"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();
    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            const keyword = searchRef.current.value;
            if (keyword !== '') {
                event.preventDefault();
                router.push(`/search/${keyword}`)
            }            
        }
    }

    return (
        <div className="relative">
            <input 
                placeholder="Search Anime"
                className="w-full p-2 rounded focus:ring focus:ring-slate-900 outline-none"
                ref={searchRef}
                onKeyUp={handleSearch}
            />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch