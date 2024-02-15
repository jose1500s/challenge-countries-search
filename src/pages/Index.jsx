import { useState, useEffect } from "react"
import Card from "../components/Card"
import InputSearch from '../components/InputSearch'

export default function Index() {

    const [countriesData, setCountriesData] = useState([])
    const [search, setSearch] = useState('')
    const [filteredCountries, setFilteredCountries] = useState(countriesData)

    const [region, setRegion] = useState('')

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

    const handleSelect = (e) => {
        setRegion(e.target.value)
    }

    useEffect(() => {
        if (!region) return; //evitar que se ejecute la llamada si region no tiene nada
        if(region === 'Select') return setFilteredCountries(countriesData)
        fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then((response) => response.json())
            .then((data) => setFilteredCountries(data))
            .catch(error => {
                console.log('error ', error)
            })
    }, [region])

   

    return (
        <>
            <div className="flex justify-between items-center">
                <InputSearch
                    search={search}
                    setSearch={setSearch}
                    setFilteredCountries={setFilteredCountries}
                    countriesData={countriesData}
                />
                <div className="space-y-0.5 w-36 mr-12">
                    <label htmlFor="basic" className="text-base font-medium text-slate-500">Filter by region</label>
                    <select id="basic" className="block w-full rounded-md p-1 text-lg transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:opacity-75 truncate undefined border-slate-300"
                    onChange={handleSelect}
                    >
                        <option defaultValue="">Select</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
                {filteredCountries.length > 0 && filteredCountries.map((country) => (
                    <Card key={country.name.common} countries={country} />
                ))}
            </div>
        </>
    )
}