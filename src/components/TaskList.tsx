import { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskListInfo {
  title: string;
  count: number;
  tasks: Task[];
  onToggleComplete: (id: string) => void;
}

export default function TaskList({ title, count, tasks, onToggleComplete }: TaskListInfo) {
  if (tasks.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="mb-4" style={{ fontSize: '24px' }}>
        <span className="font-medium">{title}</span> <span className="font-normal" style={{ color: '#667085' }}>{count}</span>
      </h2>
      <div className="bg-white">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
}
