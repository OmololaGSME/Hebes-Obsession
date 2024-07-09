import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="flex items-center justify-between py-[8px] px-[60px] bg-[#FDFDFD] border-b-[2px] border-[#D2D2CF]">
        <div className="w-[80px] h-[80px] ">
        <img src="./logo.png" alt="Brand logo"/>
        </div>
        <div className="flex space-x-14 items-center font-[600] text-[22px]">
        <div className="flex items-center space-x-1 focus:text-[#988244]">
        <img src="./logout.svg" className="w-[18%]"/>
        <Link>LogOut</Link>
        </div>
        <Link className="focus:text-[#988244] ">Image Directory</Link>
        <Link to='/Service' className="focus:text-[#988244]">Services</Link>
        <Link className="focus:text-[#988244] ">Product</Link>
        <Link className=" focus:text-[#988244]">Contact Us</Link>
        </div>
    </div>
  )
}

export default Header