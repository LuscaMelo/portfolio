import './App.css'
import { Navbar } from './components/Navbar'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <div className='h-[10vh]'>
        <Navbar />
      </div>
      <div className='bg-primary'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
