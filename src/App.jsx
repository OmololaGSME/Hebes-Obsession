import { Home, Service } from './Pages'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  
{/* <p>Put your routing here </p> */}
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Service' element={<Service/>}/>
    </Routes>
    </Router>
  )
}

export default App
