import { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import TodoList from "../components/TodoList";
import { getAllTodos, createTodo } from "../api/todoApi";

export interface Todo {
  id: number;
  description: string;
}

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const getTodos = async () => {
      const data = await getAllTodos();
      if (data) setTodos(data);
    };

    getTodos();
  }, []);

  // reload todos on delete or edit without reloading the browser, todos will get reloaded with state
  const reloadTodos = async () => {
    const data = await getAllTodos();
    setTodos(data);
  };

  const addTodo = async () => {
    await createTodo(description);
    setDescription("");
    reloadTodos();
  };

  return (
    <div className="min-h-screen flex items-center justify-center my-6">
      <div className="flex flex-col w-[90%] sm:w-[70%] sm:min-w-[29em] sm:max-w-[60em]">
        <div className="bg-gray-100 p-7 rounded-lg shadow-lg ">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <Input
              type="text"
              placeholder="Add Todo"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
            />
            <Button text="Add" onClick={addTodo} />
          </div>
        </div>
        {todos?.length !== 0 && (
          <div className="bg-gray-100 p-7 rounded-lg shadow-lg mt-4">
            <TodoList todos={todos} reloadTodos={reloadTodos} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
