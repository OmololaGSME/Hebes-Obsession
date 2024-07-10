import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Admin, User } from "./Pages"



function App() {
  
{/* <p>Put your routing here </p> 
  create the login and signup page and set the login page as the default and route it to the home page
  the login page should be <Route path="/" element={<Login/>}/>. this is for mustapaha babtunde
  */}

  return (
    <Router>
    <Routes>
      <Route path="*" element={<User/>}/>
      <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </Router>
  )
}

export default App
