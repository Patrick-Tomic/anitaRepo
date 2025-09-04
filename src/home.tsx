import { useState } from 'react'
 import Navbar from './components/navbar'
import './App.css'

import bcbs from './assets/bcbs.png'
import cigna from './assets/cigna.png'
import united from './assets/united.png'
import aetna from './assets/aetna.png'
import Footer from './components/footer'

function Home() {
  const [count, setCount] = useState(0)
 const concerns = ['Autism Spectrum Disorder (ASD)', 'Social Communication Challenges','Behavior Challenges','Development Delays']

///event listners for learn here links, hovering makes learn more anchor visible Link A-D
const divA = document.querySelector('#divA')
const divB = document.querySelector('#divB')
const divC = document.querySelector('#divC')
const divD = document.querySelector('#divD')
const linkA = document.querySelector('.linkA')
divA?.addEventListener('mouseover',()=>{
 linkA?.classList.remove('hidden')
})
divA?.addEventListener('mouseout',()=>{
 linkA?.classList.add('hidden')
})
 
const linkB = document.querySelector('.linkB')
divB?.addEventListener('mouseover',()=>{
 linkB?.classList.remove('hidden')
})
divB?.addEventListener('mouseout',()=>{
 linkB?.classList.add('hidden')
})
 
const linkC = document.querySelector('.linkC')
divC?.addEventListener('mouseover',()=>{
 linkC?.classList.remove('hidden')
})
divC?.addEventListener('mouseout',()=>{
 linkC?.classList.add('hidden')
})
 
const linkD = document.querySelector('.linkD')
divD?.addEventListener('mouseover',()=>{
 linkD?.classList.remove('hidden')
})
divD?.addEventListener('mouseout',()=>{
 linkD?.classList.add('hidden')
})

  return (<>

    <main className='flex flex-col  '>
     <Navbar />
     <div id='hero' className='h-[100vh] w-full bg-[./assets/stock.png] bg-cover bg-center'  >
      <p id='heroText' className='w-[45vw] font-new text-[50px]  ml-[50vw] mt-[5vh]'>Learning through play, growing every day.</p>
     </div>
     <div id='about' className='p-[50px] flex flex-col border-b-2 border-black border-solid flex items-center justify-center'>
     <h1>
      About Us
     </h1>
      <p id='aboutP' className='w-[45vw] '>
        At Play To Learn Therapy, Your child's therapy is guided by a Board Certified Behavior Analyst (BCBA) ~ a Doctoral-level expert who designs and oversees every program.
        Our dedicated Registered Behavior Technicians (RBTs) are trained and certified to provide day-to-day therapy, 
        ensuring your child recieves the highest quality care.
        <br></br><br></br>We believe every child in South Florida
         has a unique and brilliant potential waiting to be unlocked.
          Located in the heart of our vibrant, multicultural community, 
          we provide exceptional, compassionate, and culturally-responsive 
          Applied Behavior Analysis (ABA) therapy for children with autism
           spectrum disorder (ASD) and other developmental differences.
      </p>
      <div>
        <h2>Our Promise</h2>
        <p id='aboutP' className='w-[45vw]' >
          Our mission is to support each client through personalized 
          behavioral programs designed to foster independence and empower
           them to reach their fullest potential. Just as a tree renews itself 
           by shedding its leaves, we strive to guide our clients toward growth, 
           resilience, and renewal
        </p>
      </div>
      <div>
      <div className='  w-[100vw] flex justify-around items-center'>
      <img className='w-[200px]' src={bcbs} alt="" />
       <img className='w-[200px]' src={aetna} alt="" />
        <img className='w-[200px]' src={cigna} alt="" />
         <img className='w-[200px]' src={united} alt="" />
      </div>
      </div>
     </div>
     <div className='grid grid-cols-2 gap-x-4 m-10 border-b-2 border-black border-solid'>
          <div id='divA' className='p-[50px] flex flex-col items-center  bg-[#F5F5DC] '>
            <h1  id='serviceHeader' className='serviceA text-[16px] font-[600]'>
              In-Home ABA Therapy
            </h1>
             <a className=' hidden linkA' href="#">Learn More</a>
          </div>
            <div id='divB' className='p-[50px] flex flex-col items-center   bg-[#F5F5DC] '> 
              <h1  id='serviceHeader' className='serviceB text-[16px] font-[600]'>
               School Shadowing/Support
              </h1>
              <a className='hidden linkB' href="#">Learn More</a>
            </div>
            <div id='divC' className='p-[50px] flex flex-col items-center   bg-[#F5F5DC]  '>
          <h1  id='serviceHeader' className='serviceC text-[16px] font-[600]'>
            Caregiver Training
          </h1>
          <a className='hidden linkC' href="#">Learn More</a>
          </div>
           <div id='divD' className='p-[50px] flex flex-col items-center   bg-[#F5F5DC]  '> 
          <h1  id='serviceHeader' className='serviceD text-[16px] font-[600]'>
            Resources
          </h1>
          <a className='hidden linkD' href="#">Learn More</a>
        </div>
     </div>
     <div id='formDiv'>
      <form action="">

      </form>
     </div>
           
      
     <Footer />
    </main>
    </>
  )
}

export default Home
