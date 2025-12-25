import React, { useState } from "react";
import EditForm from "./EditForm";

const Task = ({
  task,
  curveClass,
  deleteTask,
  rowColor,
  checkTask,
  updateTask,
}) => {
  const [taskChecked, setTaskChecked] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleEditModal = () => {
    setEditOpen((t) => !t);
  };

  const handleTaskChecked = (e) => {
    setTaskChecked(e.target.checked);
    checkTask(task.id);
  };

  return (
    <div className={`${curveClass} ${rowColor} task`}>
      {!editOpen && (
        <input
          type="checkbox"
          className="check-box"
          onChange={handleTaskChecked}
        />
      )}
      {editOpen ? (
        <EditForm
          task={task}
          updateTask={updateTask}
          closeEditModal={handleEditModal}
        />
      ) : (
        <>
          <p style={{ textDecoration: `${taskChecked ? "line-through" : ""}` }}>
            {task.name}
          </p>
          <p>{task.time} min</p>
        </>
      )}

      <div>
        {taskChecked || (
          <button onClick={handleEditModal} className="edit-btn">
            {editOpen ? "Cancel" : "Edit"}
          </button>
        )}
        <button
          className="delete-btn"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
