import Image from "next/image";

export default async function Home() {
  const countries = await (await fetch("https://restcountries.com/v3.1/all")).json();
  const start = Math.random() * (countries.length - 9);
  const selectedCountires = countries.slice(start, start + 8);
  console.log(selectedCountires);

  return (
    <div className="grid max-w-[90%] gap-12 mx-auto lg:grid-cols-4 mt-8">
      {selectedCountires.map((country: {name : {common: string};
                                        population: string;
                                        continents: string;
                                        capital: string;
                                        flags: {png: string}}) => 
      {
        return (
          <div key={country.name.common} className="grid bg-white rounded-2xl shadow-xl">
            <Image className="rounded-t-2xl w-full h-40 max-lg:w-full" src={country.flags.png} alt={`${country.name.common} flag image`} width={300} height={200}></Image>
            <div className="grid px-4 py-6">
              <h2 className="font-bold mb-4 text-xl">{country.name.common}</h2>
              <p><span className="font-bold">Population:</span> {country.population}</p>
              <p><span className="font-bold">Region:</span> {country.continents[0]}</p>
              <p><span className="font-bold">Capital:</span> {country.capital?.[0]}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
