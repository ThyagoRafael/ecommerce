-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'client');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'client';
