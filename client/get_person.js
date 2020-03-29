import { client } from './client'

client.list({}, (error, people) => {
    if (!error) {
        console.log(people)
    } else {
        console.error(error)
    }
})
