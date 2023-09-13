

const SearchBar=()=>{
    return(
        <>
        <div className="search-bar ">
            <input className="search w-6 h-4" type="text" placeholder="Search"/>
            <button type="submit"></button>
            </div>
        </>
    )
}

console.log(<SearchBar/>)

export default SearchBar;