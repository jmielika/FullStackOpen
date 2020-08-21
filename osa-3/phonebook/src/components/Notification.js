import React from 'react'

const Notification = ({ errorMessage }) => {
    if (errorMessage === null) {
        return null
    }

    return (
        <div className={errorMessage.type}>
            {errorMessage.message}
        </div>
    )
}

export default Notification