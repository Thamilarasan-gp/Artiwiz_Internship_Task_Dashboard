import React from 'react'
import './Dashboard.css'
import Slider from './slider'
import Activities from './Activities'
import Performance from './Performance'
import Quickactions from './Quickactions'
import Cards from './Cards'

function Dashboard() {
  return (
    <div className='dashboard-container'>
        
      <Slider/>
    <div className='dashboard'>

        <div className='dash-header'>

            <div className='header-title'>
                <h2>Dashboard</h2>
                <p>Overview of your collections performance</p>
            </div>
            <div className='dash-header-btn'>
                  <button className='dash-btn1'>Export Report</button>
                  <button className='dash-btn2'>New Campaign</button>
            </div>
        </div>
        <Cards/>
        <div className='dash-section'>
          <Performance/>
<Activities/>


        </div>
        <Quickactions/>
</div>
    </div>
  )
}

export default Dashboard