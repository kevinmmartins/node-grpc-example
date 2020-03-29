import grpc from 'grpc'
import { PEOPLE } from './constants'

const personProto = grpc.load('person.proto')
const server = new grpc.Server()
server.addService(personProto.PersonService.service, {
    list: (_, callback) => {
        callback(null, PEOPLE)
    },
})
server.bind('127.0.0.1:4000', grpc.ServerCredentials.createInsecure())
console.log('Server running at http://127.0.0.1:4000')
server.start()
