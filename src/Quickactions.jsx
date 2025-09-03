import React from 'react'
import './styles/Quickactions.css'
import { Upload, FileText, Users, BarChart2, BarChart3 } from "lucide-react";

function Quickactions() {
  return (
    <div className='quickbar'>
        <p className='quick-title'>Quick Actions</p>
        <ul className='quick-menu'>
            <div className='quickbar-cont'>
                <Upload size={20}/>
<li>Import Data</li>

            </div>
             <div className='quickbar-cont'>
                <FileText size={20}/>
  <li>New Template</li>
  
            </div>
           <div className='quickbar-cont'>
             <Users size={20}/>
 <li>Create Campaign</li>

            </div>
             <div className='quickbar-cont'>
                 <BarChart3 size={20}/>
 <li>View Reports</li>

            </div>
           
        </ul>
    </div>
  )
}

export default Quickactions