// src/components/organisms/LoginForm.tsx
import React, { useState } from 'react';
import FormField from '@/components/molecules/FormField';
import Button from '@/components/atoms/Button';
import { useRouter } from 'next/router';  
const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(email=="eman@gmail.com" && password=="123"){
            router.push('/tasks');  
        } else {
          alert("Invalid login credentials!");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <FormField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FormField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
         <div className='mt-5'>
         <Button onClick={handleSubmit}>Login</Button>
         </div>
        </form>
    );
};
export default LoginForm;
