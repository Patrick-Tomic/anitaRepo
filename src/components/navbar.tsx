import logo from '../assets/logo.png'
import { useEffect } from 'react'
export default function Navbar() {
    
    useEffect(() => {
        console.log('navbar loaded')
        const intakeAnchor: any = document.getElementById('intakeAnchor')
        intakeAnchor?.addEventListener('mouseover', () => {
            
           intakeAnchor.setAttribute('style','display:block; border-bottom:2px solid black;')
        })
        const serviceAnchor: any = document.getElementById('serviceContainer')
        
        serviceAnchor?.addEventListener('mouseover', () => {
            intakeAnchor.setAttribute('style','display:block')
        })
        serviceAnchor?.addEventListener('mouseout', () => {
            intakeAnchor.setAttribute('style','display:none')
        })
    }, [])
    return (
        <div id='navbar' className='w-full h-10  flex items-center justify-around'>
            <a href="/">   <img src={logo} alt="" className='max-w-[15vw]'/></a>
            <a href='/about'>About</a>
            <a href=""> Events</a>
            <div id='serviceContainer' className='flex flex-col h-[20vh] '>
            <a id='serviceAnchor' className='mt-[8.5vh]' href="/services">Services</a>
            <a id='intakeAnchor' className='mt-[2vh] hidden'href="/services/assessment">
            Intake & Assessment </a>
            </div>
            <a href="#">Career</a>
            <a href="#">Resources</a>
             <a href="#">Contact Us</a>
           
          
        </div>
    )
}