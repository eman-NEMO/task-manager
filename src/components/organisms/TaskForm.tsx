import React, { useState, useEffect } from 'react';
import Button from '@/components/atoms/Button';
import FormField from '@/components/molecules/FormField';
import { useTaskContext } from '@/Context/TaskContext';
import { format } from 'date-fns';
const TaskForm = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDes, setTaskDes] = useState('');
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const {
    setAllTasks,
    AllTasks,
    isEditMode,
    setEditMode,
    editTaskId,
    setEditTaskId,
  } = useTaskContext();

  useEffect(() => {
    if (isEditMode && editTaskId) {
      const taskToEdit = AllTasks.find(task => task.taskId === editTaskId);
      if (taskToEdit) {
        setTaskName(taskToEdit.taskName);
        setTaskDes(taskToEdit.taskDes);
      }
    } else {
      setTaskName('');
      setTaskDes('');
    }
  }, [isEditMode, editTaskId, AllTasks]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim() && taskDes.trim()) {
      if (isEditMode && editTaskId) {
        const updatedTasks = AllTasks.map(task =>
          task.taskId === editTaskId
            ? { ...task, taskName, taskDes }
            : task
        );
        setAllTasks(updatedTasks);
        setEditMode(false); 
        setEditTaskId(null); 
      } else {
        const time = new Date();
        const formattedTime = format(time, 'MM/dd/yyyy, HH:mm:ss');
        const newTask = {
          taskId: generateId(),
          taskName,
          taskDes,
          taskTime:formattedTime,
          completed: false,
        };
        setAllTasks([...AllTasks, newTask]);
      }
      setOverlayVisible(false);
    }
  };

  return (
    <>
      {/* Button to show overlay */}
      <div className="flex justify-end m-5">
        <Button type="add" onClick={() => setOverlayVisible(true)}>
          Add Task
        </Button>
      </div>

      {/* Overlay */}
      {(isOverlayVisible || isEditMode) && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">
              {isEditMode ? 'Edit Task' : 'Enter Task'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Task Name Input */}
              <FormField
                placeholder="Task Title"
                label="Title"
                type="text"
                value={taskName} // Bind value for edit mode
                onChange={(e) => setTaskName(e.target.value)}
              />

              <textarea
                value={taskDes} // Bind value for edit mode
                onChange={(e) => setTaskDes(e.target.value)}
                placeholder="Task Description"
                className="p-2 border rounded focus:outline-none focus:ring-1 focus:ring-mainColor"
                style={{ maxHeight: '200px', minHeight: '100px' }}
              />
              <div className="flex gap-10 justify-center">
                <Button onClick={() => setOverlayVisible(false)}>Cancel</Button>
                <Button>{isEditMode ? 'Update' : 'Add'}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default TaskForm;
