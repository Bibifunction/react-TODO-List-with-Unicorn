import type { FilterType } from "./task.models"

interface TaskFilterProps {
  currentFilter: FilterType
  onFilterChange: (filter: FilterType) => void
}

export const TaskFilter = ({ currentFilter, onFilterChange }: TaskFilterProps) => {
  return (
    <div className="filters">
      <button
        className={`filters__btn ${currentFilter === "all" ? "filters__btn--selected" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        Todas
      </button>
      <button
        className={`filters__btn ${currentFilter === "pending" ? "filters__btn--selected" : ""}`}
        onClick={() => onFilterChange("pending")}
      >
        Pendientes
      </button>
      <button
        className={`filters__btn ${currentFilter === "completed" ? "filters__btn--selected" : ""}`}
        onClick={() => onFilterChange("completed")}
      >
        Completadas
      </button>
    </div>
  )
}


