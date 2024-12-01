# Optimizing API Calls in React with GraphQL and REST

Welcome to the **Optimizing API Calls in React** repository! This project demonstrates best practices for integrating **GraphQL** and **REST APIs** into React applications. The examples utilize **React Query**, **TypeScript**, and a **Vite-based folder structure** to showcase efficient data fetching and server-state management.

---

## 📖 Overview

APIs are the backbone of modern web applications. This repository covers how to integrate both **GraphQL** and **REST APIs** into React projects, helping you choose the right approach for your specific use case. Additionally, it highlights how **React Query** can enhance your API integration by abstracting caching, refetching, and error handling.

---

## ✨ Features

### REST API Integration:
- Example of fetching data from a REST endpoint using `useQuery`.
- Centralized hooks for clean and reusable code.

### GraphQL API Integration:
- Efficient GraphQL querying with a reusable custom hook.
- Focus on query and variable management.

### React Query Integration:
- Unified state management for server-state data.
- Optimized caching, error handling, and background refetching.

### TypeScript First:
- All examples leverage TypeScript for type safety and improved development experience.

---

## 📂 Project Structure
```
src/
├── components/       # React components showcasing API usage
│   ├── PostsList.tsx  # GraphQL integration example
│   └── TodoList.tsx   # REST API integration example
├── hooks/            # Custom hooks for API fetching
│   ├── useRestApi.ts  # REST API hook with React Query
│   └── useGraphqlApi.ts # GraphQL API hook with React Query
├── app/              # Main app entry point
│   └── main.tsx      # App initialization and routing
```

---

## 🛠 Usage

### REST API Example
The REST API example demonstrates fetching a list of todos:

- **Hook:** `src/hooks/useRestApi.ts`
- **Component:** `src/components/TodoList.tsx`

### GraphQL API Example
The GraphQL example showcases fetching posts with custom query variables:

- **Hook:** `src/hooks/useGraphqlApi.ts`
- **Component:** `src/components/PostsList.tsx`

Navigate through the app to explore each example in action.

---

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](https://raw.githubusercontent.com/iequalsone/Optimizing-API-Calls-in-React-with-GraphQL-and-REST-When-to-Use-Each/refs/heads/main/LICENSE) file for details.

---

## 💬 Contributing
Contributions are welcome! If you'd like to add more examples or improve the current ones, feel free to:

1. **Fork the repository.**
2. **Create a new feature branch.**
3. **Submit a pull request.**

Thank you for checking out this repository! Dive into the world of efficient API integration and data fetching in React. If you found this helpful, be sure to check out the accompanying LinkedIn article for more insights. **Happy coding! 🚀**

   
