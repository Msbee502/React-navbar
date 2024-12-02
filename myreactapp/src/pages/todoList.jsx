import { useState } from "react";
import "../styles/todoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]); //Empty list of tasks.
  const [task, setTask] = useState(""); //Empty input field.

  function handleAddTask() { // This function is triggered when the user clicks the "Add task" button or presses "Enter" (handled later) and adds a new task to the list.// After adding the task, it clears the task input field by setting setTask("").

    setTasks((prevTasks) => [...prevTasks, task]);
    setTask(""); // Clear the input field after adding the task
  }

  function handleRemoveTask(index) {// This funciton is triggered when "Remove" button next to a task is clicked.
  
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task 
  }
  function handleKeyPress(event) { //This function checks if the Enter key was pressed and if the task is not empty (task.trim() if the Enter key is pressed and the task is non-empty, it calls the handleAddTask function to add the task to the list.
  
    if (event.key === "Enter" && task.trim()) { // Checks if Enter key was pressed and task is not empty
      handleAddTask();
    }
  }

  return (
    <div className="todoListContainer">
      <div className="todoList">
        <h3 className="todoListTitle">List of tasks</h3>
        <ul>
          {tasks.map(
            (
              t,
              index // Loops through each task in the tasks array, creating a list item (li) for each task.
            ) => (
              <li key={index} className="todoList">
                {t}
                <button
                  className="removeButton"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>{" "}
              </li>
            )
          )}
        </ul>
        <input
          className="inputTodo"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update state with input value
          placeholder="Enter your task"
          onKeyDown={handleKeyPress} // Listen for key presses
        />
        <button
          className="addTaskButton" // triggers the handleAddTask function when clicked, but is disabled if the task input is empty (!task).
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
