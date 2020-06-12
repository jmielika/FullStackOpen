import React, { useState } from 'react'

const App = (props) => {
  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber] = useState('')

  const addToPersonsAndFiltered = (personObject) => {
    setPersons(persons.concat(personObject))
    setFilteredPersons(filteredPersons.concat(personObject))
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
    : addToPersonsAndFiltered(personObject)

    //setFilteredPersons(filterNames(persons, nameFilter))

    console.log(persons)
   
    setNameFilter('')
    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }

  const Person = (props) => {
    return (
    <li>{props.person.name} {props.person.number}</li>
    )
  }

  const handlePhoneNumberAdd =(event) => {
    setNewPhoneNumber(event.target.value)
  }

  const [filteredPersons, setFilteredPersons] = useState([...persons])

  const filterNames = (arr, arg) => {
    return arr.filter(person => person.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1)
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
    setFilteredPersons(filterNames(persons, event.target.value))
    //filteredPersons = persons.filter(person => person.name.toLowerCase().indexOf(nameFilter.toLowerCase()))

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>filter shown with 
          <input  
                  value={nameFilter}
                  onChange={handleFilterChange} />
        </div>
        <h3>add a new</h3>
          <div>
            name: <input 
              value={newName}
              onChange={handleNameAdd} />
          </div>
          <div>
            number: <input 
              value={newPhoneNumber}
              onChange={handlePhoneNumberAdd} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person, name) => {
          //console.log(person)
          return <Person key={name} person={person} />
        })}
      </ul>
    </div>
  )

}

export default App