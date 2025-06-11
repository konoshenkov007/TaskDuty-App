import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Form from '../components/MyForm'
import { useTaskForm } from '../components/FormFunctions'
import { taskData } from './db'

export const EditTask = () => {
  const { formData, handleChange, handleSubmit, setFormData } = useTaskForm();  
  
  const { taskID } = useParams();
  const findTask = taskData.find((task) => String(task._id) === String(taskID));
  
  useEffect(()=> {
    if(findTask){
      setFormData({
        taskTitle: findTask.taskTitle || '',
        description: findTask.description || '',
        tag: findTask.tag || '',
      })
    }
  }, [findTask]);

  return (
    <>
      <main className='wrapper'>
        <Form formTitle='Edit Task' formData={formData} onChange={handleChange} onSubmit={handleSubmit}/>
      </main>
    </>
  )
}
