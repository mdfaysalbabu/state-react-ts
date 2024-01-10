import { useState } from "react";
import CounterWithClass from "./components/CounterWithClass";
import CounterWithFunction from "./components/CounterWithFunction";
import UserInfoState from "./components/UserInfoUseState";
import UserInfoReducer from "./components/userInfoReducer";
import TodoProvider from "./context/TodoProvider";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";


function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm></TodoForm>
        <TodoList></TodoList>
      </div>
    </TodoProvider>
  );
}

export default App;
