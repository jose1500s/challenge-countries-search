import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Card({ countries }) {
    
    return (
        <div className="w-72 h-80 shadow-md py-2">
            <header className="h-1/2 w-full">
                <LazyLoadImage 
                    className="h-full w-full object-cover"
                    src={countries.flags.svg}
                    alt={countries.flags.alt} />
            </header>
            <section className="p-5">
                <h2 className="text-xl font-extrabold mb-3">{countries.name.common}</h2>

                <p className="font-bold">Population: <span className="font-normal">{countries.population}</span></p>
                <p className="font-bold">Region: <span className="font-normal">{countries.region}</span></p>
                <p className="font-bold">Capital: <span className="font-normal">{countries.capital}</span></p>
            </section>
        </div>
    )
}