import React, { useState } from 'react';
import Button from '@/components/atoms/Button';
import FormField from '../molecules/FormField';

interface TaskItemProps {
  taskId: string;
  taskName: string;
  taskDes: string;
  taskTime: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onEdit: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  onEdit,
  taskName,
  taskDes,
  taskTime,
  completed,
  onToggle,
  onDelete,
}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleTaskClick = () => {
    setModalVisible(true); // Show the full description modal
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
 <div className="ms-10 me-10">
  <div className="flex flex-col sm:flex-row items-start justify-between p-2 border-b bg-white">
    <div className="flex items-center gap-2 sm:w-1/3 w-full mb-2 sm:mb-0">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
        className="w-4 h-4"
      />
      <span className={completed ? 'line-through text-gray-500 font-bold' : 'font-bold'}>
        {taskName}
      </span>
    </div>

  
    <div className="sm:w-1/3 w-full mb-2 sm:mb-0">
      <span
        className="truncate cursor-pointer"
        onClick={handleTaskClick}
      >
        {taskDes.length > 40 ? `${taskDes.substring(0, 40)}...` : taskDes}
      </span>
    </div>

  
    <div className="sm:w-1/3 w-full mb-2 sm:mb-0">
      <span>{taskTime}</span>
    </div>


    <div className=" flex flex-col sm:flex-row sm:w-auto w-full mt-2  sm:mt-0">
      <Button type="delete" onClick={onDelete}>Delete</Button>
      <Button type="edit" onClick={onEdit}>Edit</Button>
    </div>
  </div>
</div>



      {/* Full description modal */}
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
         
            <FormField placeholder="Task Title" label="Title" type="text" value={taskName}/>

            <textarea
              value={taskDes}   className="p-2 mt-6 border rounded focus:outline-none focus:ring-1 focus:ring-mainColor" style={{ width:"100%" }}
            />
            <div className="flex justify-center mt-4">
              <Button onClick={handleCloseModal}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskItem;
