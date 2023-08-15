/*
  Warnings:

  - You are about to drop the column `created_at` on the `doctor_specialties` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `specialties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctor_specialties" DROP COLUMN "created_at";

-- AlterTable
ALTER TABLE "specialties" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL;
