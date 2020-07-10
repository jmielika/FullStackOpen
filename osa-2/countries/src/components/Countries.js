import React from 'react'
import Country from './Country'





const FilteredCountries = ({ countries, countryFilter, showStats, setShowStats }) => {
    const filteredCountries = filterCountries(countries, countryFilter)
    return(
             <ul>
            {filteredCountries.map((country) => {
                return <Country key={country.alpha3code} country={country} />
                })
            }
          </ul>
    )
}



const filterCountries = (countries, countryFilter) => {
    return countries.filter(country => country.name.toLowerCase().indexOf(countryFilter.toLowerCase()) !== -1)
}



const Countries = ({countries, countryFilter}) => {


    if (filterCountries(countries, countryFilter).length > 10 || countries === null || countries.length === 0 ) return ( <p>Too many matches, specify another filter</p>)
    return ( <FilteredCountries countries={countries} countryFilter={countryFilter} />)
}

export default Countries