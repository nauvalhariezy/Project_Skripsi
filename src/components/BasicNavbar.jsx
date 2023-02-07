import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo_PENS_putih.png";

export const BasicNavbar = (_props) => {
  const [activeMenu, setActiveMenu] = useState('')
  useEffect(() => {
    let recent_url = window.location.pathname.split('/')
    if (recent_url[recent_url.length-1] === '') {
      recent_url[recent_url.length-1] = 'dashboard_main'
    }
    setActiveMenu(recent_url[recent_url.length-1])
  }, [])

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative items-center">
      <div className="relative">
        <NavLink to={'/'} onClick={()=>setActiveMenu('dashboard_main')} className="inline-flex items-center p-2 rounded">
          <img
            className="w-12 h-12 drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]"
            src={logo}
            alt="user-profile"
          />
          <span className="text-white font-bold text-2xl ml-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)]">DEPARTEMEN TEKNOLOGI MULTIMEDIA KREATIF</span>
        </NavLink>
      </div>
      <div className="flex items-center gap-x-1">
        <NavLink to={'/'} onClick={()=>setActiveMenu('dashboard_main')} className={`${activeMenu === 'dashboard_main' ? 'font-bold text-white' : 'text-gray-300'} items-center p-2 hover:bg-blue-700 rounded text-lg px-4`}> 
          Home
        </NavLink>
        <NavLink to={'/menu2'} onClick={()=>setActiveMenu('menu2')} className={`${activeMenu === 'menu2' ? 'text-white' : 'text-gray-300'} items-center p-2 hover:bg-blue-700 rounded text-lg px-4`}> 
          Alat Lab
        </NavLink>
        <NavLink to={'/menu3'} onClick={()=>setActiveMenu('menu3')} className={`${activeMenu === 'menu3' ? 'text-white' : 'text-gray-300'} items-center p-2 hover:bg-blue-700 rounded text-lg px-4`}> 
          Laboratorium
        </NavLink>
        <NavLink to={'/menu3'} onClick={()=>setActiveMenu('menu3')} className={`${activeMenu === 'menu3' ? 'text-white' : 'text-gray-300'} items-center p-2 hover:bg-blue-700 rounded text-lg px-4`}> 
          Login
        </NavLink>
      </div>
    </div>
  );
};
