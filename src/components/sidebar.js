import React from "react";
import Link from 'next/link';

const Sidebar = ({ onMenuClick, onChange, isCollapsed, toggleSidebar }) => {
  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
    {/* Toggle Button */}
    <button className="toggle-sidebar" onClick={toggleSidebar}>
      {isCollapsed ? "➤" : "◄"} {/* Adjust arrow direction */}
    </button>

    {/* Logo */}
    <div className="logo">
      <img src="/logo1.jpg" alt="Weather App Logo" />
    </div>

    {/* Navigation Links */}
    <ul>
<li>
  <a href="#" onClick={() => onMenuClick("home")} className="flex size-full group font-semibold rounded-full bg-cover hover:bg-green-100 hover:shadow-inner focus:bg-gradient-to-r from-[#0e9a85] to-[#0e9a85] focus:text-white text-gray-700 transition-all ease-linear">
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg>
    <i className="fas fa-home"></i> <span>Home</span>
  </a>
</li>
<li>
  <a href="#" onClick={() => onMenuClick("laboratory")} className="flex size-full group font-semibold rounded-full bg-cover hover:bg-green-100 hover:shadow-inner focus:bg-gradient-to-r from-[#0e9a85] to-[#0e9a85] focus:text-white text-gray-700 transition-all ease-linear">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="ml-1 bi bi-pc-display-horizontal" viewBox="0 0 16 16">
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5M12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0m2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0M1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25"/>
</svg>
    <i className="fas fa-comments"></i> <span className="ml-[0.1rem]">Laboratory</span>
  </a>
</li>
<li>
  <a href="#" onClick={() => onMenuClick("userdetails")} className="flex size-full group font-semibold rounded-full bg-cover hover:bg-green-100 hover:shadow-inner focus:bg-gradient-to-r from-[#0e9a85] to-[#0e9a85] focus:text-white text-gray-700 transition-all ease-linear">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="ml-[0.1rem] bi bi-person-rolodex" viewBox="0 0 16 16">
  <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z"/>
</svg>
    <i className="fas fa-comments"></i> <span className="ml-[0.1rem]">User Details</span>
  </a>
</li>

<li>
  <a
    href="#"
    onClick={() => onMenuClick("logout")}
    className="logout"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h6q.425 0 .713.288T12 4t-.288.713T11 5H5v14h6q.425 0 .713.288T12 20t-.288.713T11 21zm12.175-8H10q-.425 0-.712-.288T9 12t.288-.712T10 11h7.175L15.3 9.125q-.275-.275-.275-.675t.275-.7t.7-.313t.725.288L20.3 11.3q.3.3.3.7t-.3.7l-3.575 3.575q-.3.3-.712.288t-.713-.313q-.275-.3-.262-.712t.287-.688z"/></svg>
    <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
  </a>
</li>
</ul>

  </nav>

    
  );
};

export default Sidebar;
