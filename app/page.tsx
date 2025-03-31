import Image from "next/image";

export default async function Home() {
  const countries = await (await fetch("https://restcountries.com/v3.1/all")).json();
  const selectedCountires = countries.slice(0,8);
  console.log(selectedCountires);
  console.log(countries);
  console.log(selectedCountires[0].flags.png);

  return (
    <div className="grid max-w-[80%] gap-4">
      {selectedCountires.map((country: {altSpellings : string;
                                        population: string;
                                        continents: string;
                                        capital: string;
                                        flags: {png: string}}) => 
      {
        return (
          <div key={country.altSpellings[1]} className="grid">
            <Image src={country.flags.png} alt={`${country.altSpellings[1]} flag image`} width={300} height={200}></Image>
            <div>
              <h2>{country.altSpellings[1]}</h2>
              <p>Population: {country.population}</p>
              <p>Region: {country.continents[0]}</p>
              <p>Capital: {country.capital[0]}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
