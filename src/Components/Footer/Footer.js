
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-primary to-secondary pt-12 pb-8 text-white'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
             gap-8  '>
                {/* company details section */}
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold'>Orange Mint</h1>
                    <p className='text-sm max-w-[300px ]'>A fruit stand is a primarily open-air business venue that sells seasonal fruit and many fruit products from local growers. It might also sell vegetables and various processed items derived from fruit.</p>
                </div>

                {/* navlink section */}
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold'>Quick Links</h1>
                    <div className='grid grid-cols-2 gap-3'>

                        {/* first colom links */}
                        <div>
                            <ul className='space-y-2'>
                                <li>
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                                <li>
                                    <a href='#'>Search Fruit</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                            </ul>
                        </div>

                        {/* second colom links */}
                        <div>
                            <ul className='space-y-2'>
                                <li>
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <a href='#'>About</a>
                                </li>
                                <li>
                                    <a href='#'>Contact</a>
                                </li>
                                <li>
                                    <a href='#'>Search Fruit</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* social link section */}
                <div className='space-y-6'>
                    <h1 className='text-4xl font-bold'>Follow us</h1>
                    <div>
                        <p>+1 (234) 456-7890</p>
                        <p>New Delhi, India</p>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <FaFacebookF className='text-3xl hover:scale-105 duration-300'/>
                        <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
                        <FaTelegramPlane className='text-3xl hover:scale-105 duration-300' />
                        <FaGoogle className='text-3xl hover:scale-110 duration-300' />
                    </div>
                </div>

             </div>
        </div>
    </div>
  )
}

export default Footer;