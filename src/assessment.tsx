import Footer from './components/footer'
import Navbar from './components/navbar'
export default function Assessment() {
    return(
        <>
         <>
                <Navbar />
                <div id="heroD" className="h-[100vh] w-full flex items-center justify-center">
                     <p id='heroText' className='w-[45vw] font-new text-[50px]  ml-[0vw] mt-[5vh]'>Intake and Assessment Process</p>
                </div>
                      <div id='aboutP' className="flex bg-[#F5F5DC] flex-col items-center justify-center">
                       <div className='flex flex-col items-center justify-center border-2 border-black border-solid p-[5vw]'>
                        <p id='aboutP' className='w-[50vw]'>At  Play to Learn Therapy, we are dedicated to delivering personalized, high-quality services 
                            that meet the unique needs of every child and family.
                            <br></br><br></br>Our intake and assessment process is designed to be supportive,
                             straightforward, and comprehensive—ensuring the best possible start to your child’s 
                             therapeutic journey.</p>
                             </div>
                             <div className='flex'>
                            <div>
                                <h1 className='text-2xl font-bold mt-10'>1.): Initial Contact</h1>
                            <ul>
                                <li>
                                    Families contact our office via phone, email or website form
                                </li>
                                <li>
                                    We collect the child's name, age, dianosis(if applicable), and reason for seeking ABA services
                                </li>
                                 <li>
                                        Our staff checks eligibility benefits and authorization requirements
                                </li>
                                 <li>
                                        Family will receive an overview of our therapy model, service options and next steps
                                </li>
                            </ul>
                            </div>
                            <img src="" alt="" />
                             </div>
                               <div>
                            <h1 className='text-2xl font-bold mt-10'>2.): Intake Meeting</h1>
                            <p>
                                <ul>
                                    <li>
                                        Parent/Guardian Interview: Conducted in person or virtually to discuss the child's developmental history, strengths and areas of concern.
                                     </li> 
                                     <li>
                                        Review of Documentation: Collect relevant medical reports, diagnostic evaluations, 
                                        Individualized Education Program (IEP), and any previous therapy records
                                    </li>  
                                    <li>
                                        Service Goals Discussion: Families share their priorties and expectations of therapy
                                    </li>
                                </ul>
                            </p>
                             </div>
                               <div>
                            <h1 className='text-2xl font-bold mt-10'>3.): Comprehensive Assessment</h1>
                            <p>
                                <ul>
                                    <li>
                                        Direct Observation: A Board Certified Behavior Analyst (BCBA) observes the child in a natural setting
                                        (home, school) to understand behavior and skill level.
                                    </li>
                                    <li>
                                        Standardized Assessments: 
                                        <ul>
                                            <li>
                                                VB-MAPP (Verbal Behavior Milestones Assessment and Placement Program)
                                            </li>
                                            <li>
                                                ABLLS-R (Assessment of Basic Language and Learning Skills-Revised)
                                            </li>
                                            <li>
                                                AFLS (Assessment of Functional Living Skills)
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        Skill & Behavior Assessment: Evaluate communication, social interaction, play skills, self-help, daily living and challenging behaviors.
                                    </li>
                                </ul>
                            </p>
                             </div>
                               <div>
                            <h1 className='text-2xl font-bold mt-10'>4.): Individualized Treatment Plan Development</h1>
                            <p>
                                <ul>
                                    <li>
                                        Goal Creation: The BCBA collaborates with the family to set measurable, functional and meaningful goals.
                                    </li>
                                    <li>
                                        Behavior Intervention Plan: Strategies are designed to reduce challenging behaviors while teaching replacement skills.
                                    </li>
                                    <li>
                                        Service Recommendations: Determine therapy setting (home, clinic, school, or community), frequency, and hours per week.
                                    </li>
                                </ul>
                            </p>
                             </div>
                               <div>
                            <h1 className='text-2xl font-bold mt-10'>5.): Plan Review & Approval</h1>
                            <p>
                                <ul>
                                    <li>
                                        Family Review: The proposed treatment plan is presented to the family for input and approval.
                                    </li>
                                      <li>
                                        Insurance/Authorization Submission: Treatment plan is submitted to insurance (if applicable) for authorization.
                                    </li>
                                      <li>
                                        Adjustments: Any requested changes are incorporated before therapy begins.
                                    </li>
                                </ul>
                            </p>
                             </div>
                               <div>
                            <h1 className='text-2xl font-bold mt-10'>6.): Therapy Start & Ongoing Assessment</h1>
                            <p>
                                <ul>
                                    <li>
                                        Therapy Initiaion: ABA sessions begin with a trained Behavior Technician under BCBA supervision.
                                    </li>
                                    <li>
                                        Data Collection: Progress is monitored daily using objective data.
                                    </li>
                                    <li>
                                        Ongoing Supervision: The BCBA conducts regular supervision, parent training, and plan adjustments.
                                    </li>
                                    <li>
                                        Progress Reviews: Families receive formal updates and re-assessments every 3–6 months (or as required by insurance).
                                    </li>
                                </ul>
                            </p>
                             </div>
                        </div>
                <Footer />
                </>
        </>
    )
}