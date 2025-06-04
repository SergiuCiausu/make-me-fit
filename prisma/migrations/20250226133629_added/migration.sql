-- CreateEnum
CREATE TYPE "GrupeMuschi" AS ENUM ('ABDOMEN', 'FESIERI', 'COAPSE', 'PIEPT', 'BRATE', 'UMERI', 'SPATE');

-- AlterTable
ALTER TABLE "Exercitiu" ADD COLUMN     "muschi" "GrupeMuschi"[];
