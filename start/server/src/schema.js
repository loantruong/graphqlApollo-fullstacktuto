const { gql } = require('apollo-server');
import Launch from '../../client/src/pages/launch';

const typeDefs = gql`

  type Launch {
    id: ID! 
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String! 
    trips: [Launch]! #array cannot be null, but it can be empty ([Launch!]! -> cannot be null or empty)
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch #return a single Launch that correspondes to id argument
    me: User
  }

  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String #login token
  }

  #TripUpdateResponse must contains: 
  type TripUpdateResponse {
    success: Boolean!
    message: String
    lauches: [Launch] #array of modification by mutation
  }

`;

module.exports = typeDefs;
