/*
  Warnings:

  - You are about to drop the column `user_id` on the `venues` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `venues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `venues` DROP COLUMN `user_id`,
    ADD COLUMN `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updated_at` TIMESTAMP(0) NOT NULL;
