import React, { useState, useEffect } from 'react'
import personsService from './services/persons'

import Persons from './components/Persons'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'



const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [ errorMessage, setErrorMessage] = useState(null)

  const handleFilterChange = (event) => {
      setNameFilter(event.target.value)
  }



  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      }) 
    }, [])



  const addPerson = (event) => {
    event.preventDefault()
  
    let personObject ={
      name: newName,
      number: newPhoneNumber
    }    

    const checkPersonOccurrency = persons.filter(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
    console.log(checkPersonOccurrency)
    if (checkPersonOccurrency.length === 1) {
      console.log(checkPersonOccurrency[0].id)
       personObject = {...personObject, id: checkPersonOccurrency[0].id}
    }

    if (checkPersonOccurrency.map(person => person.name.toLocaleLowerCase).includes(newName.toLocaleLowerCase, 0)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {

        console.log(`${personObject.name} is added, changing number`)

        personsService
          .update(personObject.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(personOrig => personOrig.id !== personObject.id ? personOrig : returnedPerson))
          })
          .catch(error => {
            setPersons(persons.filter(person => person.id !== personObject.id))
            setErrorMessage({ message: `Information of ${personObject.name} has already been removed from server`, type: 'errorUnsuccessful'})
            setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
          })  
        setErrorMessage({ message: `${personObject.name}'s number changed to ${personObject.number}`, type: 'errorSuccessful'})
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      } 

      setNewName('')
      setNewPhoneNumber('')

    } else {
      console.log(`${personObject.name} is a new person, adding person to the database`)
      personsService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewPhoneNumber('')
        })
      setErrorMessage({
        message: `${personObject.name} and their number ${personObject.number} added to the phonebook`,
        type: 'errorSuccessful'
      })
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      }    
  }

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }

  
  const handlePhoneNumberAdd =(event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleDeletePerson = (id) => {
    const personOfId = persons.filter(person => person.id === id)[0]
    if (window.confirm(`Delete ${personOfId.name}?`)) {
      personsService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
          setErrorMessage({
            message: `${personOfId.name} and their number ${personOfId.number} deleted from the phonebook`,
            type: 'errorSuccessful'
          })
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      
    }
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification errorMessage={errorMessage} />
      <FilterForm onChange={handleFilterChange} nameFilter={nameFilter}/>
        
      <h3>add a new</h3>
      <PersonForm onSubmit={addPerson} name={newName} onNameChange={handleNameAdd} phoneNumber={newPhoneNumber} onNumberChange={handlePhoneNumberAdd} />
      <h2>Numbers</h2>
      <ul>
        <Persons
            persons={persons}
            nameFilter={nameFilter}
            handleDeletePerson={handleDeletePerson} />
      </ul>
    </div>
  )

  }

export default App