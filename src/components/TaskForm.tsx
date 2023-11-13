import React, { useState } from "react";

interface TaskFormProps {
  onAdd: (title: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle("");
    }
  };

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 mr-2 border"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-2 py-1 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
