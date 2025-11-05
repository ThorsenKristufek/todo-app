export interface Task {
  id: string;
  name: string;
  description: string;
  dueDate: string;
  completed: boolean;
  createdAt: string;
}

export type TaskState = 'overdue' | 'outstanding' | 'complete';
