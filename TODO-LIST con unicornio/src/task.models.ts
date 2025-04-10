export interface Task {
  id: number
  text: string
  isCompleted: boolean
}

export type FilterType = "all" | "pending" | "completed"

