import { useState } from 'react'
 import Navbar from './components/navbar'
import './App.css'
import stock from './assets/stock.png'
function App() {
  const [count, setCount] = useState(0)
 const concerns = ['Autism Spectrum Disorder (ASD)', 'Social Communication Challenges','Behavior Challenges','Development Delays']
  return (
    <main className='flex flex-col border-2 border-black border-solid '>
     <Navbar />
     <div id='hero' className='h-[100vh] w-full bg-[./assets/stock.png] bg-cover bg-center'  >
      <p className='w-[45vw] font-new text-black text-[50px] text-black  ml-[40vw] mt-[10vh]'>UNLOCK YOUR CHILD'S POTENTIAL WITH PERSONALIZED ABA THERAPY</p>
     </div>
     <div className='grid grid-cols-2 gap-4'>
          <div>
            <h1 className='text-[30px] font-[600]'>
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
          <div>
            <h1 className='text-[30px] font-[600]'>
              Clinic Based ABA Therapy
            </h1>
            <p>
              Our clinic-based ABA therapy provides a structured,
               supportive environment where children can learn, 
               grow, and practice new skills. With access to specialized 
               materials, peer interaction opportunities, and a team 
               of trained professionals, the clinic setting helps 
               children build independence and adaptability outside of 
               the home.
            </p>
          </div>
            <div>
              <h1 className='text-[30px] font-[600]'>
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
            <div>
          <h1 className='text-[30px] font-[600]'>
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
    </main>
  )
}

export default App
