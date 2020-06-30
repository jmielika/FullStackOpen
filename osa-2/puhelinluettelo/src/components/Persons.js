import React from 'react'

const Person = (props) => {
    return (
    <li>{props.person.name} {props.person.number}</li>
    )
  }

const addPerson = (event) => {
    event.preventDefault()
  
    const personObject ={
      name: newName,
      number: newPhoneNumber
    }

    console.log(persons)    

    persons.map(person => person.name).includes(newName, 0)
    ? window.alert(`${newName} is already added to phonebook`)
    : setPersons(persons.concat(personObject))

    
    

    //setFilteredPersons(filterNames(persons, nameFilter))

    console.log(persons)
   
    
    //setNameFilter('')
    setNewName('')
    setNewPhoneNumber('')
  }


const Persons = (props) => {
    return (
        <div>

        </div>
    )
}

export default Persons