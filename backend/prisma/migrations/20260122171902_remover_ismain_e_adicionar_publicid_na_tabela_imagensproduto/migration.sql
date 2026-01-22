/*
  Warnings:

  - You are about to drop the column `alt` on the `product_images` table. All the data in the column will be lost.
  - You are about to drop the column `is_main` on the `product_images` table. All the data in the column will be lost.
  - Added the required column `description` to the `product_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `public_id` to the `product_images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_images" DROP COLUMN "alt",
DROP COLUMN "is_main",
ADD COLUMN     "description" VARCHAR(100) NOT NULL,
ADD COLUMN     "public_id" TEXT NOT NULL;
