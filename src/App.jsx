import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Admin, User } from "./Pages"



function App() {
  


  return (
    <Router>
    <Routes>
      <Route path="/*" element={<User/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
    </Routes>
    </Router>
  )
}

export default App
