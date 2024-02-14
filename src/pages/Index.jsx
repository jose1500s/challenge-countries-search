import { useState, useEffect } from "react"
import Card from "../components/Card"
import InputSearch from '../components/InputSearch'

export default function Index() {

    const [countriesData, setCountriesData] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountriesData(data))
            .catch(error => {
                console.log('error ', error)
            })
    }, [])


    return (
        <>
            <InputSearch
                search={search}
                setSearch={setSearch}
                setCountriesData={setCountriesData}
            />
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
                {countriesData.length > 0 && countriesData.map((country) => (
                    <Card key={country.name.common} countries={country} />
                ))}
            </div>
        </>
    )
}