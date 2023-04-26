import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useRouter } from 'next/router'

const Layout = ({children}: any) => {
    const router = useRouter();
  return (
    <div>
        {/* <div className='flex justify-around'>
            <div><Sidebar/></div>
           <div> <Header/></div>
        </div>
        <main className='ml-60 w-full'>
           {children}
       </main> */}
    </div>
  )
}

export default Layout