import { useState } from 'react';

export const useTaskForm = () => {
  const [formData, setFormData] = useState({
    taskTitle: '',
    description: '',
    tag: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'tag') {
      const tags = document.getElementById('placeholder-tags');
      if (tags) tags.style.display = value ? 'none' : 'flex';

      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submit logic here
    console.log('Submitting form:', formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    setFormData,
  };
};
