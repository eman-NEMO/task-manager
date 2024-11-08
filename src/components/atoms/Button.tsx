// src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  type?: 'add' | 'delete' | 'edit' | 'Filter'; 
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type = 'submit' }) => {
  let buttonClass = " py-2 px-12  font-semibold rounded-md focus:outline-none";

  // Switch case to apply different styles based on the button type
  switch (type) {
    case 'add':
      buttonClass = `${buttonClass} bg-[#4f0fb9] text-white`;
      break;
    case 'delete':
      buttonClass = `${buttonClass} px-10 py-1 m-1 bg-red-500 text-white hover:bg-red-600`;
      break;
    case 'edit':
      buttonClass = `${buttonClass} px-10 py-1 m-1 text-white  bg-yellow-500 hover:bg-yellow-600`;
      break;
    case 'Filter':
      buttonClass = `${buttonClass} text-black bg-white mb-5`;
      break;
    default:
      buttonClass = `${buttonClass} bg-[#4f0fb9] text-white px-10 py-1`;
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
