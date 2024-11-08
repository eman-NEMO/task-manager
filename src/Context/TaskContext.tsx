// /src/Context/TaskContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define a Task interface
interface Task {
  taskId: string;
  taskName: string;
  taskDes: string;
  taskTime:string;
  completed:boolean;
  // Add other task fields you might need
}

interface TaskContextType {
  isEditMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  editTaskId: string | null;
  setEditTaskId: React.Dispatch<React.SetStateAction<string | null>>;
  AllTasks: Task[];  // Array of Task objects
  setAllTasks: React.Dispatch<React.SetStateAction<Task[]>>;  // Set function for updating tasks
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [editTaskId, setEditTaskId] = useState<string | null>(null); // State to hold the ID of the task being edited
  const [AllTasks, setAllTasks] = useState<Task[]>([]); // State to hold all tasks

  return (
    <TaskContext.Provider value={{ setAllTasks, AllTasks, isEditMode, setEditMode, editTaskId, setEditTaskId }}>
      {children}
    </TaskContext.Provider>
  );
};
