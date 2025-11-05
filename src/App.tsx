import { useState, useEffect } from 'react';
import { Task } from './types';
import { categorizeTasks } from './utils';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const STORAGE_KEY = 'todo-app-tasks';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // Load tasks from cookies
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // Save tasks to localStorage when they change, wont lose until clear cookies
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name: string, description: string, dueDate: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name,
      description,
      dueDate,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskComplete = (id: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const { overdue, outstanding, complete } = categorizeTasks(tasks);
  const totalToDo = overdue.length + outstanding.length;

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6" style={{ fontSize: '30px' }}>
          <span className="font-semibold">To Do</span> <span style={{ color: '#667085' }}>{totalToDo}</span>
        </h1>

        <TaskForm onAddTask={addTask} />

        <TaskList
          title="Overdue"
          count={overdue.length}
          tasks={overdue}
          onToggleComplete={toggleTaskComplete}
        />

        <TaskList
          title="Outstanding"
          count={outstanding.length}
          tasks={outstanding}
          onToggleComplete={toggleTaskComplete}
        />

        <TaskList
          title="Complete"
          count={complete.length}
          tasks={complete}
          onToggleComplete={toggleTaskComplete}
        />
      </div>
    </div>
  );
}

export default App;
