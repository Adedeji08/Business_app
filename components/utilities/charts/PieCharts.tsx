import React from 'react'
import dynamic from 'next/dynamic';
// const ReactECharts = dynamic(() => import('echarts-for-react'),{
//   ssr: false
// })
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts/core'
import { PieChart, PieSeriesOption } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent,
  TitleComponent,
  DatasetComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';



echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
]);

const PieCharts = ({data, labels, title}: any) => {
  const chartData = {
    labels: labels,
    datasets: data,
  };
  var colorPalette = ['#3399FF', '#34B53A', '#FF3A29']

    const chartOptions ={
    title: {
      text: 'Service Rating',
      // subtext: 'Fake Data',
      left: 'left',
      textStyle: {
        fontSize: '18px',
        fontFamily: 'Roboto',
        color: '#344054',
      },
    },
    tooltip: {
      trigger: 'item',
      textStyle: {
        fontSize: 15,
      },
    },
    legend: {
      orient: 'horizontal',
      left: 'left',
      backgroundColor: '#FFF',
      textStyle: {
        color: '#fff',
        fontSize: 15,
        // ...
      },
      data: [
        {
          name: 'E-Wallet',
          icon: 'rect'
        },
        {
          name: 't-Till',
          icon: 'rect'
        },
        {
          name: 'i-payBill',
          icon: 'rect'
        }
      ]
    },
    color: colorPalette,
      series: [
        {
          // name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 780, name: 'E-wallet' },
            { value: 150, name: 'Till' },
            { value: 250, name: 'payBill' }
          ],
          selected: {name: true},
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    
  }
  return (
   <>
      <div className='w-[302px] shadow overflow-hidden relative lg:h-[297px] h-[50vh] p-4 border rounded-lg bg-white'>
        <ReactECharts
          option={chartOptions}
          echarts={echarts}
         
          />
    </div>
   </>
  )
}

export default PieCharts