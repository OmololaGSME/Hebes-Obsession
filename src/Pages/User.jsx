import { Routes, Route } from "react-router-dom"
import {Home, Service} from '../Client-Section'

const User = () => {
  return (
    <Routes>
    <Route path ='/' element={<Home/>}/>
    <Route path="/service" element={<Service/>}/>
    </Routes>
  )
}

export default User


// this is for the high fidelity section