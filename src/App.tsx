import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-[70%] min-w-[29em] max-w-[60em]">
        <div className="bg-gray-100 p-7 rounded-lg shadow-lg ">
          <div className="flex">
            <Input type="text" placeholder="Add Todo" />
            <Button text="Add" />
          </div>
        </div>
        <div className="bg-gray-100 p-7 rounded-lg shadow-lg mt-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
