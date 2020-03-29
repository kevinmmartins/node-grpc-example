import { client } from './client'

client.list({}, (error, people) => {
    if (!error) {
        console.log('Success ! Fetch people list')
        console.log(people)
    } else {
        console.error(error)
    }
})
