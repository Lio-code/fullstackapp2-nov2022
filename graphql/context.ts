import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

// You are creating a Context type and attaching the PrismaClient type to it. Next, you are exporting an asynchronous function called createContext() that returns the prisma instance created in the lib directory.

export type Context = {
  prisma: PrismaClient;
};
export async function createContext({ req, res }): Promise<Context> {
  return {
    prisma,
  };
}
