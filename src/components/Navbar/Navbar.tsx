import { FaPhoneAlt } from "react-icons/fa";

import { NavLInk } from "../../constant/NavLink";
import Darkmode from "./Darkmode";
import { Logo } from "../../image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import Responsive from "./Responsive";

const Navbar = () => {

  const [showMenu , setMenu] = useState(false);
  const handelMenuToggle = ()=> setMenu (!showMenu)
  
  return (
    <div>
      <div>
        {/* top */}
        <div className="bg-primary">
          <div className=" container hidden bg-primary lg:flex items-center justify-between py-2">
           <div className="flex items-center gap-4">
            <p><FaPhoneAlt /></p>
            <p>+9777-5825525</p>
           </div>
          <p>Free Shipping on Orders Above Rs. 2000</p>
         </div>
        </div>

        {/* bottom */}
        <div className="dark:bg-black dark:text-white">
            <div className="container flex justify-between">
                <img src={Logo} alt="image" className="w-20" />
                
                <div>
                    <ul className="hidden lg:flex items-center h-full gap-5">
                        {NavLInk.map((item)=>(
                            <li key={item.id} className="font-semibold text-lg hover:text-primary
                            cursor-pointer duration-500">
                                <a href={item.path}>{item.name}</a>
                            </li>
                        ))}

                        <button className="bg-primary px-5 py-1 rounded-lg font-semibold">shop now</button>
                    <Darkmode/>
                    </ul>
                </div>
               {/* responsive = mobile view */}
                <div className="flex lg:hidden items-center gap-4 px-3">
                  <Darkmode/>
                          {showMenu ? (
                            <IoMdClose onClick={handelMenuToggle}/>
                          ):(
                            <CiMenuBurger onClick={handelMenuToggle}/>
                          )}
                </div>

            </div>
        </div>
      </div>
      <Responsive showMenu={showMenu}/>
    </div>
  );
};

export default Navbar;