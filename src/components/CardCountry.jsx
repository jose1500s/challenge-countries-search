export default function CardCountry({ data }) {
    const population = data.population
    const formatedPopulation = population.toLocaleString();
    const nativeName = Object.values(data.name.nativeName).find(name => name.common);
    const currencies = Object.values(data.currencies).map(currency => currency.name)
    const languages = Object.values(data.languages).map(language => language).join(', ')
    return (
        <>
            <div className="flex items-center justify-center gap-10 w-full">
                <section className="h-full w-2/6">
                    <img
                        className="h-full object-contain"
                        src={data.flags.svg}
                        alt={data.flags.alt}
                    />
                </section>
                <section className="grid grid-cols-2 gap-x-10">
                    <div className="">
                        <h2 className="text-3xl font-bold py-1">{data.name.common}</h2>
                        <p className="font-bold text-lg py-1">Native Name: <span className="font-normal">{nativeName ? nativeName.common : 'N/A'}</span></p>
                        <p className="font-bold text-lg py-1">Population: <span className="font-normal">{formatedPopulation}</span></p>
                        <p className="font-bold text-lg py-1">Region: <span className="font-normal">{data.region}</span></p>
                        <p className="font-bold text-lg py-1">Sub Region: <span className="font-normal">{data.subregion}</span></p>
                    </div>
                    <div className="mt-10">
                        <p className="font-bold text-lg py-1">Top Level Domain: <span className="font-normal">{data.tld}</span></p>
                        <p className="font-bold text-lg py-1">Currencies: <span className="font-normal">{currencies}</span></p>
                        <p className="font-bold text-lg py-1">Languages: <span className="font-normal">{languages}</span></p>

                    </div>
                    <div className="mt-10">
                        <h3 className="font-bold text-lg">Border Countries:</h3>
                        <div className="flex gap-2">
                            {data.borders.length > 0 ? data.borders.map((border) => (
                                <p
                                    key={border}
                                    className="bg-slate-400 text-white font-bold px-3 py-1 rounded-md"
                                >
                                    {border}
                                </p>
                            )) : <p className="text-slate-600">No border countries</p>}
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}