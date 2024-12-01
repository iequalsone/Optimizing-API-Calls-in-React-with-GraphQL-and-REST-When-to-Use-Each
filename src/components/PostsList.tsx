import React from "react";
import { useGraphqlApi } from "../hooks/useGraphqlApi";

const POSTS_QUERY = `
  query GetPosts($limit: Int!) {
    posts(limit: $limit) {
      id
      title
      body
    }
  }
`;

export const PostsList: React.FC = () => {
  const { data, error, isLoading } = useGraphqlApi(POSTS_QUERY, { limit: 10 });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data?.posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
