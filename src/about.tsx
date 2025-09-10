import Navbar from "./components/navbar"
import Footer from "./components/footer"
export default function AboutUs() {
    return (
        <>
        <Navbar />
        <div id="heroB" className="h-[100vh] w-full flex items-center justify-center">
             <p id='heroText' className='w-[45vw] font-new text-[50px]  ml-[0vw] mt-[5vh]'>About Us</p>
        </div>
           <div className="flex bg-[#F5F5DC] flex-col items-center justify-center">
           <div className="flex flex-col items-center justify-center ">
            <h1>Play To Learn Behavioral Therapy</h1>
            <p id="aboutP" className="w-[50vw] m-10">
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
            </div>
            <div id='about' className="flex flex-col items-center justify-center m-10   rounded-md">
            <h1>Our Goal</h1>
            <p id="aboutP" className="w-[30vw] text-center">
                Our goal is to empower individuals with the skills they need to achieve greater 
                independence, confidence, and connection in their daily lives. Through evidence-based ABA 
                practices, compassionate support, and collaboration with families, we strive to create meaningful
                 progress that lasts beyond therapy.      
            </p>    
            </div>
            <div id='about' className="flex flex-col items-center justify-center m-10">
            <h1>Our Mission</h1>
            <p id="aboutP" className="w-[30vw] text-center">
                Our mission is to provide compassionate, play-based ABA therapy that fosters growth, 
                independence, and resilience. We are dedicated to helping each child reach their fullest 
                potential through individualized care, family collaboration, and evidence-based practices.   
            </p>    
            </div>
            <div id='about' className="flex flex-col items-center justify-center m-10">
            <h1>Our Services</h1>
            <p id="aboutP" className="w-[30vw] text-center">
               At Play To Learn, we tailor our services to each child’s unique needs and circumstances.
                By using data-driven strategies and individualized treatment plans, we address behavioral
                 challenges while helping children build essential skills to reach their fullest potential.   
            </p>    
            </div>
           </div>
            <Footer />
        </>
    )
}