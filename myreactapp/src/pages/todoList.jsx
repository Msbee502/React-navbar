import { useState } from "react";
import "../styles/todoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]); //tasks: This state holds the list of tasks. Initially, it's an empty array (useState([])).
  const [task, setTask] = useState(""); //This state holds the value of the current input field. Initially, it's an empty string (useState("")).

  function handleAddTask() { 

    // This function is triggered when the user clicks the "Add task" button or presses "Enter" (handled later).
    // It updates the tasks state by appending the current task to the list of previous tasks. The spread operator (...prevTasks) is used to create a new array containing the previous tasks, followed by the new task (task).
    // After adding the task, it clears the task input field by setting setTask("").

    setTasks((prevTasks) => [...prevTasks, task]);
    setTask(""); // Clear the input field after adding the task
  }

  function handleRemoveTask(index) {
//     This function is triggered when the "Remove" button next to a task is clicked.
// It removes the task at the specified index from the tasks array. The filter() method 
// is used to create a new array where the item at the index is excluded. This does not 
// mutate the original tasks array, which is important for React to efficiently track state changes.

    setTasks(tasks.filter((_, i) => i !== index)); // Remove task at the given index
  }
  function handleKeyPress(event) {
    // This function is invoked when any key is pressed in the input field.
    // It checks if the Enter key was pressed and whether the task is not empty (task.trim() ensures there
    // is no leading or trailing whitespace). If the Enter key is pressed and the task is non-empty, it calls 
    // the handleAddTask function to add the task to the list.

    if (event.key === "Enter" && task.trim()) {
      // Check if Enter key was pressed and task is not empty
      handleAddTask();
    }
  }

  return (
    <div className="todoListContainer">
      <div className="todoList">
        <h3 className="todoListTitle">List of tasks</h3>
        <ul>
           {tasks.map((t, index) => (   
          // Loops through each task in the tasks array, creating a list item (li) for each task.
          // Each list item contains the task text (t), and a button to remove the task (handleRemoveTask(index)).
            <li key={index} className="todoList">
              {t}
              <button
                className="removeButton"
                onClick={() => handleRemoveTask(index)}
              >
                Remove
              </button>{" "}
              {/* Remove button */}
            </li>
          ))}
        </ul>
        <input className="inputTodo"
        //The input field (<input>) allows the user to type in a new task
        // It is controlled by the task state (value={task}), meaning the input field reflects the state.
        // The onChange event handler updates the task state when the input changes (e.target.value).
        // It listens for the "Enter" key by calling handleKeyPress via the onKeyDown event.
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update state with input value
          placeholder="Enter your task"
          onKeyDown={handleKeyPress} // Listen for key presses
        />
        <button
        // The "Add task" button (<button>) triggers the handleAddTask function when clicked, 
        // but is disabled if the task input is empty (!task).
          className="addTaskButton"
          onClick={handleAddTask}
          disabled={!task}
        >
          Add task
        </button>
      </div>
    </div>
  );
}

export default TodoList;