import React, {useState} from 'react';
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Sidebar.css';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    
    const showSideBar = () => setSidebar(!sidebar);

    return (
       <>
        <IconContext.Provider value={{ color: '#fff' }}>
       <div className='navbar'>
         <Link to="#" className="menu-bars">
             <FcIcons.FcMenu onClick={showSideBar} />
         </Link>
         <span className='system-title-text'>Sales & Stock Management System</span>
         <Link to="https://facebook.com/sgsv" target="_blank" className='social-links social-links-email'>
             <FiIcons.FiMail />
         </Link>
         <Link to="https://facebook.com/sgsv" target="_blank" className='social-links'>
             <FaIcons.FaFacebook />
         </Link>
         <Link to="https://facebook.com/sgsv" target="_blank" className='social-links'>
             <FaIcons.FaInstagram />
         </Link>
         <Link to="https://facebook.com/sgsv" target="_blank" className='social-links'>
             <FaIcons.FaLinkedin />
         </Link>
       </div>
       <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
           <ul className='nav-menu-items' onClick={showSideBar}>
               <li className='navbar-toggle'>
                   <Link to="#" className='menu-bars'>
                     <AiIcons.AiOutlineClose />
                   </Link>
               </li>
               {SidebarData.map((item, index) => {
                   return (
                       <li key={index} className={item.cName}>
                           <Link to={item.path}>
                           {item.icon}
                           <span>{item.title}</span>
                           </Link>
                       </li>
                   )
               })}
           </ul>
       </nav>
       </IconContext.Provider>
       </>
    );
}
export default Sidebar;
