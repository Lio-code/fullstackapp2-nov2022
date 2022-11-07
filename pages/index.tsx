import Head from "next/head";
import { title } from "process";
import { AwesomeLink } from "../components/AwesomeLink";
import { gql, useQuery } from "@apollo/client";

// first try with hard coded datas :

// import { links } from "../data/links";

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Awesome Links</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="container mx-auto max-w-5xl my-20">
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//           {links.map((link) => (
//             <AwesomeLink
//               key={link.id}
//               url={link.url}
//               id={link.id}
//               category={link.category}
//               title={link.title}
//               description={link.description}
//               imageUrl={link.imageUrl}
//             />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// final integration with data from db

const AllLinksQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`;

export default function Home() {
  const { data, loading, error } = useQuery(AllLinksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.links.map((link) => (
            <AwesomeLink
              key={link.id}
              url={link.url}
              id={link.id}
              category={link.category}
              title={link.title}
              description={link.description}
              imageUrl={link.imageUrl}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

// useQuery returns an object which contains three values:

//     loading: a boolean that determines whether or not the data has been returned.
//     error: an object that contains the error message in case an error occurs after sending the query.
//     data: contains the data returned from the API endpoints.
