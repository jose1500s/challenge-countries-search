import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Card({ countries }) {
    const { population, region, capital } = countries
    const {svg, alt} = countries.flags
    const formattedNumberDefault = population.toLocaleString();
    return (
        <div className="w-72 h-80 shadow-md py-2">
            <header className="h-1/2 w-full">
                <LazyLoadImage
                    className="h-full w-full object-cover"
                    src={svg}
                    alt={alt} />
            </header>
            <section className="p-5">
                <h2 className="text-xl font-extrabold mb-3">{countries.name.common}</h2>

                <p className="font-bold">Population: <span className="font-normal">{formattedNumberDefault}</span></p>
                <p className="font-bold">Region: <span className="font-normal">{region}</span></p>
                <p className="font-bold">Capital: <span className="font-normal">{capital}</span></p>
            </section>
        </div>
    )
}