import React from 'react'
import BackLogo from '../assets/images/back-icon.png'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

const Form = ({ formTitle }) => {
  return (
    <>

      <section className='items-center flex gap-4 pb-15'>
        <Link to='/all-tasks' className='flex items-center gap-4'>
          <img className='w-[15px] md:w-[18px] h-[26px] md:h-[36px]' src={BackLogo} alt='Back icon' />
          <span className='fon-[400] text-[35px] md:text-[50px] text-[#292929]'>{formTitle}</span>
        </Link>
      </section>

      {/* FORM */}
      <section>

        <form className='flex flex-col gap-11'>
          <fieldset className='pb-5 pt-2 border-1 border-[#B8B6B6] px-10 rounded-[5px] w-full h-full'>
            <legend className='text-[#9C9C9C] font-[400] lg:text-[30px] text-[25px] '>Task Title</legend>
              <input className='placeholder:font-[400] focus:outline-none focus:border-transparent placeholder-[#CCCCCC] text-[#292929] text-[22px] border-0 w-full' type='text' placeholder='E.g Project Defense, Assignment ...' />
          </fieldset>

          <fieldset className='pb-5 pt-2 border-1 border-[#B8B6B6] px-10 rounded-[5px] w-full h-full'>
            <legend className='text-[#9C9C9C] font-[400] lg:text-[30px] text-[25px]'>Description</legend>
              <textarea className='placeholder:font-[400] focus:outline-none focus:border-transparent placeholder-[#CCCCCC] text-[#292929] text-[22px] border-0 w-full h-[262px]' type='text' placeholder='Briefly describe your task...'></textarea>
          </fieldset>

          <div className='relative w-full h-full'>
            <fieldset className='pb-5 pt-2 border border-[#B8B6B6] px-10 rounded-[5px] w-full h-full'>
              <legend className='text-[#9C9C9C] font-[400] lg:text-[30px] text-[25px]'>Tag</legend>

              {/* Fake Placeholder Tags */}
              <div className='font-[400] text-[22px] absolute left-12 top-[55x] flex gap-2 pointer-events-none' id='placeholder-tags'>
                <span className='bg-[#9C9C9C] text-white px-2  rounded'>Urgent</span>
                <span className='bg-[#9C9C9C] text-white px-2 rounded'>Important</span>
              </div>

              {/* Input */}
              <input
                type='text'
                placeholder=''
                className='placeholder:font-[400] focus:outline-none focus:border-transparent text-[#292929] text-[22px] border-0 w-full bg-transparent relative z-10'
                onChange={(e) => {
                  const tags = document.getElementById('placeholder-tags');
                  if (tags) tags.style.display = e.target.value ? 'none' : 'flex';
                }}
              />
            </fieldset>

            <button className='mb-10 mt-20 w-full bg-[#974FD0] lg:h-[84px] h-[60px] rounded-[8px] font-[500] lg:text-[35px] text-[25px] text-[#FAF9FB]'>Done</button>
          </div>
        </form>
        
        <ScrollToTop />

      </section>

    </>
  )
}

export default Form