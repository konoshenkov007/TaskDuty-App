import React from 'react'
import EditIcon from '../assets/images/edit-icon.png'
import ThrashIcon from '../assets/images/thrash-icon.png'
import { Link } from 'react-router-dom'

export const MappedTasks = ({_id, description, tag, taskTitle}) => {
  return (
    <>
        <div className='flex justify-between items-center border-b-[0.5px] border-b-[#B8B6B6]'>
            <h3 className={`${ tag === 'Urgent' ? "text-[#F38383]" : "text-[#73C3A6]"} text-[24px] font-[400] pb-2`}>{tag}</h3>
            <div className='font-[500] text-[24px] flex items-center gap-4 py-2'>
                <button className='bg-[#974FD0] cursor-pointer text-[#FAF9FB] w-[50px] md:w-[126px] h-[40px] md:h-[50px] rounded-[8px] flex items-center justify-center gap-2'>
                    <Link className='items-center gap-1 flex'>
                        <img className='w-8 h-8' src={EditIcon} alt='Edit Icon' />
                        <span className='hidden md:block'>Edit</span>
                    </Link>
                </button>

                <button className='border-1 border-[#974FD0] text-[#974FD0] cursor-pointer w-[50px] md:w-[126px]  h-[40px] md:h-[50px] rounded-[8px] flex items-center justify-center gap-2'>
                    <Link className='items-center gap-1 flex'>
                        <img className='w-8 h-8' src={ThrashIcon} alt='Edit Icon' />
                        <span className='hidden md:block'>Delete</span>
                    </Link>
                </button>
            </div>
        </div>
        
        <h1 className='font-[400] text-[28px] md:text-[35px] py-2 text-[#292929]'>{taskTitle}</h1>
        <p className='text-[18px] md:text-[24px] font-[400] text-[#737171]'>{description}</p>
    </>
  )
}
