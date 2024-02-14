import { useRef } from "react"

export default function InputSearch({ search, setSearch, setCountriesData}) {
    
    const searchRef = useRef()

    const handleChange = (e) => {
        setSearch(e.target.value)
        filterCountries(search)
    }

    const filterCountries = (countryName) => {
        searchRef.current && clearTimeout(searchRef.current)
        
        searchRef.current = setTimeout(() => {
            fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => response.json())
            .then((data) => setCountriesData(data))
            .catch(error => {
                console.log('error: ', error)
            })
        }, 350)
    }

    return (
        <div className="w-1/3 mt-5 ml-10 relative">
            <label htmlFor="Search" className="sr-only"> Search </label>

            <input
                type="text"
                id="Search"
                placeholder="Search for..."
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 p-2 shadow-sm sm:text-xl"
                value={search}
                onChange={handleChange}
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </span>
        </div>
    )
}