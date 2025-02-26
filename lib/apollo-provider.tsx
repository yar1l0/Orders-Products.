"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useState } from "react";

export function ApolloWrapper({ children }: { children: React.ReactNode }) {
  console.log('process.env.API_ADDRESS', process.env.NEXT_PUBLIC_API_URL);
  const [client] = useState(
    new ApolloClient({
      uri: "http://localhost:8080/graphql",
      cache: new InMemoryCache(),
      credentials: "include",
    })
  );

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}