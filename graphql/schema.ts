import { gql } from "apollo-server-micro";

//Object types represent a kind of object you can fetch from your API.

//To fetch data from a GrahQL API, you need to define a Query Object type. This is a type where you define an entry point of every GraphQL query. For each entry point, you define its arguments and its return type.

// The link query takes an argument id of type String and returns a Link. The id argument is required, and the response is non-nullable.
// The user query takes an argument id of type String and returns a User. The id argument is required, and the response is non-nullable.
// The users query returns an array of type User. The id argument is required. The response is non-nullable.

// first integration with a string

// export const typeDefs = gql`
//   type Link {
//     id: String
//     title: String
//     description: String
//     url: String
//     category: String
//     imageUrl: String
//     users: [String]
//   }

//   type Query {
//     links: [Link]!
//   }
// `;

// second and best way : with nexus

import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      "node_modules",
      "@types",
      "nexus-typegen",
      "index.d.ts"
    ),
    schema: join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
});
