import { makeExecutableSchema } from 'graphql-tools';

const Users: any[] = [
  {
    id: 1,
    name: 'Jon',
    email: 'jon@email.com'
  },
  {
    id: 2,
    name: 'Guelfi',
    email: 'guelfi@email.com'
  },
];

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    allUsers: [User]!
  }
`;

const resolvers = {
  Query: {
    allUsers: () => Users
  }
};

export default makeExecutableSchema({ typeDefs, resolvers });