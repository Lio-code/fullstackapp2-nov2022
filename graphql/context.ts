import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";
import { Claims, getSession } from "@auth0/nextjs-auth0";

// You are creating a Context type and attaching the PrismaClient type to it. Next, you are exporting an asynchronous function called createContext() that returns the prisma instance created in the lib directory.

export type Context = {
  user?: Claims;
  accessToken?: string;
  prisma: PrismaClient;
};

export async function createContext({ req, res }): Promise<Context> {
  const session = getSession(req, res);

  // if the user is not logged in, omit returning the user and accessToken
  if (!session) return { prisma };

  const { user, accessToken } = session;

  return {
    user,
    accessToken,
    prisma,
  };
}

// The getSession() function from Auth0 returns information about the logged-in user and the access token. This data is then included in the GraphQL context. Your queries and mutations can now access the authentication state.
