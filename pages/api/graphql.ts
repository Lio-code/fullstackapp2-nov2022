import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "../../graphql/schema";
import { resolvers } from "../../graphql/resolvers";
import Cors from "micro-cors";

// You created a new apolloServer instance which takes the schema and resolvers you just created as a parameter. You then created a function named startServer, which calls apolloServer.start();. This is a requirement of Apollo Server 3.

// You then defined an asynchronous function called handler, which takes a request and response object. Inside the body of this function, you are first calling the startServer function and then the createHandler function while setting the path to /api/graphql. This is the endpoint of the GraphQL API.

// Finally, every API route can export a config object to change the default configs. Body parsing is disabled here since it is handled by GraphQL.

const cors = Cors({
  origin: "https://studio.apollographql.com",
  allowCredentials: true,
  allowMethods: ["GET", "POST", "PUT", "DELETE"],
  allowHeaders: [
    "access-control-allow-credentials",
    "access-control-allow-origin",
    "content-type",
  ],
});

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  await startServer;

  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
