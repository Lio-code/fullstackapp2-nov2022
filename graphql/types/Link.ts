import { objectType, extendType } from "nexus";
import { User } from "./User";

export const Link = objectType({
  name: "Link",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("url");
    t.string("description");
    t.string("imageUrl");
    t.string("category");
    t.list.field("users", {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.link
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .users();
      },
    });
  },
});

export const LinksQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("links", {
      type: "Link",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.link.findMany();
      },
    });
  },
});

// the extendType() function from Nexus to create a query.

//- nonNull specifies that clients will always get a value for this field. In Nexus, all "output types" (types returned by fields) are nullable by default.
//- list specifies that this query will return a list.
//
//field() is a function that takes two arguments:
//- The field's name. In this case, the query is called "links" like the schema you created initially.
//- An object that specifies the returned type of the query along with the resolver function. In the resolver function, you are accessing prisma from the context and using the findMany() function to return all links in the Link table of the database.
