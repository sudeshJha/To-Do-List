import React, { useState } from "react";

function EditForm({ task, updateTask, closeEditModal }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState(NaN);

  const handleEditSubmit = (e) => {
    e.preventDefault();

    if (!name || !time) return;

    task.name = name;
    task.time = time;

    updateTask(task);

    setName("");
    setTime(NaN);
    closeEditModal();
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <input
        type="text"
        placeholder={task.name}
        className="task-input"
        onChange={(e) => setName(() => e.target.value.trimStart())}
        value={name}
      />
      <input
        type="number"
        placeholder={`${task.time} min`}
        className="time-input"
        min={0}
        value={time}
        onChange={(e) =>
          setTime(() =>
            !+e.target.value.trimStart("0")
              ? NaN
              : +e.target.value.trimStart("0")
          )
        }
      />
      <input type="submit" hidden />
    </form>
  );
}

export default EditForm;
