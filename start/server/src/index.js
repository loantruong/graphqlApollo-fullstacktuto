const { ApolloServer } = require("apollo-server");
import { typeDefs } from '../../../final/client/src/resolvers';

const server = new ApolloServer({typeDefs});