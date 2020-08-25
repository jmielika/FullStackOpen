import React, { useState, useEffect } from 'react'
import peopleService from './services/people'

import People from './components/People'
import FilterForm from './components/FilterForm'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'



const App = () => {
  const [ people, setPeople] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhoneNumber, setNewPhoneNumber ] = useState('')
  const [ nameFilter, setNameFilter] = useState('')
  const [ errorMessage, setErrorMessage] = useState(null)

  const handleFilterChange = (event) => {
      setNameFilter(event.target.value)
  }



  useEffect(() => {
    peopleService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      }) 
    }, [])


  const updatePerson = (person) => {
    peopleService
          .update(person.id, person)
          .then(returnedPerson => {
            setPeople(people.map(personOrig => personOrig.id !== person.id ? personOrig : returnedPerson))
          })
          .catch(error => {
            error.response.data.error 
            ? setErrorMessage({ message: error.response.data.error, type: 'errorUnsuccessful' })
            : setErrorMessage({ message: `No data of ${person.name} on the server, deleting person`, type: 'errorUnsuccessful' })
            setTimeout(() => {
            setErrorMessage(null)
        }, 5000)
          })  
        setErrorMessage({ message: `${person.name}'s number changed to ${person.number}`, type: 'errorSuccessful'})
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)

      setNewName('')
      setNewPhoneNumber('')
  }


  const handleAddOrEditPerson = (event) => {
    event.preventDefault()
  

    let personObject ={
      name: '' + newName.trim().replace(/  +/g, ' '),
      number: '' + newPhoneNumber.trim().replace(/  +/g, ' ')
    }    

    

    const checkPersonOccurrency = people.filter(person => person.name.toLocaleLowerCase().trim().replace(/  +/g, ' ') === personObject.name.toLocaleLowerCase())
    
    if (checkPersonOccurrency.length > 0) {
       personObject = {...personObject, id: checkPersonOccurrency[0].id}
    
    if (window.confirm(`${personObject.name} has ${checkPersonOccurrency.length} entries in phonebook, want replace every entry of old number with a new one?`)) {
        checkPersonOccurrency.forEach(personToBeDeleted => {
          if (personToBeDeleted.id !== personObject.id) {
            peopleService
              .deletePerson(personToBeDeleted.id)
              .then(() => { setPeople(people.filter(person => personToBeDeleted.id !== person.id))
            })
          }
        })  
      updatePerson(personObject)
      setNewName('')
      setNewPhoneNumber('')        
    }
    } else {
        peopleService
          .create(personObject)
          .then(returnedPerson => {
            setPeople(people.concat(returnedPerson))
            setNewName('')
            setNewPhoneNumber('')
            setErrorMessage({
              message: `${personObject.name} and their number ${personObject.number} added to the phonebook`,
              type: 'errorSuccessful'
            })
          })
          .catch(error => {
            setErrorMessage({
            message: error.response.data.error,
            type: 'errorUnsuccessful'
            })
        })
      }
    setTimeout(() => {
    setErrorMessage(null)
    }, 5000)
  }  

  const handleNameAdd = (event) => {
    setNewName(event.target.value)
  }

  
  const handlePhoneNumberAdd =(event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleDeletePerson = (id) => {
    const personOfId = people.filter(person => person.id === id)[0]
    if (window.confirm(`Delete ${personOfId.name}?`)) {
      peopleService
        .deletePerson(id)
        .then(() => {
          setPeople(people.filter(person => person.id !== id))
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
      <PersonForm onSubmit={handleAddOrEditPerson} name={newName} onNameChange={handleNameAdd} phoneNumber={newPhoneNumber} onNumberChange={handlePhoneNumberAdd} />
      <h2>Numbers</h2>
      <ul>
        <People
            people={people}
            nameFilter={nameFilter}
            handleDeletePerson={handleDeletePerson} />
      </ul>
    </div>
  )

  }

export default App