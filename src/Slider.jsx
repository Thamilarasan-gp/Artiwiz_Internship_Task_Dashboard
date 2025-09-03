import React from 'react'
import './styles/Slider.css'
import { User2Icon, UserCircle2Icon } from 'lucide-react';
import navlogo from './assets/image.png'
import {
  LayoutGrid,
  Upload,
  FileText,
  GitBranch,
  BarChart2,
  CreditCard,
  Shield,
  Settings,
  UploadIcon,
  GitBranchIcon,
  BarChart2Icon,
  CreditCardIcon,
  ShieldIcon,
  Settings2Icon
} from "lucide-react"; 
function Slider() {
  return (
    <div className='slider-container'>

<div class='nav-header'>
<div className='nav-logo'>
    <img src={navlogo}></img>
</div>
<div className='nav-title'>
    <h4>CollectPro</h4>
    <p>Collections Platform</p>
</div>
</div>
<ul className='Navigation-menu'>
    <li><LayoutGrid size={18}/>Dashboard</li>
    <li> <UploadIcon size={18}/>Data Import</li>
    <li ><FileText size={18}/>Template</li>
    <li><GitBranchIcon size={18}/> Sequences</li>
    <li><BarChart2Icon size={18}/>Analytics</li>
    <li><CreditCardIcon size={18}/>Payment Portal</li>
    <li><ShieldIcon size={18}/>Compliance</li>
    <li><Settings2Icon size={18}/>Settings</li>
</ul>

<div className="profile">
            <span id='profile-logo'>TA</span>
            <div className='profile-content'>
                <span className='profile-name'>Thamil Arasan</span>
                <span className='profile-role'>Admin</span>
            </div>
          </div>
    </div>
  )
}

export default Slider