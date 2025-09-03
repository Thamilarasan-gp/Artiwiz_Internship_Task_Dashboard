import React from 'react'
import './styles/Activities.css'
import { ArrowRight } from 'lucide-react'
function Activities() {
  return (
    <div className='Dash-Activity'>
       
            <h4>Recent Activity</h4>
<p className='actv-view'>view all <ArrowRight size={12}/></p>
   <div class='activity-list'>

<div className='actv-li'>
<div className='dash-left'>
<h5>Payment received</h5>
<p>Smith corp</p>
</div>
<div className='dash-right'>
<h4 id='rupee'>$1,250</h4>
<p>2m ago</p>

</div>
</div>
<div className='actv-li'>
<div className='dash-left'>
<h5>Email Sequence completed</h5>
<p>Johnson LLC</p>
</div>
<div className='dash-right'>

<p>15m ago</p>

</div>
</div >
<div className='actv-li'>
<div className='dash-left'>
<h5>New import processed</h5>
<p>Thamil corp</p>
</div>
<div className='dash-right'>

<p>24m ago</p>

</div>
</div>
<div className='actv-li'>
<div className='dash-left'>
<h5>Campaign started</h5>
<p>Anderson Inc</p>
</div>
<div className='dash-right'>

<p>2hr ago</p>

</div>
</div>
   </div>
         
    </div>
  )
}

export default Activities