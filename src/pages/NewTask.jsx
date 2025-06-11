import React, { useState } from 'react'
import Form from '../components/MyForm'
import { useTaskForm } from '../components/FormFunctions'

export const NewTask = () => {
  const { formData, handleChange, handleSubmit } = useTaskForm();  

  return (
    <>
      <main className='wrapper'>
        <Form formTitle='New Task' formData={formData} onChange={handleChange} onSubmit={handleSubmit}/>
      </main>
    </>
  )
}
