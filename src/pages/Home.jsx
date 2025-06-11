import React from 'react'
import HerroImage from '../assets/images/hero-image.png'
import { Link } from 'react-router-dom'

export const Home = () => {
  console.log(HerroImage);
  return (
    <>
      <main className='wrapper'>
        <section className='grid lg:grid-cols-4 lg:gap-35 gap-10 items-center'>
          {/* HERO TEXT */}
          <article className='col-span-2 order-2 lg:order-1 md:pt-6 '>
            <h1 className='font-500 text-[36px] md:text-[50px]'>
              <span className='text-[#292929]'>Manage your Tasks on </span>
              <span className='text-[#974FD0]'>TaskDuty</span>
            </h1>

            <p className='font-[400] text-[20px] md:text-[24px] text-[#737171] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl semper porttitor. Nec accumsan.</p>

            <button className='w-full bg-[#974FD0] lg:w-[201px] md:h-[60px] h-[50px] rounded-[8px] text-[#FAF9FB] mt-6 font-[500] text-[24px]' >
              <Link to='/all-tasks'>Go to My Tasks</Link>
            </button>

          </article>


          {/* HERO IMAGE */}
          <aside className='col-span-2 order-1 lg:order-2 pt-8 '>
            <img src={HerroImage} alt='Hero Image' />
          </aside>
        </section>
      </main>
    </>
  )
}