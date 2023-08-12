-- CreateTable
CREATE TABLE "doctors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "specialty_id" INTEGER NOT NULL,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctors_phones" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "doctor_id" INTEGER NOT NULL,

    CONSTRAINT "doctors_phones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctors_crm" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "doctor_id" INTEGER NOT NULL,

    CONSTRAINT "doctors_crm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctors_specialties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "doctors_specialties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctors_phones_number_doctor_id_key" ON "doctors_phones"("number", "doctor_id");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_crm_number_key" ON "doctors_crm"("number");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_crm_doctor_id_key" ON "doctors_crm"("doctor_id");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_crm_number_doctor_id_key" ON "doctors_crm"("number", "doctor_id");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_specialties_name_key" ON "doctors_specialties"("name");

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_specialty_id_fkey" FOREIGN KEY ("specialty_id") REFERENCES "doctors_specialties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctors_phones" ADD CONSTRAINT "doctors_phones_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctors_crm" ADD CONSTRAINT "doctors_crm_doctor_id_fkey" FOREIGN KEY ("doctor_id") REFERENCES "doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
