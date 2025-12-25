import React from "react";
import Task from "./Task";

const TaskList = ({ taskList, deleteTask, checkTask, updateTask }) => {
  return taskList.length ? (
    <div className="task-list">
      {taskList.map((task, i) => (
        <Task
          deleteTask={deleteTask}
          curveClass={
            !i ? "top-task" : i === taskList.length - 1 ? "bottom-task" : ""
          }
          rowColor={i & 1 ? "green" : "red"}
          task={task}
          key={task.id}
          checkTask={checkTask}
          updateTask={updateTask}
        />
      ))}
    </div>
  ) : (
    <h3 className="empty-task-list">Your task list is empty ...</h3>
  );
};

export default TaskList;
