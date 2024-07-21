import { Routes, Route } from "react-router-dom"
import {Home} from '../Client-Section'

const User = () => {
  return (
    <Routes>
    <Route path ='/' element={<Home/>}/>

    </Routes>
  )
}

export default User


// this is for the high fidelity section