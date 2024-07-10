import { Routes, Route } from "react-router-dom"
import { Home, Service } from '../Admin-Section'

const Admin = () => {
  return (
    <div>
        
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Service' element={<Service/>}/>
            </Routes>
        
    </div>
  )
}

export default Admin


// this is for the admin page
// put all your routes for the admin high fidelity section