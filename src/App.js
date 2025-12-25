import Form from "./components/Form";
import Logo from "./components/Logo";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  const handleDelete = (id) => {
    setTaskList((list) => list.filter((task) => task.id !== id));
  };

  const handleTaskChecked = (id) => {
    setTaskList((list) =>
      list
        .slice()
        .map((task) =>
          task.id === id ? { ...task, status: !task.status } : task
        )
    );
  };

  const handleEditTask = (newTask) => {
    setTaskList((list) =>
      list
        .slice()
        .map((task) =>
          task.id === newTask.id
            ? { ...task, name: newTask.name, time: newTask.time }
            : task
        )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form addTask={setTaskList} />
      <TaskList
        taskList={taskList}
        deleteTask={handleDelete}
        checkTask={handleTaskChecked}
        updateTask={handleEditTask}
      />
    </div>
  );
}

export default App;
