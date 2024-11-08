import React from 'react'
import TaskTemple from '@/components/templates/TaskTemplate'
import { TaskProvider } from '@/Context/TaskContext';
export default function index() {
  return (
    // <TaskProvider>
    <TaskTemple/>
    // </TaskProvider>
  )
}
