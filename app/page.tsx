import Image from "next/image";
import Link from "next/link";
import { promises as fs } from 'fs';

export default async function Home(props: {
  searchParams?: Promise<{
    country?: string;
    region?: string;
  }>;
}) {
  const file = await fs.readFile(process.cwd() + '/data.json', 'utf8');
  const data = JSON.parse(file);
  const searchParam = await props.searchParams;
  const countries = data;
  let selectedCountries = countries.filter((country: {name :string;
                                        population: string;
                                        capital: string;
                                        region: string;
                                        flags: {png: string}} ) => {
                                          if (!searchParam || !searchParam.country) return true;
                                          return country.name.toLowerCase().includes(searchParam.country.toLowerCase());
                                        })

  selectedCountries = selectedCountries.filter((country: {name : {common: string};
                                        population: string;
                                        capital: string;
                                        region: string;
                                        flags: {png: string}} ) => {
                                          if (!searchParam || !searchParam.region) return true;
                                          return country.region.toLowerCase().includes(searchParam.region.toLowerCase());
                                        })
  return (
    <div className="grid max-w-[90%] gap-12 mx-auto lg:grid-cols-4 mt-8">
      {selectedCountries.map((country: {name :string;
                                        population: string;
                                        region: string;
                                        capital: string;
                                        flags: {png: string}}) => 
      {
        return (
          <Link key={country.name} href={`/${country.name}`}>
            <div className="grid bg-white rounded-2xl shadow-xl">
              <Image className="rounded-t-2xl w-full h-40 max-lg:w-full" src={country.flags.png} alt={`${country.name} flag image`} width={300} height={200}></Image>
              <div className="grid px-4 py-6">
                <h2 className="font-bold mb-4 text-xl">{country.name}</h2>
                <p><span className="font-bold">Population:</span> {country.population}</p>
                <p><span className="font-bold">Region:</span> {country.region}</p>
                <p><span className="font-bold">Capital:</span> {country.capital}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
