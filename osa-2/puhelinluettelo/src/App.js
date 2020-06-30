import React, { useState } from 'react'

const App = (props) => {
  const [ persons, setPersons] = useState(props.persons) 
  const [ newName, setNewName ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')

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

    console.log(persons)
   
    
    //setNameFilter('')
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

  

  const filterNames = (arr, arg) => {
    return arr.filter(person => person.name.toLowerCase().indexOf(arg.toLowerCase()) !== -1)
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
    //filteredPersons = persons.filter(person => person.name.toLowerCase().indexOf(nameFilter.toLowerCase()))

  }

 //const filteredPersons = !nameFilter ? persons : persons.filter(person => person.name.tolocaleLowerCase().includes(nameFilter.toLocaleLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>filter shown with 
          <input  
                  type="text"
                  placeholder="Search name..."
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
        {nameFilter.toString() === ''
                    ? persons.map((person, name) => {
                          console.log('filtteröimätön')
                          return <Person key={name} person={person} /> 
                      })
                      
                    : filterNames( persons, nameFilter).map((person, name) => {
                          console.log('filtteröity')
                          return <Person key={name} person={person} />
                    })
        }
      </ul>
    </div>
  )

}

export default App