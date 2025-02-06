import Button from "./Button";
import editIcon from "../images/edit-icon.png";
import deleteIcon from "../images/delete-icon.png";

const TodoList = () => {
  return (
    <>
      <ul>
        <li className="flex justify-between items-center mb-3">
          <p>Clean a room</p>
          <div>
            <Button
              text="Edit"
              background="rgb(157 179 185)"
              padding="0.5em 0.7em"
              imageSrc={editIcon}
            />
            <Button
              text="Delete"
              background="rgb(229 53 53)"
              padding="0.5em 0.7em"
              imageSrc={deleteIcon}
            />
          </div>
        </li>
        <li className="flex justify-between items-center mb-3">
          <p>Clean a house</p>
          <div>
            <Button
              text="Edit"
              background="rgb(157 179 185)"
              padding="0.5em 0.7em"
              imageSrc={editIcon}
            />
            <Button
              text="Delete"
              background="rgb(229 53 53)"
              padding="0.5em 0.7em"
              imageSrc={deleteIcon}
            />
          </div>
        </li>
      </ul>
    </>
  );
};

export default TodoList;
