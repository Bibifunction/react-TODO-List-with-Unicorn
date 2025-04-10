import type { Task } from "./task.models"

interface TaskListProps {
  tasks: Task[]
  onToggleComplete: (id: number) => void
  onDeleteTask: (id: number) => void
}

export const TaskList = ({ tasks, onToggleComplete, onDeleteTask }: TaskListProps) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-message">No hay tareas para mostrar</div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className={`task ${task.isCompleted ? "completed" : ""}`}>
            <div>
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.isCompleted}
                onChange={() => onToggleComplete(task.id)}
              />
              <span>{task.text}</span>
            </div>
            <button onClick={() => onDeleteTask(task.id)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  )
}


