import { useState } from "react";

function Form({ addTask }) {
  const [name, setName] = useState("");
  const [time, setTime] = useState(NaN);

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!name || !time) return;

    const newTask = {
      id: Date.now(),
      name: name,
      time: time,
      status: false,
    };

    addTask((taskList) => [...taskList, newTask]);
    setName("");
    setTime(NaN);
  };

  return (
    <form className="form" onSubmit={handleAddTask}>
      <h3>Add a Task</h3>
      <input
        type="text"
        placeholder="Studying..."
        className="task-input"
        value={name}
        onChange={(e) => setName(() => e.target.value.trimStart())}
      />
      <input
        type="number"
        placeholder="60 min"
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
      <button>Add</button>
    </form>
  );
}

export default Form;
