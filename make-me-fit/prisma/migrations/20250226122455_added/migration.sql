-- CreateTable
CREATE TABLE "ProgramReteta" (
    "programId" INTEGER NOT NULL,
    "retetaId" INTEGER NOT NULL,

    CONSTRAINT "ProgramReteta_pkey" PRIMARY KEY ("programId","retetaId")
);

-- CreateTable
CREATE TABLE "ProgramExercitiu" (
    "programId" INTEGER NOT NULL,
    "exercitiuId" INTEGER NOT NULL,

    CONSTRAINT "ProgramExercitiu_pkey" PRIMARY KEY ("programId","exercitiuId")
);

-- CreateTable
CREATE TABLE "ExercitiuProgresie" (
    "exercitiuId" INTEGER NOT NULL,
    "progresieId" INTEGER NOT NULL,

    CONSTRAINT "ExercitiuProgresie_pkey" PRIMARY KEY ("exercitiuId","progresieId")
);

-- CreateTable
CREATE TABLE "ProgramProgresie" (
    "programId" INTEGER NOT NULL,
    "progresieId" INTEGER NOT NULL,

    CONSTRAINT "ProgramProgresie_pkey" PRIMARY KEY ("programId","progresieId")
);

-- CreateTable
CREATE TABLE "ProgramControlGreutate" (
    "programId" INTEGER NOT NULL,
    "controlGreutateId" INTEGER NOT NULL,

    CONSTRAINT "ProgramControlGreutate_pkey" PRIMARY KEY ("programId","controlGreutateId")
);

-- AddForeignKey
ALTER TABLE "ProgramReteta" ADD CONSTRAINT "ProgramReteta_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramReteta" ADD CONSTRAINT "ProgramReteta_retetaId_fkey" FOREIGN KEY ("retetaId") REFERENCES "Reteta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramExercitiu" ADD CONSTRAINT "ProgramExercitiu_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramExercitiu" ADD CONSTRAINT "ProgramExercitiu_exercitiuId_fkey" FOREIGN KEY ("exercitiuId") REFERENCES "Exercitiu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercitiuProgresie" ADD CONSTRAINT "ExercitiuProgresie_exercitiuId_fkey" FOREIGN KEY ("exercitiuId") REFERENCES "Exercitiu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercitiuProgresie" ADD CONSTRAINT "ExercitiuProgresie_progresieId_fkey" FOREIGN KEY ("progresieId") REFERENCES "Progresie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramProgresie" ADD CONSTRAINT "ProgramProgresie_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramProgresie" ADD CONSTRAINT "ProgramProgresie_progresieId_fkey" FOREIGN KEY ("progresieId") REFERENCES "Progresie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramControlGreutate" ADD CONSTRAINT "ProgramControlGreutate_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgramControlGreutate" ADD CONSTRAINT "ProgramControlGreutate_controlGreutateId_fkey" FOREIGN KEY ("controlGreutateId") REFERENCES "ControlGreutate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
