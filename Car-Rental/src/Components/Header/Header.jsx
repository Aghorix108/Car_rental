import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiHome  } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";
export default function Header(props) {


  return (
    <>
      <nav className="flex flex-row lg:flex-row h-auto md:p-5 lg:h-20 justify-center items-center bg-gradient-to-r from-blue-50 to-white flex-shrink-0">
        <ul className="flex flex-row items-center space-x-8 font-medium lg:bg-transparent p-4 lg:p-0 gap-2">
          <li className='w-auto'>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FF6600]" : "text-[#989898]"
                }  lg:hover:bg-transparent lg:border-0 text-2xl hover:text-orange-500 p-0 flex items-center gap-1`
              }
            >
              <FiHome />
              <span className="hidden lg:block">Home</span>
            </NavLink>
          </li>
          <li className='w-auto'>
            <NavLink
              to="/Cars"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FF6600]" : "text-[#989898]"
                }  lg:hover:bg-transparent lg:border-0 text-2xl hover:text-orange-500 p-0 flex items-center gap-1`
              }
            >
              <FaCar />
              <span className="hidden lg:block">Cars</span>
            </NavLink>
          </li>
          <li className='w-auto'>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FF6600]" : "text-[#989898]"
                }  lg:hover:bg-transparent lg:border-0 text-2xl hover:text-orange-500 p-0 flex items-center gap-1`
              }
            >
              <IoIosPeople />
              <span className="hidden lg:block">About</span>
            </NavLink>
          </li>
          <li className='w-auto'>
            <NavLink
              to="/Partner"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#FF6600]" : "text-[#989898]"
                }  lg:hover:bg-transparent lg:border-0 text-2xl hover:text-orange-500 p-0 flex items-center gap-1`
              }
            >
              <FaHandshakeSimple />
              <span className="hidden lg:block">Partner</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
