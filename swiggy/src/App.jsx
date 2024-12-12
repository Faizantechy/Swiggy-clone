import React, { useState } from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'




const App = () => {

const [isOpen,setIsOpen]=useState(false)  



  return (

    
    <div className='relative'>

<div className="overlay bg-black h-auto">

      <NavBar setSideBar={setIsOpen} />


      <div className="content-part w-full h-full flex">

      <SideBar condition={isOpen}/>

      <div className="content w-[80%] h-full px-5 py-4">

<h1 className='text-2xl font-bold '>What's on your mind?</h1>
<div className="cards mt-5 overflow-x-auto w-full flex gap-3 text-center bg-white border-2 border-red-500 text-black ">

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>

  <div className="card w-[130px] h-[130px] flex-shrink-0  ">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJfil_12iDPKI6VUiqFqLBG8FpVdN_PzpAnA&s" className='w-[100%] h-[80%]' alt="" />
    <h2 className='font-bold'>Burger</h2>

   
  </div>
</div>

      </div>
      </div>

      
    </div>
    </div>

  
  )
}

export default App
