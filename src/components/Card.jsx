import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

export default function Card({ countries }) {
    const { population, region, capital } = countries
    const { svg, alt } = countries.flags
    const formattedNumberDefault = population.toLocaleString();
    return (
        <div className="w-72 h-80 shadow-md py-2 dark:bg-neutral-800 rounded-sm">
            <header className="h-1/2 w-full">
                <Link to={`/details/${countries.name.common}`} title='View Details'>
                    <LazyLoadImage
                        className="h-full w-full object-cover"
                        src={svg}
                        alt={alt} />
                </Link>
            </header>
            <section className="p-5">
                <h2 className="text-xl font-extrabold mb-3 dark:text-white">{countries.name.common}</h2>
                <p className="font-bold dark:text-white">Population: <span className="font-normal">{formattedNumberDefault}</span></p>
                <p className="font-bold dark:text-white">Region: <span className="font-normal">{region}</span></p>
                <p className="font-bold dark:text-white">Capital: <span className="font-normal">{capital}</span></p>
            </section>
        </div>
    )
}