import React from 'react'

const SideBar = ({condition}) => {
  return  (

    <>

    

    { condition? <div className='w-[20%] h-[100vh] bg-red-500 duration-5'> 
    

      
        </div>: null }
        </>
    
   
  )
}

export default SideBar
