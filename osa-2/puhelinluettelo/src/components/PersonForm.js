import React from 'react'

const PersonForm = ({onSubmit, name, onNameChange, phoneNumber, onNumberChange}) => {

    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input 
                value={name}
                onChange={onNameChange} />
            </div>
            <div>
                number: <input 
                value={phoneNumber}
                onChange={onNumberChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}
export default PersonForm