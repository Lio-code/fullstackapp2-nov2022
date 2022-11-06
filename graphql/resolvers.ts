//resolvers is an object where you will define the implementation for each query and mutation. The functions inside the Query object must match the names of the queries defined in the schema. Same thing goes for mutations. Here the links resolver function returns an array of objects, where each object is of type Link.

//first try with data hard coded

// export const resolvers = {
//   Query: {
//     links: () => [
//       {
//         category: "Open Source",
//         description: "Fullstack React framework",
//         id: "8a9020b2-363b-4a4f-ad26-d6d55b51bqes",
//         imageUrl: "https://nextjs.org/static/twitter-cards/home.jpg",
//         title: "Next.js",
//         url: "https://nextjs.org",
//       },
//       {
//         category: "Open Source",
//         description: "Next Generation ORM for TypeScript and JavaScript",
//         id: "2a3121b2-363b-4a4f-ad26-d6c35b41bade",
//         imageUrl: "https://www.prisma.io/images/og-image.png",

//         title: "Prisma",
//         url: "https://prisma.io",
//       },
//       {
//         category: "Open Source",
//         description: "Utility-fist css framework",
//         id: "6a9122b2-363b-4a4f-ad26-d6c55b51baed",
//         imageUrl:
//           "https://tailwindcss.com/_next/static/media/twitter-large-card.85c0ff9e455da585949ff0aa50981857.jpg",
//         title: "TailwindCSS",
//         url: "https://tailwindcss.com",
//       },
//       {
//         category: "Open Source",
//         description: "GraphQL implementation ",
//         id: "2ea8cfb0-44a3-4c07-bdc2-31ffa135ea78",
//         imageUrl: "https://www.apollographql.com/apollo-home.jpg",
//         title: "Apollo GraphQL",
//         url: "https://apollographql.com",
//       },
//     ],
//   },
// };

//second try with data from database
export const resolvers = {
  Query: {
    links: (_parent, _args, ctx) => {
      return ctx.prisma.link.findMany();
    },
  },
};

// The resolver now has three optional arguments:

//     _parent: the return value of the resolver for this field's parent. Since it's not being used in the resolver, you are prefixing with an underscore.
//     _args: an object that contains all GraphQL arguments provided for a field. For example, when executing query { link(id: "4") }, the args object passed to the user resolver is { "id": "4" }. Since it's not being used in the resolver, you are prefixing with an underscore.
//     The context argument is helpful for passing things that any resolver might need, like authentication scope, database connections, and custom fetch functions. Here we are using it to access Prisma Client.
