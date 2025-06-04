"use client";

import React from 'react'
import "@/app/make-me-fit/globals.css";

const NavButtons = () => {
  return (
    <div className="flex items-center gap-4">
        <button onClick={() => window.location.href = '/'} className="font-bold uppercase nav-make-me-fit-btn-1 rounded-md select-none cursor-pointer">Alege program</button>
        <button onClick={() => window.location.href = '/'} className="font-bold uppercase nav-make-me-fit-btn-2 rounded-md select-none cursor-pointer">Loghează-te</button>
    </div>
  )
}

export default NavButtons