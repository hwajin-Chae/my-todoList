import React, { useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/01_TodoTemplate";
import TodoHead from "./components/02_TodoHead";
import TodoList from "./components/03_TodoList";
import TodoCreate from "./components/05_TodoCreate";
import { TodoProvider } from "./components_02/01_TodoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
