import './App.css'
import { Navbar } from './components/Navbar'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='bg-primary'>
      <div className='h-[10vh]'>
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}

export default App
