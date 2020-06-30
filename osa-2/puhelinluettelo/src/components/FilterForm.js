import React from 'react'

const filterNames = (arr, arg) => {
    return arr.filter(person => person.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1)
  }

const FilterForm = (props) => {
    return (
        <div>

        </div>
    )
}


export default FilterForm