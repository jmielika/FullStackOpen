import React, { useState } from 'react'
import Persons from './components/Persons'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'


const App = (props) => {
  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')

  const handleFilterChange = (event) => {
      setNameFilter(event.target.value)
  }
  

  const addPerson = (event) => {
    event.preventDefault()
  
    const personObject ={
      name: newName,
      number: newPhoneNumber
    }    

    persons.map(person => person.name).includes(newName, 0)

        ? window.alert(`${newName} is already added to phonebook`)

        : setPersons(persons.concat(personObject))
   

    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }

  
  const handlePhoneNumberAdd =(event) => {
    setNewPhoneNumber(event.target.value)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm onChange={handleFilterChange} nameFilter={nameFilter}/>
        
      <h3>add a new</h3>
      <PersonForm onSubmit={addPerson} name={newName} onNameChange={handleNameAdd} phoneNumber={newPhoneNumber} onNumberChange={handlePhoneNumberAdd} />
      <h2>Numbers</h2>
      <ul>
        <Persons persons={persons} nameFilter={nameFilter}/>
      </ul>
    </div>
  )

}

export default App