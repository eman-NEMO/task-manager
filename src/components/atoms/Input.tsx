
import React from 'react';
interface InputProps {
    type: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}
const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => (
    <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`mt-2 block w-full px-4 p-2 border rounded  border-gray-300  focus:outline-none focus:ring-1 focus:ring-mainColor`} // You can add additional classes here
    />
);

export default Input;
