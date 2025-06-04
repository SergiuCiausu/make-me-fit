import React from 'react'
import prisma from '@/prisma/client'
import CheckoutProgram from './CheckoutProgram'

const DateProgram = async ({ program }: { program: string }) => {

    const programDB = await prisma.program.findUnique({
        where: {
            nume: program
        }
    })

    if(!programDB) {
        return;
    }

    return(
        <section>
            <CheckoutProgram nume={programDB.nume} descriere={programDB.descriere} img={programDB.img} pret={programDB.pret}/>
        </section>
    )
}

export default DateProgram