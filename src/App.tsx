import './App.css'
import { Navbar } from './components/Navbar'

import ScrollToTop from "./helpers/ScrollToTop";

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <ScrollToTop />
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
