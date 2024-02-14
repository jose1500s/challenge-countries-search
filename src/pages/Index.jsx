import { useState, useEffect } from "react"
import Card from "../components/Card"

export default function Index() {

    const [countriesData, setCountriesData] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => setCountriesData(data))
    }, [])


    return (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
            {countriesData.length > 0 && countriesData.map((country) => (
                <Card countries={country} />
            ))}
        </div>
    )
}