import Input from "./components/Input";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col w-[90%] sm:w-[70%] sm:min-w-[29em] sm:max-w-[60em]">
        <div className="bg-gray-100 p-7 rounded-lg shadow-lg ">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
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
