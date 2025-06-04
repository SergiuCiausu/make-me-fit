"use client";

import Link from 'next/link';
import React from 'react'
import NavButtons from './NavButtons';
import "@/app/make-me-fit/globals.css";

const NavLinks = () => {
    
    interface NavLinks {
        href: string,
        label: string
    }

    const links = ["Programe", "Oferte", "Transformări", "Despre mine", "Blog"];

    
    /* \/ Construirea de href-uri pentru fiecare link \/ */

    const navLinks: NavLinks[] = links.map(link => ({
        href: link.replace(/\s+/g, "-").toLowerCase(),
        label: link
    }))

  return (
    <div>
        <div 
            className="flex items-center"
            style={{
                gap: "var(--32px)"
            }}>
            {navLinks.map(link => 
                <Link 
                    key={link.href} 
                    href={`/make-me-fit/${link.href}`} 
                    className="font-body font-bold uppercase nav-links-make-me-fit select-none"
                    style={{ fontSize: "var(--nav-link-size)" }}>
                    {link.label}
                </Link>)}
            <NavButtons />
        </div>  
    </div>
    
  )
}

export default NavLinks