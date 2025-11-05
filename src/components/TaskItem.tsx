import { Task } from '../types';
import { formatDate, isOverdue } from '../utils';

interface TaskItemInfo {
  task: Task;
  onToggleComplete: (id: string) => void;
}

export default function TaskItem({ task, onToggleComplete }: TaskItemInfo) {
  const dateIsOverdue = !task.completed && isOverdue(task.dueDate);

  return (
    <div className="flex items-start gap-3 py-3">
      {/*The check box*/}
      <label className="flex items-center cursor-pointer mt-1 flex-shrink-0">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          className="sr-only peer"
        />
        <div
          className="w-5 h-5 border-2 rounded flex items-center justify-center"
          style={{
            backgroundColor: task.completed ? '#F9F5FF' : 'transparent',
            borderColor: task.completed ? '#7F56D9' : '#D0D5DD'
          }}
        >
          {task.completed && (
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="#7F56D9"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
        </div>
      </label>

      {/*Task content*/}
      <div className="flex-1 min-w-0">
        <div className="font-medium break-words" style={{ fontSize: '16px', color: '#344054' }}>{task.name}</div>
        {task.description && (
          <div className="font-normal mt-1 break-words" style={{ fontSize: '16px', color: '#475467' }}>{task.description}</div>
        )}
      </div>

      {/*Due date*/}
      <div
        className="text-sm whitespace-nowrap flex-shrink-0 ml-4"
        style={{ color: dateIsOverdue ? '#F04438' : '#6B7280' }}
      >
        {formatDate(task.dueDate)}
      </div>
    </div>
  );
}
