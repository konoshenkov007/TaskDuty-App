import React, { useState } from 'react'
import Form from '../components/MyForm'

export const NewTask = () => {
  const [formData, setFormData] = useState({
    taskTitle:"",
    description:"",
    tag:""
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]:value}));

    if(name === 'tag'){
      const tags = document.getElementById('placeholder-tags');
      if (tags) tags.style.display = value ? 'none' : 'flex';
      document.getElementById('tag').style.backgroundColor = "#9C9C9C";
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <main className='wrapper'>
        <Form formTitle='New Task' formData={formData} onChange={handleChange} onSubmit={handleSubmit}/>
      </main>
    </>
  )
}
