import { Hydrate, QueryClientProvider } from "react-query";

import { queryClient } from "../src/api";
import Layout from "../components/Layout";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}
