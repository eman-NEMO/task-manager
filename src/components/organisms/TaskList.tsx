import React, { useState } from 'react';
import TaskItem from '@/components/organisms/TaskItem';
import TaskForm from '@/components/organisms/TaskForm';
import Button from '../atoms/Button';
import { useTaskContext } from '@/Context/TaskContext';
const TaskList = () => {
  const{ setAllTasks, AllTasks, setEditMode, setEditTaskId} = useTaskContext();
 
  const [filter, setFilter] = useState('all');


  const toggleTaskCompletion = (id: string) => {
    const updatedTasks = AllTasks.map((task) =>
      task.taskId === id ? { ...task, completed: !task.completed } : task
    );
    setAllTasks(updatedTasks);
  };

//  Delete task
  const deleteTask = (id: string) => {
    const updatedTasks = AllTasks.filter((task) => task.taskId !== id);
    setAllTasks(updatedTasks);
    
  };
    const editTask=(id:string)=>{
        setEditMode(true);
        setEditTaskId(id);
   }
//  Filter tasks based on the current filter state
  const filteredTasks = AllTasks.filter(
    (AllTasks) =>
      filter === 'all' ||
      (filter === 'completed' && AllTasks.completed) ||
      (filter === 'incomplete' && !AllTasks.completed)
  );
  // Function to apply custom styles to the active button
  const handleFilterClick = (buttonFilter: string) => {
    setFilter(buttonFilter);
  };

  return (
    <div>
      <TaskForm />

      <p className="text-2xl font-bold m-4">Filters</p>
      <div className="flex gap-4 m-3">
        <Button type="Filter" onClick={() => handleFilterClick('all')}   >  All </Button>
        <Button type="Filter"  onClick={() => handleFilterClick('completed')} > Completed </Button>
        <Button type="Filter" onClick={() => handleFilterClick('incomplete')}>  Incomplete </Button>
      </div>

      <div className="space-y-2">
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.taskId}
            taskId={task.taskId} 
            taskName={task.taskName} 
            taskDes={task.taskDes} 
            taskTime={task.taskTime}
            completed={task.completed}
            onToggle={() => toggleTaskCompletion(task.taskId)} 
            onDelete={() => deleteTask(task.taskId)} 
            onEdit={()=>(editTask(task.taskId))}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
