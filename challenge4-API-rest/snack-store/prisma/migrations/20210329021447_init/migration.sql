/*
  Warnings:

  - The migration will change the primary key for the `LIKES` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LIKES` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "LIKES" DROP CONSTRAINT "LIKES_pkey",
DROP COLUMN "id",
ADD COLUMN     "ids" SERIAL NOT NULL,
ADD PRIMARY KEY ("ids");
