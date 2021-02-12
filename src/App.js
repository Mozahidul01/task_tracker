import './App.css';
import {useState} from 'react'
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';
import AddTask from './components/Tasks/AddTask';


function App() {

  const [tasks, setTasks] = useState( [
    {
       id: '1',
       text: 'Doctors Appointment',
       day: 'Mar 5th at 2:30pm',
       reminder: true,
    },
    {
       id: '2',
       text: 'Meeting at School',
       day: 'Mar 7th at 1:30pm',
       reminder: true,
    },
    {
       id: '3',
       text: 'Food Shopping',
       day: 'Mar 5th at 4:30pm',
       reminder: true,
    }
  ])
  
  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks({ ...tasks, newTask });
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map
      (task => task.id === id ? {...task, reminder: !task.reminder} : task)
    )
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <h3 style = {{textAlign: 'center',paddingTop: '8px'}}>No Task Available</h3>}
    </div>
  );
}

export default App;
  