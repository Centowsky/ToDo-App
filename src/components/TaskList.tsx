import React from "react";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: {
    id: number;
    title: string;
    completed: boolean;
  }[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
