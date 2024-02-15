import { useParams, Navigate, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import CardCountry from "../components/CardCountry"

export default function Details() {
    const params = useParams()
    const countryName = params.countryName

    const navigate = useNavigate()

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
            .then((response) => response.json())
            .then((data) => setData(data)).catch(error => {
                console.log('error: ', error)
            })
    }, [])



    return (
        <>
            <button className="m-10 disabled:opacity-50 transition inline-flex items-center justify-center space-x-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:z-10 shrink-0 saturate-[110%] border-slate-300 focus:ring-slate-500 bg-white text-slate-900 hover:bg-slate-50 px-4 py-1.5 text-lg font-medium rounded-md"
                onClick={() => navigate('/')}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#000000" d="M9.308 17.308L4 12l5.308-5.308l.707.708l-4.1 4.1H20v1H5.915l4.1 4.1z"></path></svg>
                <span>Back</span>
            </button>
            {data.length > 0 && data.map((country) => (
                <CardCountry
                    data={country}
                    key={country.name.common}
                />
            ))}
        </>
    )
}