import React from 'react'

const Filter = ({ countries, countryFilter, onChange }) => {
    return (<input type="text" placeholder="Search country.." value={countryFilter} onChange={onChange} />)
}

export default Filter