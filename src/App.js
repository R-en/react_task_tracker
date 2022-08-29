import Tasks from "./components/Tasks";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doc Appoint",
      day: "Feb 2nd at 5pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Den Appoint",
      day: "Feb 3rd at 5pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Disk Appoint",
      day: "Feb 4th at 5pm",
      reminder: false,
    },
  ]);
  // const outp = () => {
  //   console.log({ tasks });
  // };

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  //delete task
  const deleteTask = (id) => {
    // console.log("deleted", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toogle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => {
          setShowAddTask(!showAddTask);
        }}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}
      {/* <button onClick={outp}>Click me!</button> */}
    </div>
  );
}

export default App;
