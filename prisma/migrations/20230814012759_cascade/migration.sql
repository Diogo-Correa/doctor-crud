-- DropForeignKey
ALTER TABLE "doctors_crm" DROP CONSTRAINT "doctors_crm_doctor_id_fkey";

-- DropForeignKey
ALTER TABLE "doctors_phones" DROP CONSTRAINT "doctors_phones_doctor_id_fkey";

-- AddForeignKey
ALTER TABLE "doctors_phones" ADD CONSTRAINT "doctors_phones_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctors_crm" ADD CONSTRAINT "doctors_crm_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
