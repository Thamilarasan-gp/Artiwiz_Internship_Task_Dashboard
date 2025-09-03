import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Dashboard from './Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
  <Dashboard/>
   </div>
   
    
  )
}

export default App
