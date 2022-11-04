import { gql } from "apollo-server-micro";

//Object types represent a kind of object you can fetch from your API.

//To fetch data from a GrahQL API, you need to define a Query Object type. This is a type where you define an entry point of every GraphQL query. For each entry point, you define its arguments and its return type.

// The link query takes an argument id of type String and returns a Link. The id argument is required, and the response is non-nullable.
// The user query takes an argument id of type String and returns a User. The id argument is required, and the response is non-nullable.
// The users query returns an array of type User. The id argument is required. The response is non-nullable.

export const typeDefs = gql`
  type Link {
    id: String
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }

  type Query {
    links: [Link]!
    link(id: String!): Link!
    user(id: String!): User!
    users: [User]!
  }
`;
