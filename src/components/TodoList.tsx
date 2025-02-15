import Button from "./Button";
import Input from "./Input";
import editIcon from "../images/edit-icon.png";
import deleteIcon from "../images/delete-icon.png";
import { deleteTodo, updateTodo } from "../api/todoApi";
import { Todo } from "../pages/Todo";
import { useState } from "react";

interface TodoListProps {
  todos: Todo[];
  reloadTodos: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, reloadTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [todoId, setTodoId] = useState(0);
  const [newDescription, setNewDescription] = useState("");

  const toggleEdit = (id: number) => {
    if (id) {
      setIsEditing(true);
      setTodoId(id);
    }
  };

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    reloadTodos();
  };

  const handleSaveEdit = async () => {
    await updateTodo(todoId, newDescription);
    setIsEditing(false);
    reloadTodos();
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li className="flex flex-col sm:flex-row justify-between items-center my-3">
              <p className="flex-1">{todo.description}</p>
              <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0 sm:ml-4">
                <Button
                  text="Edit"
                  background="rgb(157 179 185)"
                  padding="0.5em 0.7em"
                  imageSrc={editIcon}
                  margin="0"
                  onClick={() => toggleEdit(todo.id)}
                />
                <Button
                  text="Delete"
                  background="rgb(229 53 53)"
                  padding="0.5em 0.7em"
                  imageSrc={deleteIcon}
                  margin="0"
                  onClick={() => handleDelete(todo.id)}
                />
              </div>
            </li>
          </ul>
        );
      })}
      {isEditing && (
        <>
          <div className="fixed inset-0 bg-[rgba(0,_0,_0,_0.4)] flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Edit Todo
              </h3>
              <Input
                type="text"
                placeholder="Enter new description"
                onChange={(e) => setNewDescription(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
              />
              <div className="flex gap-2 justify-end mt-6">
                <Button
                  text="Save"
                  background="rgb(34 197 94)"
                  padding="0.5em 0.7em"
                  margin="0"
                  onClick={handleSaveEdit}
                />
                <Button
                  text="Cancel"
                  background="rgb(156 163 175)"
                  padding="0.5em 0.7em"
                  margin="0"
                  onClick={handleCancelEdit}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TodoList;
