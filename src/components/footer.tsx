import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.jpeg'
export default function Footer() {
    return(
        <div id='footer' className='w-full h-20 bg-black flex items-center justify-around text-white'>
            <p>© 2024 Play to Learn Therapy. All rights reserved.</p>
       <div className='flex justify-around w-[10vw]'>
        <a  href="https://www.facebook.com/PlayToLearnBehaviorTherapy" className='mx-2'><img className='w-[50px]' src={facebook} alt="" /></a>
        <a href="https://www.instagram.com/playtolearnbehaviortherapy/" className='mx-2'><img className='w-[50px]' src={instagram} alt="" /></a>
       
       </div>
        </div>
    )
}