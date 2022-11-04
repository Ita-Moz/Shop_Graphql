function Tag({ children }) {
    return (
        <div>
            <a
                className="inline-block bg-slate-100 rounded-sm px-2 py-1 font-light text-[14px] "
                href="#"
            >
                {children}
            </a>
        </div>
    )
}

export default Tag
