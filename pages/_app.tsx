import "../styles/tailwind.css";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </UserProvider>
  );
}

export default MyApp;

// wrapping the global App component with the Apollo Provider so all of the project's components can send GraphQL queries.

// Note: Next.js supports different data fetching strategies. You can fetch data server-side, client-side, or at build-time. To support pagination, you need to fetch data client-side.

//Wrapping the MyApp component with the UserProvider component will allow all pages to access your user's authentication state.
