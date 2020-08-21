import axios from 'axios'
const baseUrl = 'https://tranquil-sands-81334.herokuapp.com/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    console.log(`Päivitetään id ${id} osoitteessa "${baseUrl}/${id}"`)
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deletePerson = (id) => {
    console.log(`Poistetaan id ${id} osoitteessa "${baseUrl}/${id}"`)
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, update, deletePerson }