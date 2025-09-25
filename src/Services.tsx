import Navbar from "./components/navbar"
import Footer from "./components/footer"
import stock from './assets/stockD.jpg'
export default function Services() {
    return (
        <>
        <Navbar />
        <div id="heroC" className="h-[100vh] w-full flex items-center justify-center">
             <p id='heroText' className='w-[45vw] font-new text-[50px]  ml-[0vw] mt-[5vh]'>Our Services</p>
        </div>
              <div className="flex bg-[#FFFFFF] flex-col items-center justify-center">
                <h1 className='mt-[10vh] text-[40px]'>
                    What is ABA?
                </h1>
                <p id="serviceP" className="w-[60vw] m-5 text-[24px]">
                    At <b>Play to Learn Therapy</b>, we provide individualized <b className="font-bold">Applied Behavior Analysis (ABA)</b> services designed to meet each child’s unique needs, strengths, and learning style.
                    Our approach emphasizes child-led learning and Natural Environment Teaching (NET), helping children build meaningful skills in
                     the places that matter most—whether at home, in the community, at school, or in our center.
                <br></br>
                <br></br>
                 ABA is a research-based therapy focused on understanding how behavior is shaped by the environment. Through functional assessments
                 and data-driven strategies, our skilled clinicians create tailored interventions to reduce challenging behaviors while promoting socially significant skills. 
                </p>
                </div>
    <div className="flex  w-[100%] bg-[#F5F5DC]">
        <div className=" h-[70vh] flex flex-col items-center justify-center">
            <h1>
                Therapy provided wherever and whenever you need it
            </h1>
            <p id="aboutP" className=" m-5 text-[20px]">
                 We provide one-on-one therapy for children of all abilities,
                including those with Autism Spectrum Disorder, Developmental or Intellectual Disabilities, and gifted 
            </p>
        </div>
        <img className="w-[50%] bg-[#F5F5DC] h-fit rounded-l-[25%]" src={stock} alt="" />
    </div>
                   
        <Footer />
        </>
    )
}