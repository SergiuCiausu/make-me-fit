"use client";

import React from 'react'
import NavLinks from './NavLinks';
import "@/app/make-me-fit/globals.css";


const Navbar = () => {

  return (
    <nav 
      className="flex nav-make-me-fit items-center justify-between" 
      style={{ 
        margin: "0 var(--body-margin)" }}>
        <button
          onClick={() => window.location.href = "/make-me-fit"} 
          className="uppercase font-body font-bold nav-make-me-fit-home cursor-pointer" 
          style={{ 
            fontSize: "var(--nav-link-size)" }}>
            Make Me Fit
        </button>
        <NavLinks />
    </nav>
  )
}

export default Navbar