/*
  Warnings:

  - You are about to drop the column `specialty_id` on the `doctors` table. All the data in the column will be lost.
  - You are about to drop the `doctors_specialties` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[number,uf]` on the table `doctors_crm` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `uf` to the `doctors_crm` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "doctors" DROP CONSTRAINT "doctors_specialty_id_fkey";

-- DropIndex
DROP INDEX "doctors_crm_number_doctor_id_key";

-- DropIndex
DROP INDEX "doctors_crm_number_key";

-- AlterTable
ALTER TABLE "doctors" DROP COLUMN "specialty_id";

-- AlterTable
ALTER TABLE "doctors_crm" ADD COLUMN     "uf" TEXT NOT NULL;

-- DropTable
DROP TABLE "doctors_specialties";

-- CreateTable
CREATE TABLE "specialties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "specialties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor_specialties" (
    "doctor_id" INTEGER NOT NULL,
    "specialty_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "specialties_name_key" ON "specialties"("name");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_specialties_doctor_id_specialty_id_key" ON "doctor_specialties"("doctor_id", "specialty_id");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_crm_number_uf_key" ON "doctors_crm"("number", "uf");

-- AddForeignKey
ALTER TABLE "doctor_specialties" ADD CONSTRAINT "doctor_specialties_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_specialties" ADD CONSTRAINT "doctor_specialties_specialty_id_fkey" FOREIGN KEY ("specialty_id") REFERENCES "specialties"("id") ON DELETE CASCADE ON UPDATE CASCADE;
