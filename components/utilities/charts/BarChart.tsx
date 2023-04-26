import React, {useState} from 'react';
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { BsThreeDotsVertical } from 'react-icons/bs';
// import { fontWeight } from "@mui/system";

Chart.register(CategoryScale);
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

const BarChart = ({ data, labels, title }: any) => {

  const chartData = {
    labels: labels,
    datasets: data,
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: title,
    },
    scales: {
      x: {
        stacked: true,
        type: "category",
         grid: {
          drawBorder: false,
          lineWidth: 0 // <-- this removes vertical lines between bars
        },
      },
      y: {
        stacked: true,
        scaleLabel: {
          display: true,
        }
      },
    },
    plugins: {
      responsive: true,
      legend: {
        display: true,
        position: "top",
       
        labels: {
          usePointStyle: true,
          pointStyle: "Rounded",
        },
        title: {
          display: true,
          // text: 'How do you acquire clients?',
        
        },
        tooltip: {
          titleFont: {
            family: 'Roboto',
           
          }
        },
      },
    },
    layout: {
      padding: {
        left: 15,
        right: 15,
        top: 20,
        bottom: 70,
      
      },
    },
     // Set the bar and category percentage to control the width of each column
     barPercentage: 0.5,
     categoryPercentage: 1,
   };
 
  return (
    <div className='w-[637px]  shadow relative lg:h-[297px]  h-[50vh] p-1 border rounded-lg bg-white'>
        <div className='flex justify-between p-4'>
           <h1 className='text-lg font-bold'>How do you acquire clients?</h1> 
           <BsThreeDotsVertical  className='text-gray-500  ml-12 cursor-pointer' />
        </div> 
         <Bar
        style={{ width: "100%", marginTop: '-30px',  height: '100%' }}
        data={chartData}
        options={chartOptions}
      />

    </div>
  )
}

export default BarChart