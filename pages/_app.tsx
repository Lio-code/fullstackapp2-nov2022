import "../styles/tailwind.css";
import Layout from "../components/Layout";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;

// wrapping the global App component with the Apollo Provider so all of the project's components can send GraphQL queries.

// Note: Next.js supports different data fetching strategies. You can fetch data server-side, client-side, or at build-time. To support pagination, you need to fetch data client-side.
