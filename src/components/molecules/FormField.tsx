// src/components/molecules/FormField.tsx
import React from 'react';
import Input from '@/components/atoms/Input';
import Label from '@/components/atoms/Label';

interface FormFieldProps {
    label: string;
    type: string;
    value?: string;
    placeholder?:string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const FormField: React.FC<FormFieldProps> = ({ label, type, value, onChange,placeholder }) => (
    <div className="form-field">
        <Label>{label}</Label>
        <Input type={type} value={value} onChange={onChange}  placeholder={placeholder}/>
    </div>
);
export default FormField;
