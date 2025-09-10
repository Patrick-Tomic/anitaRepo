import logo from '../assets/logo.png'
export default function Navbar() {
    return (
        <div id='navbar' className='w-full h-10  flex items-center justify-around'>
            <a href="/">   <img src={logo} alt="" className='max-w-[15vw]'/></a>
            <a href='/about'>About</a>
            <a href="/services"> Events</a>
            <a href="#">Services</a>
            <a href="#">Career</a>
            <a href="#">Resources</a>
             <a href="#">Contact Us</a>
           
          
        </div>
    )
}