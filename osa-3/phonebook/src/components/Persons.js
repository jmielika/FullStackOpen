import React from 'react'
import Person from './Person'


const Persons = ({ persons, nameFilter, i, handleDeletePerson}) => {
    const filterNames = (arr, arg) => arr.filter(person => person.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1)

    return (
        <ul>
            {filterNames(persons, nameFilter).map(person => {
                return <Person  
                            key={person.id} 
                            id={person.id}
                            name={person.name}
                            number={person.number}
                            handleDeletePerson={() => handleDeletePerson(person.id)}
                        />
            })}
        </ul>
    )
}

export default Persons