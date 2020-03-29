import grpc from 'grpc'
import { PEOPLE } from './constants'
import uuidv1 from 'uuid/v1'

const personProto = grpc.load('./server/person.proto')
const server = new grpc.Server()
server.addService(personProto.PersonService.service, {
    list: (_, callback) => {
        callback(null, PEOPLE)
    },
    insert: (call, callback) => {
        const person = call.request
        person.id = uuidv1()
        PEOPLE.push(person)
        callback(null, person)
    }
})
server.bind('127.0.0.1:4000', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:4000')
server.start()
