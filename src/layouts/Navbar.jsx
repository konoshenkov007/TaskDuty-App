import React from 'react'
import navLogo from '/nav-logo.png'
import { Link, useMatch } from 'react-router-dom'
import NavLinks from '../components/NavLinks'

export const Navbar = () => {
  const isTask = useMatch("/all-tasks");
  const isNew = useMatch("/new-task");
  return (
    <>
        <nav className='wrapper flex justify-between border-b-1 border-b-[#B8B6B6]'>
            {/* NAV LOGO */}
            <div className='flex items-center gap-2'>
                <Link to="/" className='flex items-center gap-2'>
                    <img className='w-[39px] h-[41px]' src={navLogo} alt='Nav Logo' />
                    <span className='text-[27.37px] font-600 text-[#2D0050]'>TaskDuty</span>
                </Link>
            </div>

            <NavLinks isTask={isTask} isNew={isNew} />
            

        </nav>
    </>
  )
}
