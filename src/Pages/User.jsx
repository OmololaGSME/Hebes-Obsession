import { Routes, Route } from "react-router-dom"
import {Home} from '../High-Fidelity-Section'

const User = () => {
  return (
    <Routes>
    <Route path ='/' element={<Home/>}/>

    </Routes>
  )
}

export default User


// this is for the high fidelity section