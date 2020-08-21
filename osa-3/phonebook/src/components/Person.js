import React from 'react'

const Person = ({ name, number, handleDeletePerson }) => {

    return (
        <li>
            {name} {number}
            <button type="submit" onClick={handleDeletePerson}>delete</button>
        </li>)
}

export default Person