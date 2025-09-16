import { Routes, Route} from 'react-router-dom'
import Home from './home'
import AboutUs from './about.tsx'
import Services from './Services.tsx'
import Assessment from './assessment.tsx'
function App() {
  return (
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/services' element={<Services />} />
        <Route path= '/services/assessment' element = {<Assessment />} />
      </Routes>
   
  )
}

export default App