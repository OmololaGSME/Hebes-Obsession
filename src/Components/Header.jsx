import { useState } from "react";
import { Link } from "react-router-dom";

const admin_navItems = [
  { link: "/admin/image_directory", name: "Image Directory" },
  { link: "/admin/Service", name: "Services" },
  { link: "/admin", name: "Product" },
  { link: "/admin", name: "Contact Us" },
];

const user_navItems = [
  {link:'/service', name:'Services'},
  {link:'', name:'Product'},
  { link: "", name: "Contact Us" },
 
]

const Header = ({ isAdmin }) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (index) => {
    setClicked(index);
  };

  if (isAdmin) {
    return (
      <div className="flex items-center justify-between py-[8px] slg:px-[60px] bg-[#FDFDFD] border-b-[2px] border-[#D2D2CF]">
        <div className="w-[80px] h-[80px] ">
          <Link to="/admin">
            <img src="/logo.png" alt="Brand logo" />
          </Link>
        </div>
        <div className="flex slg:space-x-14 space-x-3 items-center font-[600] text-[22px]">
          <div className="flex items-center space-x-1 focus:text-[#988244]">
            <img src="/logout.svg" className="w-[18%]" />
            <Link>LogOut</Link>
          </div>

          {admin_navItems.map((nav,index) => (
            <Link key={index} to={nav.link}>
              <button
              onClick={()=>handleClick(index)}
              className={`${clicked === index ?'text-[#988244]':''}`}
              >
              {nav.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-between py-[8px] slg:px-[60px] bg-[#FDFDFD] border-b-[2px] border-[#D2D2CF]">
        <div className="w-[80px] h-[80px] ">
         <Link to={'/'}> <img src="/logo.png" alt="Brand logo" /></Link>
        </div>
        <div className="flex slg:space-x-14 space-x-3 items-center font-[600] text-[22px]">
        {user_navItems.map((nav,index) => (
            <Link key={index} to={nav.link}>
              <button
              onClick={()=>handleClick(index)}
              className={`${clicked === index ?'text-[#988244]':''}`}
              >
              {nav.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
    );
  }
};

export default Header;
