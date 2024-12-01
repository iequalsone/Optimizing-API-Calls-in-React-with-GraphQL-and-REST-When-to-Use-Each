import React from "react";
import { useRestApi } from "../hooks/useRestApi";

export const TodoList: React.FC = () => {
  const { data, error, isLoading } = useRestApi("/api/todos");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
