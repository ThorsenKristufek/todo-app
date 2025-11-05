import { useState, FormEvent } from 'react';

interface TaskFormProps {
  onAddTask: (name: string, description: string, dueDate: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Only work with valid inputs
    if (!name.trim() || !dueDate) {
      return;
    }

    // trim for visual consistency
    onAddTask(name.trim(), description.trim(), dueDate);

    //Wipe the form
    setName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white mb-8">
      <div className="flex gap-4 mb-4">
        <div className="flex-1 flex gap-4">
          {/* Name of task*/}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Task Name*"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-normal"
            style={{ fontSize: '16px' }}
            required
          />

          {/*Task due date*/}
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-normal"
            style={{ fontSize: '16px', colorScheme: 'light' }}
            required
          />
        </div>

        {/*Add task butt*/}
        <button
          type="submit"
          className="px-6 py-2 text-white rounded-lg flex items-center justify-center font-semibold transition-colors gap-1"
          style={{ backgroundColor: '#475467', fontSize: '14px' }}
          aria-label="Add task"
        >
          <span className="text-lg">+</span> Add
        </button>
      </div>

      {/* Description block*/}
      <div className="flex gap-4">
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          rows={4}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none font-normal"
          style={{ fontSize: '16px', color: '#6B7280' }}
        />
        <div className="px-6 py-2" style={{ width: '84px' }}></div>
      </div>
    </form>
  );
}
