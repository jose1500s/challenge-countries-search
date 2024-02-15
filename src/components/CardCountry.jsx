export default function CardCountry({ data }) {
    const population = data.population
    const formatedPopulation = population.toLocaleString();
    console.log(data)
    return (
        <div className="flex justify-center gap-10 w-full">
            <section className="h-full w-2/6">
                <img
                    className="h-full object-contain"
                    src={data.flags.svg}
                    alt={data.flags.alt}
                />
            </section>
            <section className="flex gap-14">
                <div>
                    <h2 className="text-3xl font-bold py-1">{data.name.common}</h2>
                    <p className="font-bold text-lg py-1">Native Name: <span className="font-normal">{data.name.nativeName.eng.official}</span></p>
                    <p className="font-bold text-lg py-1">Population: <span className="font-normal">{formatedPopulation}</span></p>
                    <p className="font-bold text-lg py-1">Region: <span className="font-normal">{data.region}</span></p>
                    <p className="font-bold text-lg py-1">Sub Region: <span className="font-normal">{data.subregion}</span></p>
                </div>
                <div className="mt-10">
                    <p className="font-bold text-lg py-1">Top Level Domain: <span className="font-normal">{data.tld}</span></p>
                    {/* <p className="font-bold text-lg py-1">Currencies: <span className="font-normal">{currencies}</span></p> */}
                    
                </div>
            </section>
        </div>
    )
}