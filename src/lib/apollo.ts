import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4otbiaj0wnu01xn4yw782it/master",
  cache: new InMemoryCache(),
});
