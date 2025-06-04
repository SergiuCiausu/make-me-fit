/*
  Warnings:

  - You are about to drop the column `programId` on the `Reteta` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reteta" DROP CONSTRAINT "Reteta_programId_fkey";

-- AlterTable
ALTER TABLE "Reteta" DROP COLUMN "programId";

-- CreateTable
CREATE TABLE "_ProgramReteta" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProgramReteta_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProgramReteta_B_index" ON "_ProgramReteta"("B");

-- AddForeignKey
ALTER TABLE "_ProgramReteta" ADD CONSTRAINT "_ProgramReteta_A_fkey" FOREIGN KEY ("A") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProgramReteta" ADD CONSTRAINT "_ProgramReteta_B_fkey" FOREIGN KEY ("B") REFERENCES "Reteta"("id") ON DELETE CASCADE ON UPDATE CASCADE;
