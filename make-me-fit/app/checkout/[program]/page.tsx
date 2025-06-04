import prisma from '@/prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import DateleClientei from './components/DateleClientei';
import DateProgram from './components/DateProgram';

const page = async (params: { params : Promise<{ program: string }>}) => {
    const { program } = await params.params;
    const result = await prisma.program.findUnique({where:{nume: program}});

    if(!result) {
        notFound();
    }
  return (
    <div>
      <header>
        <nav
          className="flex justify-between"
          style={{
            marginLeft: "var(--body-margin)",
            marginRight: "var(--checkout-mr)",
            padding: "var(--nav-py) 0"
          }}>
            <Link 
              href="/" 
              className="font-body font-bold uppercase text-accentColor2"
              style={{
                fontSize: "var(--nav-link-size)"
              }}>
                Make Me Fit
            </Link>
            <button 
              className="font-body text-accentColor2"
              style={{
                fontSize: "var(--nav-link-size)",
                zIndex: 10
              }}>
                  Schimbă program
            </button>
        </nav>
      </header>
      <section>
        <form 
          action="" 
          className="flex"
          style={{
            margin: "var(--input-section-py) var(--body-margin)"
          }}>
          <div
            className="w-[65%]">
            <DateleClientei />
          </div> 
          <div>
            <DateProgram program={program}/>
          </div>
        </form>
      </section>
    </div>
    
    
  )
}

export default page