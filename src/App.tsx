import { useState } from 'react'
 import Navbar from './components/navbar'
import './App.css'
import stock from './assets/stock.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex flex-col border-2 border-black border-solid '>
     <Navbar />
     <div id='hero' className='h-[100vh] w-full bg-[./assets/stock.png] bg-cover bg-center'  >
      <p className='w-[45vw] font-[1000] text-black text-[50px] text-black  ml-[40vw] mt-[10vh]'>UNLOCK YOUR CHILD'S POTENTIAL WITH PERSONALIZED ABA THERAPY</p>
     </div>
    </main>
  )
}

export default App
