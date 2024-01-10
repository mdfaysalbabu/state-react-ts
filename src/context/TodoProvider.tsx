import { ReactNode, createContext, useReducer } from "react";

export const TodoContext = createContext<{
  state: TTodo[];
  dispatch: React.Dispatch<TAction>;
} | null>(null);

type TTodo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

type TAction = {
  type: "addTodo" | "taskCompleted";
  payload: TTodo | string;
};

const TypeConstants = {
  ADD_TODO: "addTodo",
  TASK_COMPLETED: "taskCompleted",
};

const initialState: TTodo[] = [];

const reducer = (currenState: TTodo[], action: TAction) => {
  switch (action.type) {
    case TypeConstants.ADD_TODO:
      return [...currenState, action.payload];
    case TypeConstants.TASK_COMPLETED:
      return currenState.map((item) =>
        item.id === action.payload
          ? { ...item, isCompleted: !item.isCompleted }
          : item
      );
    default:
      return currenState;
  }
};
type TodoProviderProps = {
  children: ReactNode;
};

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
export default TodoProvider;
