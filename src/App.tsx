import { useState } from 'react'
 import Navbar from './components/navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex flex-col '>
     <Navbar />
     <div className='h-[100vh]' id='heroScreen'>
ffff
     </div>
    </main>
  )
}

export default App
