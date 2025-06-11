import React from 'react'
import BackLogo from '../assets/images/back-icon.png'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Form = ({ formTitle, formData, onChange, onSubmit }) => {
  
  const tagSelect = document.getElementById('tag');
  if (tagSelect) tagSelect.style.backgroundColor = '#9C9C9C';
  
  return (
    <>

      <section className='items-center flex gap-4 pb-10'>
        <Link to='/all-tasks' className='flex items-center gap-4 py-2 md:py-4'>
          <img className='w-[15px] md:w-[18px] h-[26px] md:h-[36px]' src={BackLogo} alt='Back icon' />
          <span className='font-[400] text-[25px] md:text-[50px] text-[#292929]'>{formTitle}</span>
        </Link>
      </section>

      {/* FORM */}
      <section>

        <form onSubmit={onSubmit} className='flex flex-col gap-11'>
          <fieldset className='pb-5 pt-2 border-1 border-[#B8B6B6] px-10 rounded-[5px] w-full h-full'>
            <legend className='text-[#9C9C9C] font-[400] lg:text-[30px] text-[25px] '>Task Title</legend>
              <input onChange={onChange} name='taskTitle' value={formData.taskTitle} id='taskTitle' className='placeholder:font-[400] focus:outline-none focus:border-transparent placeholder-[#CCCCCC] text-[#292929] text-[22px] border-0 w-full' type='text' placeholder='E.g Project Defense, Assignment ...' />
          </fieldset>

          <fieldset className='pb-5 pt-2 border-1 border-[#B8B6B6] px-10 rounded-[5px] w-full h-full'>
            <legend className='text-[#9C9C9C] font-[400] lg:text-[30px] text-[25px]'>Description</legend>
              <textarea onChange={onChange} name='description' value={formData.description} id='description'  className='placeholder:font-[400] focus:outline-none focus:border-transparent placeholder-[#CCCCCC] text-[#292929] text-[22px] border-0 w-full h-[262px]' type='text' placeholder='Briefly describe your task...'></textarea>
          </fieldset>
            
            <div className="relative w-full h-full">
              <fieldset className="pb-5 pt-2 border border-[#B8B6B6] px-10 rounded-[5px] w-full h-full">
                <legend className="text-[#9C9C9C] font-[400] lg:text-[30px] text-[25px]">Tag</legend>

              {/* Fake Placeholder Tags */}
                {
                  !formData.tag ? (
                    <div
                      id="placeholder-tags"
                      className="font-[400] text-[22px] absolute left-10 lg:top-[53px] top-[50px] flex gap-2 pointer-events-none z-0"
                    >
                      <span className="bg-[#9C9C9C] text-white px-2 py-1 rounded">Urgent</span>
                      <span className="bg-[#9C9C9C] text-white px-2 py-1 rounded">Important</span>
                    </div>
                  ) : null
                }


                {/* Select Field */}
                <select
                  id='tag'
                  name="tag"
                  value={formData.tag}
                  onChange={onChange}
                  className="bg-transparent text-black cursor-pointer px-2 py-1 rounded text-[22px] font-[400] appearance-none w-fit border-0 focus:outline-none focus:border-transparent"
                >
                  <option value="" disabled hidden></option>
                  <option value="Urgent">Urgent</option>
                  <option value="Important">Important</option>
                </select>
              </fieldset>
            </div>


            <button type='submit' className='mb-10 mt-20 w-full bg-[#974FD0] lg:h-[84px] h-[60px] rounded-[8px] font-[500] lg:text-[35px] text-[25px] text-[#FAF9FB]'>Done</button>
        </form>
        
        <ScrollToTop />

      </section>

    </>
  )
}

export default Form