// /pages/tasks.tsx
import React from 'react';
import TaskList from '@/components/organisms/TaskList';

const TasksPage = () => {
  return (
 
      <div className="bg-[#f0f1f7] ">
        <h1 className="text-2xl font-bold text-center mt-9 ">Task Management</h1>
        <TaskList />
   
    </div>
  );
};

export default TasksPage;
