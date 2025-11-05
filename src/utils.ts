import { Task, TaskState } from './types';

/**
 * Format date string for month-abv day, year
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  return date.toLocaleDateString('en-US', options);
}

/**
 * self explanatory, checks if date is in past
 */
export function isOverdue(dateString: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dueDate = new Date(dateString);
  dueDate.setHours(0, 0, 0, 0);
  return dueDate < today;
}

/**
 * Get the status of a task (overdue, outstanding, or complete)
 */
export function getTaskState(task: Task): TaskState {
  if (task.completed) {
    return 'complete';
  }
  if (isOverdue(task.dueDate)) {
    return 'overdue';
  }
  return 'outstanding';
}

/**
 * Categorize tasks: overdue, outstanding, and complete
 */
export function categorizeTasks(tasks: Task[]) {
  const overdue: Task[] = [];
  const outstanding: Task[] = [];
  const complete: Task[] = [];

  tasks.forEach(task => {
    const status = getTaskState(task);
    if (status === 'overdue') {
      overdue.push(task);
    } else if (status === 'outstanding') {
      outstanding.push(task);
    } else {
      complete.push(task);
    }
  });

  return { overdue, outstanding, complete };
}
