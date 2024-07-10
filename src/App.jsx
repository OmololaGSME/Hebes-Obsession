import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home, Service } from './Pages'


function App() {
  
{/* <p>Put your routing here </p> 
  create the login and signup page and set the login page as the default and route it to the home page
  the login page should be <Route path="/" element={<Login/>}/>. this is for mustapaha babtunde
  */}

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
