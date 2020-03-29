import { client } from './client'

const person = {
    name: "Person 1",
    nickname: "nickname 1"
}
client.insert(person, (error, createdPerson) => {
    if (!error) {
        console.log('Person created successfully', createdPerson)
    } else {
        console.error(error)
    }
})
