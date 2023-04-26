import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {FaHashtag} from 'react-icons/fa'
import {AiOutlineArrowDown} from 'react-icons/ai'
import Avatar from '../../../assets/Avatar.svg'
import Image from 'next/image'

const ProgressBar = () => {
  return (
    <div className='shadow w-[525px] relative lg:h-[297px] h-[70vh] m-auto  border rounded-lg bg-white'>
        <div className='flex justify-between p-4'>
           <h1 className='text-lg font-bold'>Top Clients</h1> 
           <BsThreeDotsVertical  className='text-gray-500  ml-12 cursor-pointer' />
        </div> 
       
        <section className='flex justify-between ml-4 mr-4'>
            <div>
            <p className='card-title text-sm font-normal h-[6vh] text-gray-900'><span><FaHashtag className='inline text-sm' /> </span>Clients <span><AiOutlineArrowDown className='inline text-sm text-gray-600 font-medium' /></span></p>
            <div className='flex justify-between gap-1 '>
              <ul className='text-base font-normal text-color: #667085;'>
                <li>#001</li>
                <li>#002</li>
                <li>#003</li>
                <li>#004</li>
                <li>#005</li>
              </ul>
           
          
              <ul >
                <li className='p-1'>
                    <Image
                     src={Avatar}
                     alt='avatar'
                     width={28}
                     height={28}

                     />
                </li>
                <li className='p-1'>
                <Image
                     src={Avatar}
                     alt='avatar'/>
                </li>
                <li className='p-1'>
                <Image
                     src={Avatar}
                     alt='avatar'/>
                </li>
                <li className='p-1'>
                <Image
                     src={Avatar}
                     alt='avatar'/>
                </li>
                <li className='p-1'>
                <Image
                     src={Avatar}
                     alt='avatar'/>
                </li>
              </ul>

           
              <ul className='text-base font-normal text-color: #667085;'>
                <li>Business 1</li>
                <li>Business 2</li>
                <li>Business 3</li>
                <li>Business 4</li>
                <li>Business 5</li>
              </ul>
          </div>
            </div>
            <div>
            <p className='card-title text-sm font-normal  h-[8vh] text-gray-900'>Inflow</p>
            <div className=' flex justify-between h-[6.5vh]'>
            <div className='business-box w-[174px] h-[7px] bg-gray-100 rounded-lg border-0 mt-1'>
               <div className='business-bar w-[78%] h-[7px] bg-blue-400  rounded-lg'>
               </div>
            </div>
              <p className='pl-2 pb-9 text-xs'>78%</p>
            </div>
            <div className=' flex justify-between h-[6.5vh]'>
            <div className='business-box w-[174px] h-[7px] bg-gray-100 rounded-lg border-0 mt-1'>
               <div className='business-bar w-[72%] h-[7px] bg-blue-400  rounded-lg'>
               </div>
            </div>
              <p className='pl-2 pb-9 text-xs'>72%</p>
            </div>
            <div className=' flex justify-between h-[6.5vh]'>
            <div className='business-box w-[174px] h-[7px] bg-gray-100 rounded-lg border-0 mt-1'>
               <div className='business-bar w-[60%] h-[7px] bg-blue-400  rounded-lg'>
               </div>
            </div>
              <p className='pl-2 pb-9 text-xs'>60%</p>
            </div>
            <div className=' flex justify-between h-[6.5vh]'>
            <div className='business-box w-[174px] h-[7px] bg-gray-100 rounded-lg border-0 mt-1'>
               <div className='business-bar w-[42%] h-[7px] bg-blue-400  rounded-lg'>
               </div>
            </div>
              <p className='pl-2 pb-9 text-xs'>42%</p>
            </div>
            <div className=' flex justify-between h-[6.5vh]'>
            <div className='business-box w-[174px] h-[7px] bg-gray-100 rounded-lg border-0 mt-1'>
               <div className='business-bar w-[38%] h-[7px] bg-blue-400  rounded-lg'>
               </div>
            </div>
              <p className='pl-2 pb-9 text-xs'>38%</p>
            </div>
            </div>

            <div>
            <p className='card-title text-sm font-normal text-gray-900 h-[8vh] '>Growth</p>
            <div className='h-[6.5vh]'>
            <p className='bg-green-100 rounded-lg text-sm w-[48px] flex justify-around '>
          <span className='pt-0.5 text-xs'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-xs font-medium text-green-900 '>5%</span>
         </p>
         </div>
         
         <div className='h-[6.5vh]'>
         <p className='bg-green-100 rounded-lg text-sm w-[48px] flex justify-around'>
          <span className='pt-0.5 text-xs'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-xs font-medium text-green-900'>5%</span>
         </p>
         </div>

         <div className='h-[6.5vh]'>
         <p className='bg-green-100 rounded-lg text-sm w-[48px] flex justify-around'>
          <span className='pt-0.5 text-xs'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-xs font-medium text-green-900'>5%</span>
         </p>
         </div>

         <div className='h-[6.5vh]'>
         <p className='bg-green-100 rounded-lg text-sm w-[48px] flex justify-around'>
          <span className='pt-0.5 text-xs'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-xs font-medium text-green-900'>5%</span>
         </p>
         </div>

         <div className='h-[6.5vh]'>
         <p className='bg-green-100 rounded-lg text-sm w-[48px] flex justify-around'>
          <span className='pt-0.5 text-xs'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-xs font-medium text-green-900'>5%</span>
         </p>
         </div>
            </div>
        </section>
    </div>
  )
}

export default ProgressBar