import { BsSearch } from "react-icons/bs"

function Search({className}) {
    return (
        <div className={`relative ${className}`}>
            <input
                autoComplete="off"
                className="w-full outline-none bg-[#f0f0f0] px-5 py-2 rounded-md"
                type="text"
                placeholder="Bạn cần tìm gì?"
            />
            <button className="absolute top-1/2 right-7 -translate-y-1/2 text-2xl cursor-pointer">
                <BsSearch />
            </button>
        </div>
    )
}

export default Search
