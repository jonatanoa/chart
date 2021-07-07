import React from 'react'
import './App.css';
import Chart from './components/Chart'
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';


const App =()=>{
  return(
    <div>
      <LineChart/>
      <BarChart/>
      <Chart/>
    </div>
  )
}

export default App;
