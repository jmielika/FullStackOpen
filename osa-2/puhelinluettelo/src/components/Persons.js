import React from 'react'
// import filterNames  from './FilterForm'

const Person = (props) => (<li>{props.person.name} {props.person.number}</li>)

const FilteredPersons = ({ persons, nameFilter}) => {
    return (
        <ul>
        {filterNames(persons, nameFilter).map((person, name) => <Person key={name} person={person} />)}
        </ul>)
}



const filterNames = (arr, arg) => arr.filter(person => person.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1)

const Persons = ({ persons, nameFilter}) => <FilteredPersons persons={persons} nameFilter={nameFilter} />

export default Persons