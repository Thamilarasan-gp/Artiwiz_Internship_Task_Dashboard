import React from 'react'
import './Cards.css'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Percent, 
  Calendar, 
  PercentCircleIcon,
  TrendingDownIcon
} from "lucide-react";
function Cards() {
  return (
    <div className='Card-container'>
      <div className='card'>
<h2 className='card-title'>Total Outstanding</h2>
{/* <DollarSign size={18}/> */}
<h3 className='card-count'>$2,465,878</h3>
<p className='card-percent'><TrendingUp size={14}/>+12.5% from last month</p>
      </div>
      <div className='card'>

<h2 className='card-title'>Active Campaigns</h2>
{/* <TrendingUp size={18}/> */}
<h3 className='card-count'>24</h3>
<p className='card-percent'><TrendingUp size={14}/>+8.2% from last month</p>
     
      </div>
      <div className='card'>

<h2 className='card-title'>Collections Rate</h2>
{/* <PercentCircleIcon size={18}/> */}
<h3 className='card-count'>68%</h3>
<p className='card-percent'><TrendingUp size={14}/>+5.2% from last month</p>
     
      
      </div>
      <div className='card'>

<h2 className='card-title'>Avg Days to pay</h2>
{/* <Calendar size={18}/> */}
<h3 className='card-count'>12.3</h3>
<p className='card-percent-red'><TrendingDownIcon size={14}/>-2.1% from last month</p>
     
      
      </div>
    </div>
  )
}

export default Cards