import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart =()=>{
    return(
        <div>
            <Line
data={{
   labels: ['', '', '', '', '', ''],
   datasets:[
      
       {   
           label:'# of votes',
           type:'line',
           data: [19, 34, 2, 24, 20, 12],
           //si el solor se define sin corchetes 'red', este se aplicara para todas las barras
           backgroundColor:['blue'], 
           borderColor: ['#aaa'],
           borderWidth: 1,
           barThickness:20
       },
       {    type:'line',
           label:'# of files',
           data: [14, 21, 5, 7, 13, 6],
           backgroundColor:['blue'],
           borderColor: ['#aaa'],
           borderWidth: 1,
           barThickness:20
       },
       {    type:'line',
           label:'# of Money',
           data: [3, 41, 15, 15, 4,13],
           backgroundColor:['blue'],
           borderColor: ['#aaa'],
           borderWidth: 1,
           barThickness:20
       },
       {
           label:'# of Bitcoin',
           type:'line',
           data: [4, 31, 55, 78, 45, 70 ],
           backgroundColor:[ 'blue'],
           borderColor: ['#aaa'],
           borderWidth: 2,
           barThickness:20
       },
   ],
}}
height={400}
width={600}
options={{
   tooltips:{ //para mostrar el valor de cada barra
       callbacks:{
           label:function(toolTipItem){
               return "$" + toolTipItem.value
           }
       }
   },
   scales:{
       xAxes:[
           {
               scaleLabel:{
                   labelString:'month',
                   display:true,
               }
           }
       ],
       yAxes:[
           {
               scaleLabel:{
                   labelString:'num',
                   display:true,
               },
               ticks:{
                   beginAtZero:true,
                   fontColor:'gren'
               }
           }
       ]
   },
   maintainAspectRatio: false,

}}
/>
        </div>
    )
}

export default LineChart;