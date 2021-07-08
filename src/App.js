import React from 'react'
import './App.css';
import Chart from './components/Chart'
// import BarChart from './components/BarChart';
// import LineChart from './components/LineChart';
import ChartLine from './components/ChartLine';
import Barra from './components/Barra';

const App =()=>{
  return(
    <div>
      {/* <LineChart/>
      <BarChart/> */}
      <Chart/>
      <ChartLine/>
      <Barra/>
    </div>
  )
}

export default App;
