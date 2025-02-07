import Button from "./Button";
import editIcon from "../images/edit-icon.png";
import deleteIcon from "../images/delete-icon.png";

const TodoList = () => {
  return (
    <>
      <ul>
        <li className="flex flex-col sm:flex-row justify-between items-center mb-3">
          <p className="flex-1">
            Clean a room fwaf awfawf awfwafawf awfwfw fa a fwfawf wf af awfa{" "}
          </p>
          <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0 sm:ml-4">
            <Button
              text="Edit"
              background="rgb(157 179 185)"
              padding="0.5em 0.7em"
              imageSrc={editIcon}
              margin="0"
            />
            <Button
              text="Delete"
              background="rgb(229 53 53)"
              padding="0.5em 0.7em"
              imageSrc={deleteIcon}
              margin="0"
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
