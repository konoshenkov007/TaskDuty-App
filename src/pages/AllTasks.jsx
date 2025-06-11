import React from 'react'
import AddIcon from '../assets/images/add-icon.png'
import { Link } from 'react-router-dom'
import { taskData } from './db'
import { MappedTasks } from '../components/MappedTasks'
import ScrollToTop from '../components/ScrollToTop'

export const AllTasks = () => {
  return (
    <>
        <main className='wrapper'>
          <section className='flex justify-between items-center font-[500] py-2 md:py-4'>
            <h1 className='text-[25px] md:text-[50px] text-[#292929] '>My Tasks</h1>

            <Link to='/new-task' className='md:text-[24px] text-[20px] text-[#974FD0] flex gap-3 items-center'>
              <img className='w-[15px] h-[15px] md:w-[18px] md:h-[18px]' src={AddIcon} alt='add-icon' />
              Add New Task
            </Link>
          </section>

          <section className='flex flex-col gap-18 items-center pt-5'>
            {
              taskData.map((task) => {
                const {_id, description, tag, taskTitle} = task;
                return(
                  <article key={_id} className='border-[#B8B6B6] border-[0.5px] py-6 px-3 rounded-[10px]'>
                    
                    <MappedTasks thisTaskID={_id} taskTitle={taskTitle} tag={tag} description={description}/>
                  </article>
                )
              })
            }

            <ScrollToTop />
          </section>
        </main>
    </>
  )
}
