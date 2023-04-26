import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Chart = dynamic(() => import('react-apexcharts'),{
  ssr: false
})

const LineChart = () => {
  const icon = <span><BsThreeDotsVertical /></span>
  const [ChartData, setChartData] = useState({
    series: [{
      name: "New",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    },
    {
      name: "Active",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    },
    {
      name: 'Inactive',
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }
  ],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }, 
    },
    dataLabels: {
      enabled: false
    },

    toolbar: {
      show: true,
      tools: {
        download: true,
        customIcons: [{
          icon: 'icon',
          reset : '<img src="../assets/Icon.svg">',
          index: 0,
          title: 'tooltip of the icon',
          class: 'custom-icon',
          click: function ({chart, options, e}: any) {
             console.log('clicked')
          }
        }]
       }
      },
    colors: ["#3399FF", "#34B53A", "#FF3A29"],
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
      dashArray: [0, 0, 0]
    },
    title: {
      text: 'Clients Insights',
      align: 'left',
      fontFamily: 'Roboto'
    },

    legend: {
      // tooltipHoverFormatter: function({val, opts}: any) {
      //   return val + ' - ' + opts?.w?.globals?.series[opts.seriesIndex][opts.dataPointIndex] + ''
      // },
      fontSize: 14,
      fontFamily: 'Roboto',
      color: '#344054',
      fontWeight: 400,
      position: 'top',
      horizontalAlign: 'right',
      offsetY: -47
      
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 0
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 0.1,
      },
  },

    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
      ],
      labels: {
        hideOverlappingLabels: true,
        style: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '12px',
            colors: [' #667085'],
        },
        axisBorder: {
          color: '#F2F4F7',
      },
      axisTicks: {
          show: true,
          borderType: 'dashed',
         
          border: '30px #F2F4F7',
          height: 10,
      },
    },
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function () {
              return "New"
            }
          }
        },
        {
          title: {
            formatter: function () {
              return "Active"
            }
          }
        },
        {
          title: {
            formatter: function () {
              return "Inactive";
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#F2F4F7',
      border: '1px solid #F2F4F7',
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },  
    }
  },

  })  
  
  return (
    <>
    <div className='w-[413px] shadow relative  lg:h-[297px] h-[50vh] p-4 border rounded-lg bg-white'>
        
           <Chart series={ChartData.series} options={ChartData.options} type='line'    />
    </div>
    </>
  )
}


export default LineChart