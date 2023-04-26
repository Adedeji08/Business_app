import BarChart from '@/components/utilities/charts/BarChart'
import LineChart from '@/components/utilities/charts/LineChart'
import PieCharts from '@/components/utilities/charts/PieCharts'
import ProgressBar from '@/components/utilities/charts/ProgressBar'
import React, {useState} from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'

const data1 = [
   {
     label: "Organic",
     data: [20, 30, 40, 50,90,30,20,70,50,30,45,80],
     backgroundColor: "#2978C8",
//      borderRadius: [
//       { topLeft: 12, topRight: 12, bottomLeft: 12, bottomRight: 12 },
//       { topLeft: 0, topRight: 0, bottomLeft: 12, bottomRight: 12 },
//   ]
   },
   {
     label: "Referral",
     data: [25, 35, 45, 55, 90,30,20,70,50,30,45,65],
     backgroundColor: "#3399FF", 
   },
   {
     label: "Direct",
     data: [25, 35, 45, 55, 90,30,20,70,50,30,45,70],
     backgroundColor: "#BEBFFF", 
   },
 ];
 const title1 = "Total spend by partners";

 const label1 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep',
 'Oct', 'Nov', 'Dec'
]

const data2 = [
   {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
]

const SuperAdminDashboard = () => {

  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const [dropdownVisibility2, setDropdownVisibility2] = useState(false);
  const [dropdownVisibility3, setDropdownVisibility3] = useState(false);
  const [dropdownVisibility4, setDropdownVisibility4] = useState(false);
  const toggleDropDownVisibility = () => {
    setDropdownVisibility(!dropdownVisibility);
  }

  const toggleDropDownVisibility2 = () => {
    setDropdownVisibility2(!dropdownVisibility2);
  }
    const toggleDropDownVisibility3 = () => {
    setDropdownVisibility3(!dropdownVisibility3);
  }

  const toggleDropDownVisibility4 = () => {
    setDropdownVisibility4(!dropdownVisibility4);
  }
   
  return (
   <div>
    <div className='grid lg:grid-cols-8 gap-3'>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full h-[114px] pt-2 border rounded-lg shadow'>
      {
              dropdownVisibility &&  
              <div className='w-[140px]  bg-white shadow absolute dropvisible rounded-md ring-1 ring-black ring-opacity-5 mt-20 ml-8 left-23 '>
                <ul className='pl-4'>
                  <li className=' hover:bg-gray-50 w-full'>Daily</li>
                  <li className=' hover:bg-gray-50 w-full'>Weekly</li>
                  <li className=' hover:bg-gray-50 w-full'>Monthly</li>
                </ul>
              </div>
            }
         <div className=' flex flex-col w-full p-4'>
             <p className='total-business font-medium text-gray-500'>Total Businesses</p>
             <h1 className='text-2xl font-bold'>2560</h1>
         </div>
         <div className='mt-4 mr-3'>
         <BsThreeDotsVertical className='text-gray-500 h-[5vh] ml-12 cursor-pointer' onClick={toggleDropDownVisibility}/>
         <p className='bg-green-100 rounded-lg tet-sm w-[61px] flex justify-around'>
          <span className='pt-1'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-sm font-medium text-green-900'>10%</span>
         </p>
         </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full h-[114px] pt-2 border rounded-lg shadow'>
          {
              dropdownVisibility2 &&  
              <div className='w-[140px]  bg-white shadow absolute dropvisible rounded-md ring-1 ring-black ring-opacity-5 mt-20 ml-8 left-23 '>
                <ul className='pl-4'>
                  <li className=' hover:bg-gray-50 w-full'>Daily</li>
                  <li className=' hover:bg-gray-50 w-full'>Weekly</li>
                  <li className=' hover:bg-gray-50 w-full'>Monthly</li>
                </ul>
              </div>
            }
         <div className=' flex flex-col w-full p-4'>
             <p className='total-business font-medium text-gray-500'>Total Businesses</p>
             <h1 className='text-2xl font-bold'>$486560</h1>
         </div>
         <div className='mt-4 mr-3'>
         <BsThreeDotsVertical className='text-gray-500 h-[5vh] ml-12 cursor-pointer' onClick={toggleDropDownVisibility2}/>
         <p className='bg-green-100 rounded-lg text-sm w-[61px] flex justify-around'>
          <span className='pt-1'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-sm font-medium text-green-900'>17%</span>
         </p>
         </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full h-[114px] pt-2 border rounded-lg shadow'>
      {
              dropdownVisibility3 &&  
              <div className='w-[140px]  bg-white shadow absolute dropvisible rounded-md ring-1 ring-black ring-opacity-5 mt-20 ml-8 left-23 '>
                <ul className='pl-4 cursor-pointer'>
                  <li className=' hover:bg-gray-50 w-full'>Daily</li>
                  <li className=' hover:bg-gray-50 w-full'>Weekly</li>
                  <li className=' hover:bg-gray-50 w-full'>Monthly</li>
                </ul>
              </div>
            }
         <div className=' flex flex-col w-full p-4'>
             <p className='total-business font-medium text-gray-500'>Total Businesses</p>
             <h1 className='text-2xl font-bold'>$256900</h1>
         </div>
         <div className='mt-4 mr-3'>
         <BsThreeDotsVertical className='text-gray-500 h-[5vh] ml-12 cursor-pointer' onClick={toggleDropDownVisibility3}/>
         <p className='bg-green-100 rounded-lg text-sm w-[61px] flex justify-around'>
          <span className='pt-1'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-sm font-medium text-green-900'>19%</span>
         </p>
         </div>
      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full h-[114px] pt-2 border rounded-lg shadow'>
        {
              dropdownVisibility4 &&  
              <div className='w-[140px]  bg-white shadow absolute dropvisible rounded-md ring-1 ring-black ring-opacity-5 mt-20 ml-8 left-23 '>
                <ul className='pl-4'>
                  <li className=' hover:bg-gray-50 w-full'>Daily</li>
                  <li className=' hover:bg-gray-50 w-full'>Weekly</li>
                  <li className=' hover:bg-gray-50 w-full'>Monthly</li>
                </ul>
              </div>
            }

         <div className=' flex flex-col w-full p-4'>
             <p className='total-business font-medium text-gray-500'>Total Businesses</p>
             <h1 className='text-2xl font-bold'>$789560</h1>
         </div>
         <div className='mt-4 mr-3'>
         <BsThreeDotsVertical className='text-gray-500 h-[5vh] ml-12 cursor-pointer' onClick={toggleDropDownVisibility4}/>
         <p className='bg-green-100 rounded-lg text-sm w-[61px] flex justify-around'>
          <span className='pt-1'>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="#12B76A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
          </span>
          <span className='text-sm font-medium text-green-900'>14%</span>
         </p>
         </div>
      </div>
      <div  className='grid'>
      <div className='h-[55vh] card-1 lg:col-span-2 col-span-1'>
         <div>
         <ProgressBar />
         </div>
        <div>
        <LineChart />
        </div>
        </div>
        <div className=' h-[56vh] card-1 lg:col-span-2 col-span-1'>
        <div>
            <BarChart 
              data={data1}
              labels={label1}
              title={title1}
/>
         </div>
         <div>
            <PieCharts
            //  data={data2}
            //  labels={labels}
            />
         </div>
        </div>
      </div>

      </div>
      
      
 
  
      </div>

  )
}

export default SuperAdminDashboard