import { useState } from 'react'
 import Navbar from './components/navbar'
import './App.css'

import bcbs from './assets/bcbs.png'
import cigna from './assets/cigna.png'
import united from './assets/united.png'
import aetna from './assets/aetna.png'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)
 const concerns = ['Autism Spectrum Disorder (ASD)', 'Social Communication Challenges','Behavior Challenges','Development Delays']
  return (
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
     <div className='grid grid-cols-3 gap-x-4 m-10 border-b-2 border-black border-solid'>
          <div className='p-[50px]  bg-[#F5F5DC] border-r-2 border-black'>
            <h1  id='serviceHeader' className='text-[30px] font-[600]'>
              In-Home ABA Therapy
            </h1>
            <p>
               Our in-home ABA therapy brings personalized 
               care and support directly to your family’s 
               doorstep. By working in the comfort of your 
               child’s own environment, our therapists can 
               focus on real-life skills that matter most—such
                as communication, daily routines, social 
                interactions, and managing challenging 
                behaviors.
            </p>
          </div>
            <div className='p-[50px]  bg-[#F5F5DC] border-r-2 border-black'> 
              <h1  id='serviceHeader' className='text-[30px] font-[600]'>
               School Shadowing/Support
              </h1>
              <p>
                Our school shadowing and support services provide your child 
                with individualized assistance directly in the classroom. 
                A trained ABA therapist works alongside your child during 
                the school day to help them stay engaged, follow routines,
                 manage behaviors, and build positive relationships with peers 
                 and teachers.
              </p>
            </div>
            <div className='p-[50px]  bg-[#F5F5DC]'>
          <h1  id='serviceHeader' className='text-[30px] font-[600]'>
            Parent Training
          </h1>
          <p>
            Our parent training programs empower families with the tools and strategies 
            they need to support their child’s growth every day. Using the principles 
            of Applied Behavior Analysis (ABA), we provide hands-on coaching, practical
             guidance, and personalized strategies that fit naturally into your family’s 
             routines.
          </p>
        </div>
     </div>
     <div id='formDiv'>
      <form action="">

      </form>
     </div>
           
      
     <Footer />
    </main>
  )
}

export default App
