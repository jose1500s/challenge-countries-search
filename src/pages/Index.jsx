import { useState, useEffect } from "react"
import Card from "../components/Card"
import InputSearch from '../components/InputSearch'

export default function Index() {
    
    const [countriesData, setCountriesData] = useState([])
    const [search, setSearch] = useState('')
    const [filteredCountries, setFilteredCountries] = useState(countriesData)
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountriesData(data))
            .catch(error => {
                console.log('error ', error)
            })
    }, [])

    useEffect(() => {
        setFilteredCountries(countriesData);
    }, [countriesData]);

    return (
        <>
            <InputSearch
                search={search}
                setSearch={setSearch}
                setFilteredCountries={setFilteredCountries}
                countriesData={countriesData}
            />
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
                {filteredCountries.length > 0 && filteredCountries.map((country) => (
                    <Card key={country.name.common} countries={country} />
                ))}
            </div>
        </>
    )
}