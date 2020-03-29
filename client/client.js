import grpc from 'grpc'

const PERSON_PROTO_PATH = '../person.proto'
const PersonService = grpc.load(PERSON_PROTO_PATH).PersonService
export const client = new PersonService('localhost:4000',
    grpc.credentials.createInsecure())
