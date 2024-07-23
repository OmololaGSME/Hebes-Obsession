import { Routes, Route } from "react-router-dom"
import { Home, ImageDirectory, Service } from '../Admin-Section'


const Admin = () => {
  return (
    <div>
        
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path="/image_directory" element={<ImageDirectory/>}/>
            </Routes>
        
    </div>
  )
}

export default Admin


// this is for the admin page
// put all your routes for the admin high fidelity section
{/* <p>Put your routing here </p> 
  create the login and signup page and set the login page as the default and route it to the home page
  the login page should be <Route path="/" element={<Login/>}/>. this is for mustapaha babtunde
  */}