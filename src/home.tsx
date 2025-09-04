
 import Navbar from './components/navbar'
import './App.css'

import bcbs from './assets/bcbs.png'
import cigna from './assets/cigna.png'
import united from './assets/united.png'
import aetna from './assets/aetna.png'
import avmed from './assets/avmed.png'
import childrensmedical from './assets/childrensmedical.png'
import molina from './assets/molina.png'
import sunshine from './assets/sunshine.png'
import humana from './assets/humana.png'
import simply from './assets/simply.png'
import communitycare from './assets/communitycare.png'
import umr from './assets/umr.png'
import Footer from './components/footer'

function Home() {

///event listners for learn here links, hovering makes learn more anchor visible Link A-D
const divA = document.querySelector('#divA')
const serviceA = document.querySelector('.serviceA')
const serviceB = document.querySelector('.serviceB')
const serviceC = document.querySelector('.serviceC')
const serviceD = document.querySelector('.serviceD')
const divB = document.querySelector('#divB')
const divC = document.querySelector('#divC')
const divD = document.querySelector('#divD')
const linkA = document.querySelector('.linkA')
divA?.addEventListener('mouseover',()=>{
 linkA?.classList.remove('hidden')  
  serviceA?.setAttribute('style','text-decoration: underline; color:#333333; font-size:40px;')  
})
divA?.addEventListener('mouseout',()=>{
 linkA?.classList.add('hidden')
    serviceA?.setAttribute('style','text-decoration: none; color:#000000; font-size:30px;' )
})
 
const linkB = document.querySelector('.linkB')
divB?.addEventListener('mouseover',()=>{
serviceB?.setAttribute('style','text-decoration: underline; color:#333333; font-size:40px;')  
 linkB?.classList.remove('hidden')
})
divB?.addEventListener('mouseout',()=>{
 linkB?.classList.add('hidden')
    serviceB?.setAttribute('style','text-decoration: none; color:#000000; font-size:30px;' )
})
 
const linkC = document.querySelector('.linkC')
divC?.addEventListener('mouseover',()=>{
    serviceC?.setAttribute('style','text-decoration: underline; color:#333333; font-size:40px;')
 linkC?.classList.remove('hidden')
})
divC?.addEventListener('mouseout',()=>{
    serviceC?.setAttribute('style','text-decoration: none; color:#000000; font-size:30px;' )
 linkC?.classList.add('hidden')
})
 
const linkD = document.querySelector('.linkD')
divD?.addEventListener('mouseover',()=>{
    serviceD?.setAttribute('style','text-decoration: underline; color:#333333; font-size:40px;')
 linkD?.classList.remove('hidden')
})
divD?.addEventListener('mouseout',()=>{
    serviceD?.setAttribute('style','text-decoration: none; color:#000000; font-size:30px;' )
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
       At Play to Learn ABA Therapy, we believe every child learns best through joy
        curiosity, and play. Our team is dedicated to providing individualized Applied Behavior
         Analysis (ABA) programs that encourage growth, independence, and confidence. By blending
          evidence-based therapy with engaging play, we create an environment where learning feels natural,
           meaningful, and fun.
           
           
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
      <div className=' grid grid-cols-4 gap-4 ml-[10vw]  w-[100vw] '>
      <img className='w-[200px]' src={bcbs} alt="" />
       <img className='w-[200px]' src={aetna} alt="" />
        <img className='w-[200px]' src={cigna} alt="" />
         <img className='w-[200px]' src={united} alt="" />
            <img className='w-[200px]' src={avmed} alt="" />
                <img className='w-[200px]' src={childrensmedical} alt="" />
                    <img className='w-[200px]' src={molina} alt="" />
                        <img className='w-[200px]' src={sunshine} alt="" />
                            <img className='w-[200px]' src={humana} alt="" />
                                <img className='w-[200px]' src={simply} alt="" />
                                    <img className='w-[200px]' src={communitycare} alt="" />
                                        <img className='w-[200px]' src={umr} alt="" />
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
     <Footer />
    </main>
    </>
  )
}

export default Home
