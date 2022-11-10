## The app is built using the following technologies:

- Next.js as the React framework
- Apollo Server as the GraphQL server
- Nexus for constructing the GraphQL schema
- Apollo Client as the GraphQL client
- Prisma as the ORM for migrations and database access
- PostgreSQL as the database
- AWS S3 for uploading images
- Auth0 for authentication
- TypeScript as the programming language
- TailwindCSS a utility-first CSS framework
- Vercel for deployment

## How to preview the database locally:

Use prisma studio.

`npx prisma studio`

## Nexusjs

Nexus is a GraphQL schema construction library where you define your GraphQL schema using code. The value proposition of this approach is you are using a programming language to build your API, which has multiple benefits:

- No need to context-switch between SDL and the programming language you are using to build your business logic.
- Auto-completion from the text-editor
- Type-safety (if you are using TypeScript)

## Expose localhost:3000 using Ngrok

While your app is running, run the following command to expose localhost:3000:
`npx ngrok http 3000`

Copy the Forwarding URL, replace localhost:3000 with your Forwarding URL in your Action, in [auth0](https://manage.auth0.com) and click Deploy.
