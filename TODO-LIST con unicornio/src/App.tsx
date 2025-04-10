import { useState, useEffect } from "react"
import type { Task, FilterType } from "./task.models"
import { AddTask } from "./AddTask"
import { TaskList } from "./TaskList"
import { TaskFilter } from "./TaskFilter"
import { FlyingUnicorn } from "./FlyingUnicorn"
import "./App.css"

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Tarea 1", isCompleted: false },
    { id: 2, text: "Tarea 2", isCompleted: false },
  ])
  const [filter, setFilter] = useState<FilterType>("all")
  const [showUnicorn, setShowUnicorn] = useState(false)

  //  mostrar el unicornio
  useEffect(() => {
    const completedCount = tasks.filter((task) => task.isCompleted).length
    setShowUnicorn(completedCount >= 3 && completedCount <= 4)
  }, [tasks])

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const toggleComplete = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isCompleted: !task.isCompleted } : task)))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Filtrar tareas a base de filtro seleccionado
  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    if (filter === "pending") return !task.isCompleted
    if (filter === "completed") return task.isCompleted
    return true
  })

  return (
    <>
      <h1>TODO - LIST</h1>
      <AddTask addTask={addTask} />
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      <TaskList tasks={filteredTasks} onToggleComplete={toggleComplete} onDeleteTask={deleteTask} />
      <FlyingUnicorn isVisible={showUnicorn} />
    </>
  )
}

export default App




