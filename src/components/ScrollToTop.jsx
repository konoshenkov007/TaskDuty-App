import React from 'react'

const ScrollToTop = () => {
  function onTop(){
    window.scrollTo(0,0);
  }
  return (
    <p onClick={onTop} style={{userSelect: "none"}} className='cursor-pointer font-[400] text-[#974FD0] text-[26px] underline text-center'>Back To Top</p>

  )
}

export default ScrollToTop