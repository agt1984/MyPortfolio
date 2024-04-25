import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-15 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="orange-gradient_text"> &nbsp;&lt; HOME /&gt;&nbsp; </p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-orange-500 font-bold"
          }
        >
          &nbsp;&lt; Sobre Mi /&gt;&nbsp;
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-red-500 font-bold" : "text-orange-500 font-bold"
          }
        >
          &nbsp;&lt; Proyectos /&gt;&nbsp;
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar