import React from 'react'
import './styles/Performance.css'
import email from './assets/email.png'
import sms from './assets/sms.png'
import phone from './assets/Phone.png'
function Performance() {
     return (
          <div className='Dash-Performance'>

               <h4>Channel Performance</h4>

               <div className='Perf-list'>

                    <div className='performance-list' >
                         <div className='Performance-left'>
                              <img className='challenges-logo' src={email} />
                              <h5>Email</h5>
                              <p>1250 sent</p>
                         </div>
                         <div className='Performance-right'>
                              <h5>18.7%</h5>
                              <p>response rate</p>

                         </div>
                    </div>
                    <div className='performance-list'>
                         <div className='Performance-left'>
                              <img className='challenges-logo' src={sms} />
                              <h5>SMS</h5>
                              <p id='countingseat'>690 sent</p>
                         </div>
                         <div className='Performance-right'>
                              <h5>22.9%</h5>
                              <p>response rate</p>

                         </div>
                    </div>
                    <div className='performance-list'>
                         <div className='Performance-left'>
                              <img className='challenges-logo' src={phone} />
                              <h5>Voice</h5>
                              <p>320 sent</p>
                         </div>
                         <div className='Performance-right'>
                              <h5>27.8%</h5>
                              <p>response rate</p>

                         </div>
                    </div >

               </div>

          </div>
     )
}

export default Performance