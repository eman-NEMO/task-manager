import React from 'react'
import LoginForm from '@/components/organisms/LoginForm'
export default function index() {
  return (
 <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
     <LoginForm/>
  
     </div>
     </div>
 
 </>

  )
}
