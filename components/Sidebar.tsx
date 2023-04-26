import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import IconBiz from '../assets/material-symbols_add-business-rounded (1).png'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Sidebar = ({children}: any) => {
  const router = useRouter();
  return (
    <>
    <div className='flex'>
        <div className='fixed w-60 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
          <div className='flex flex-col items-start  side-text'>
          <Link href='/' className='text-2xl h-[18vh]'>
              <div className='flex justify-around'>
                <span className='pl-3' >
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_dd_767_39480)"> <rect width="32" height="32" transform="translate(3 2)" fill="#3399FF"/> </g>
                <defs>
                <filter id="filter0_dd_767_39480" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"> <feFlood floodOpacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="1"/> <feGaussianBlur stdDeviation="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_767_39480"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="1"/>  <feGaussianBlur stdDeviation="1.5"/>  <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"/>  <feBlend mode="normal" in2="effect1_dropShadow_767_39480" result="effect2_dropShadow_767_39480"/>  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_767_39480" result="shape"/>
                </filter> </defs>
                </svg>
                </span>
                <p className='ml-4 text-base font-semibold'>  Ceton</p>
              </div>
            </Link>

            <Link 
                  className={`sidebar__link ${
                    router.pathname === '/' ? "sidebar__link--active" : ""
                  }`}
                  href='/' >
              <button className='flex justify-around my-3  rounded-lg'>
                <span className='pl-3'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.193 11.8622L11.0985 12.4801L11.7221 12.4365L19.3748 11.9019C19.3749 11.9139 19.375 11.9258 19.375 11.9377C19.375 16.1834 15.9329 19.6255 11.6873 19.6255C7.44162 19.6255 3.99951 16.1841 3.99951 11.9377C3.99951 7.69295 7.43959 4.25132 11.6856 4.25C11.908 4.25224 12.1301 4.26379 12.3514 4.28459L11.193 11.8622Z" stroke="#667085"/>
                <path opacity="0.5" d="M20.9503 9.39742L13.9305 9.88786L14.994 2.93127C16.5253 3.26906 17.9209 4.0687 18.9887 5.22791C20.0566 6.38714 20.7392 7.8436 20.9503 9.39742Z" stroke="#344054"/>
                </svg>
                </span>
                <p className='ml-4 text-base font-semibold '> Dashboard</p>
              </button>
            </Link>

            <Link 
                className={`mb-8px sidebar__link ${
                  router.pathname === '/view/clients/ViewClient' ? "sidebar__link--active" : ""
                }`}
                href='/view/clients/ViewClient'
            >
              <button className='flex justify-around my-3 rounded-lg'>
                <span className='pl-3'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.75 17.25C18.75 16.3936 18.5259 15.6451 18.1521 14.9955C18.6678 15.1469 19.1683 15.3317 19.6151 15.5485C20.7663 16.1071 21.25 16.714 21.25 17.25V18.25H18.75V17.25ZM17.75 8.5C17.75 10.0158 16.5158 11.25 15 11.25C14.8718 11.25 14.7461 11.2406 14.6225 11.2223C15.0245 10.3989 15.25 9.47339 15.25 8.5C15.25 7.52661 15.0245 6.60109 14.6225 5.77771C14.7461 5.75944 14.8718 5.75 15 5.75C16.5158 5.75 17.75 6.98421 17.75 8.5Z" stroke="#667085" strokeOpacity="0.5" strokeWidth="1.5"/>
                <path d="M14.8954 17.2575C14.9415 17.3334 14.9757 17.3979 15 17.4478V18H3V17.25C3 17.0342 3.09991 16.7719 3.44324 16.4547C3.79352 16.1311 4.3267 15.8219 4.9943 15.5546C6.32241 15.0226 7.93365 14.7535 8.97964 14.75C11.7787 14.8704 13.3011 15.6796 14.1051 16.358C14.5143 16.7033 14.7583 17.0319 14.8954 17.2575ZM11.5 8.5C11.5 9.87772 10.3777 11 9 11C7.62228 11 6.5 9.87772 6.5 8.5C6.5 7.12228 7.62228 6 9 6C10.3777 6 11.5 7.12228 11.5 8.5Z" stroke="#667085" strokeWidth="2"/>
                </svg>
                </span>
                <p className='ml-4 text-base font-semibold  side-text'>Clients</p>
              </button>
            </Link>
            <Link href='/view/businesses/NewBusinesses' className='mb-8px'>
              <div className='flex justify-around my-3'>  
                <Image
                className='ml-3'
                src={IconBiz}
                alt='icon'/>
                <p className='ml-4 text-base font-semibold'> New businesses</p>
              </div>
            </Link>
            <Link href='/' className='mb-8px'>
              <div className='flex justify-around my-3'>
                <span className='pl-3' >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
                <p className='ml-4 text-base font-semibold'> Payments</p>
              </div>
            </Link>
            <Link href='/' className='mb-8px'>
              <div className='flex justify-around my-3'>
                <span className='pl-3'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#667085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </span>
                <p className='ml-4 text-base font-semibold'> Setup</p>
              </div>
            </Link>
            <Link href='/' className='mb-8px'>
              <div className='flex justify-around my-3'>
                <span className='pl-3' >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8C15 8.79565 14.6839 9.55871 14.1213 10.1213C13.5587 10.6839 12.7956 11 12 11C11.2044 11 10.4413 10.6839 9.87868 10.1213C9.31607 9.55871 9 8.79565 9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5ZM12 15C14.0885 15 15.929 15.425 17.2103 16.0657C18.5511 16.7361 19 17.4776 19 18V19H5V18C5 17.4776 5.44887 16.7361 6.78971 16.0657C8.071 15.425 9.91146 15 12 15Z" stroke="#667085" strokeWidth="2"/>
                </svg>
                </span>
                <p className='ml-4 text-base font-bold'> Profile</p>
              </div>
            </Link>
          </div>
        </div>
       <main className='ml-60 w-full'>
        {children}
       </main>
    </div>
    </>
  )
}

export default Sidebar