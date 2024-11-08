
import React from 'react';
interface LabelProps {
    children: React.ReactNode;
    htmlFor?: string; 
}
const Label: React.FC<LabelProps> = ({ children, htmlFor }) => (
    <label  htmlFor={htmlFor} className="block text-sm font-medium text-gray-700" >
        {children}
    </label>
);
export default Label;
