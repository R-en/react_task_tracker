import Tasks from "./components/Tasks";
import Header from "./components/Header";
import { useState } from "react";

function App() {
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

  //delete task
  const deleteTask = (id) => {
    // console.log("deleted", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      {<Header />}
      {<Tasks tasks={tasks} onDelete={deleteTask} />}
      {/* <button onClick={outp}>Click me!</button> */}
    </div>
  );
}

export default App;
