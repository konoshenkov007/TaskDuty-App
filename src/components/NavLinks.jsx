import React from 'react'
import { Link } from 'react-router-dom'
import menuIcon from '../assets/images/menu-open.png'
import profileImage from '../assets/images/profile-image.png'

const NavLinks = ({isNew, isTask}) => {
    
    return (
        <>
            {/* NAV LINKS */}
            <div className='items-center gap-10 hidden md:flex'>
                <ul className='flex items-center gap-10 font-500 text-[22px] text-[#292929]'>
                    {!isNew && <li><Link to="/new-task">New Task</Link></li>}
                    {!isTask && <li><Link to="/all-tasks">All Tasks</Link></li>}


                </ul>
                <div>
                    <img src={profileImage} alt='Profile Image' />
                </div>
            </div>

            {/* DROPDOWN */}
            <div className="dropdown dropdown-bottom dropdown-end md:hidden">
                <div tabIndex={0} role="button" className="btn bg-[#974FD0] rounded-lg">
                    <img src={menuIcon} alt='Menu' />
                </div>
                <ul tabIndex={0} className="border-[#974FD0] border-1 text-[22px] text-[#974FD0] dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><Link to="/new-task">New Task</Link></li>
                    <li><Link to="/all-tasks">All Tasks</Link></li>
                </ul>
            </div>
        </>
    )
}

export default NavLinks