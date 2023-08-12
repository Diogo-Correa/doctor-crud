/*
  Warnings:

  - Added the required column `created_at` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `doctors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `doctors_crm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `doctors_crm` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `doctors_phones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `doctors_phones` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_at` to the `doctors_specialties` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `doctors_specialties` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "doctors" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "doctors_crm" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "doctors_phones" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "doctors_specialties" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
