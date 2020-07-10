import React, { useState, useEffect } from 'react'

import Filter from './components/Filter'
import Countries from './components/Countries'

import axios from 'axios'

const App = () => {
  const [ countryFilter, setCountryFilter ] = useState('')
  const [ countries, setCountries ] = useState([])

  const handleFilterChange = (event) => {
    setCountryFilter(event.target.value)
  }

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(countries.concat(response.data))
      })
  }

  useEffect(hook, [])

  

  return (
    <div>
      find countries 
      <Filter countries={countries} countryFilter={countryFilter} onChange={handleFilterChange} />
      <Countries countries={countries} countryFilter={countryFilter} />
    </div>
  );
}

export default App;
