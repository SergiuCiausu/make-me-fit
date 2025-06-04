-- CreateEnum
CREATE TYPE "Locatie" AS ENUM ('ORIUNDE', 'IN_SALA');

-- CreateEnum
CREATE TYPE "Dificultate" AS ENUM ('INCEPATOR', 'MEDIU', 'AVANSAT');

-- CreateTable
CREATE TABLE "Program" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "heroP" TEXT NOT NULL,
    "textBtn" VARCHAR(255) NOT NULL,
    "previewClip" VARCHAR(255) NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" SERIAL NOT NULL,
    "programId" INTEGER NOT NULL,
    "nume" TEXT NOT NULL,
    "varsta" INTEGER NOT NULL,
    "poza" VARCHAR(255) NOT NULL,
    "descriere" TEXT NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reteta" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "poza" VARCHAR(255) NOT NULL,
    "timpPreparare" INTEGER NOT NULL,
    "programId" INTEGER,

    CONSTRAINT "Reteta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" SERIAL NOT NULL,
    "nume" TEXT NOT NULL,
    "retetaId" INTEGER,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RetetaIngredient" (
    "id" SERIAL NOT NULL,
    "retetaId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "cantitate" VARCHAR(255) NOT NULL,

    CONSTRAINT "RetetaIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercitiu" (
    "id" SERIAL NOT NULL,
    "programId" INTEGER NOT NULL,
    "nume" VARCHAR(255) NOT NULL,
    "descriere" TEXT,
    "explicatie" TEXT,
    "poza" VARCHAR(255) NOT NULL,
    "locatie" "Locatie"[],
    "dificultate" "Dificultate"[],
    "durata" INTEGER NOT NULL,

    CONSTRAINT "Exercitiu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Progresie" (
    "id" SERIAL NOT NULL,
    "exercitiuId" INTEGER NOT NULL,
    "nume" VARCHAR(255) NOT NULL,
    "descriere" TEXT,
    "explicatie" TEXT,
    "poza" VARCHAR(255) NOT NULL,
    "programId" INTEGER,

    CONSTRAINT "Progresie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControlGreutate" (
    "id" SERIAL NOT NULL,
    "programId" INTEGER NOT NULL,
    "nume" VARCHAR(255) NOT NULL,

    CONSTRAINT "ControlGreutate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Program_nume_key" ON "Program"("nume");

-- AddForeignKey
ALTER TABLE "Testimonial" ADD CONSTRAINT "Testimonial_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reteta" ADD CONSTRAINT "Reteta_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_retetaId_fkey" FOREIGN KEY ("retetaId") REFERENCES "Reteta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetetaIngredient" ADD CONSTRAINT "RetetaIngredient_retetaId_fkey" FOREIGN KEY ("retetaId") REFERENCES "Reteta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RetetaIngredient" ADD CONSTRAINT "RetetaIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercitiu" ADD CONSTRAINT "Exercitiu_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progresie" ADD CONSTRAINT "Progresie_exercitiuId_fkey" FOREIGN KEY ("exercitiuId") REFERENCES "Exercitiu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progresie" ADD CONSTRAINT "Progresie_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ControlGreutate" ADD CONSTRAINT "ControlGreutate_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
