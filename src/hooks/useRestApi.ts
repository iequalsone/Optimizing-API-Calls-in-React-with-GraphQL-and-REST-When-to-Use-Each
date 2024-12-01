import { useQuery } from "@tanstack/react-query";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const useRestApi = (endpoint: string) => {
  return useQuery<Todo[], Error>({
    queryKey: ["restApi", endpoint],
    queryFn: async () => {
      const response = await fetch(endpoint);
      if (!response.ok) throw new Error("Error fetching REST API");
      return response.json();
    },
  });
};
