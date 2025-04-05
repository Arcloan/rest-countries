import BackButton from "../components/backButton";
import Image from "next/image";
import dataCountry from "@/data.json";

export default async function Page(
    props: { params: Promise<{ country: string }> }
) {
    const data = dataCountry;
    const params = await props.params;
    const countryName = decodeURI(new URLSearchParams(params).get("country") as string);
    const countryData = data.filter((c : {name: string}) => c.name === countryName)[0];
    let borderCountries = countryData.borders?.map((borderCountry: string) => {
        return data.filter((c : {alpha2Code: string; alpha3Code: string}) => {
            return c.alpha2Code === borderCountry || c.alpha3Code === borderCountry;
        })
    });
    
    borderCountries = borderCountries?.slice(0, Math.min(5, borderCountries.length));
    
    return (
        <main className="bg-very-light-gray dark:bg-very-dark-blue dark:text-white">
            <BackButton></BackButton>
            <section className="max-w-[80%] mx-auto mt-16 grid lg:grid-cols-2 gap-12 items-center" aria-label="Country Description">
                <Image src={countryData.flags.png} className="w-full h-90" width={300} height={200} alt="Country flag"></Image>
                <div className="countryDetails grid gap-8 lg:grid-cols-2 h-max">
                    <h2 className="lg:col-span-2 h-max text-3xl font-bold">{countryData.name}</h2>
                    
                    <div className="grid gap-2">
                        <p><span className="font-bold">Native Name: </span>{countryData.nativeName}</p>
                        <p><span className="font-bold">Population: </span>{countryData.population}</p>
                        <p><span className="font-bold">Region: </span>{countryData.region}</p>
                        <p><span className="font-bold">Sub Region: </span>{countryData.subregion}</p>
                        <p><span className="font-bold">Capital: </span>{countryData.capital}</p>
                    </div>

                    <div className="grid gap-2 h-max">
                        <p><span className="font-bold">Top Level Domain: </span>{countryData.topLevelDomain[0]}</p>
                        <p><span className="font-bold">Currencies: </span>{countryData.currencies!.map((currency: {name: string}) => currency.name).join(",")}</p>
                        <p><span className="font-bold">Languages: </span>{countryData.languages.map((lang: {name: string}) => lang.name).join(",")}</p>
                    </div>

                    <div className="flex gap-4 max-lg:flex-col mb-12">
                        <p className="font-bold">Border Countries: </p>
                        <div className="basis-full lg:basis-auto flex gap-2 items-start">
                            {borderCountries?.map((borderCountry) => {
                                return (
                                    <div key={borderCountry[0].name} className="py-2 px-4 shadow-xl dark:bg-dark-blue">
                                        {borderCountry[0].name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}