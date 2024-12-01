import { useQuery } from "@tanstack/react-query";

const fetchGraphQL = async (query: string, variables: Record<string, any>) => {
  const response = await fetch("https://example.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await response.json();
  if (errors) throw new Error(errors.map((err: any) => err.message).join(", "));
  return data;
};

export const useGraphqlApi = (query: string, variables: Record<string, any>) => {
  return useQuery({
    queryKey: ["graphqlApi", query, variables],
    queryFn: () => fetchGraphQL(query, variables),
  });
};
