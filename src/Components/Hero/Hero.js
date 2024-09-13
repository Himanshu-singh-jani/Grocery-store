import React from 'react'
import orange from '../../assets/orange.png.png'
import Navbar from  '../Navbar/Navbar'
import {useState} from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HERO=()=>{

  const [sidebar,setsidebar]=useState(false)
    return(
      <main className="md:px-12 md:py-6 bg-primaryDark">
        <section className="relative min-h-[650px]
        bg-gradient-to-r from-primary to-secondary
        w-full md:rounded-xl shadow-md">
          <div className="container">
            {/* navbar section */}
            <Navbar sidebar={sidebar} setsidebar={setsidebar}/>
            {/* hero section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[650px]">
              {/* text content center */}
              <div className="text-white mt-[100px]  md:mt-0 p-4 space-y-4 ">
             
                <h1 className="text-3xl pl-6
                md:pl-14">01_____________</h1>
                <h1 className="text-5xl font-bold uppercase text-shadow">A Healthy Fruits</h1>
                <p>Fruits are the mature ovary or ovaries of one or more flowers. They are found in three main anatomical categories: aggregate fruits, multiple fruits, and simple fruits.</p>
                <button className="primary-btn">Shop Now</button>
              </div>
              {/* image section */}
              <div>
                <img alt="Not found" src={orange} 
                className="relative  w-[400px] img-shadow"
                />
              </div>
              {/* blanke div section */}
              <div className="md:hidden"></div>
              
            </div>
            
          </div>

          {/* background large text  */}
          <h1 className='large-text z-10'>Orange</h1>
          
          {/* sidebar section */}
         {sidebar &&(
          <div className='absolute top-0 right-0 w-[120px]
            h-full bg-gradient-to-b from-primary to-secondary z-10'>
              <div className='w-full h-full flex justify-center
              items-center'>
                <div className='text-white flex flex-col justify-center items-center
                gap-6'>
                  {/* line */}
                  <div className='w-[1px] h-[70px] bg-white'></div>
                  <div className='inline-block border border-white rounded-full p-2 cursor-pointer'>
                    <FaFacebookF  className='text-2xl'/>
                    </div>
                    <div className='inline-block border border-white rounded-full p-2 cursor-pointer'>
                    <FaInstagram   className='text-2xl'/>
                    </div>
                    <div className='inline-block border border-white rounded-full p-2 cursor-pointer'>
                    <FaLinkedin  className='text-2xl'/>
                    </div>
                  <div className='w-[1px] h-[70px] bg-white'></div>
                </div>
              </div>
            </div>
          )}

        </section>
      </main>
    )
} 
export default HERO;