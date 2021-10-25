function Search() {
    return (
        <div className="flex bg-white p-6 ">
            <div>
                <input className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" placeholder="Type here"/>
            </div>
            <div>
                <button className=" py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ml-4">Search</button>
            </div>
        </div>
    )
}

export default Search
