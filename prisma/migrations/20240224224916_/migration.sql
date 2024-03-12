/*
  Warnings:

  - You are about to alter the column `status` on the `reservations` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to drop the column `user_id` on the `tables` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `venues` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `reservations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reservations` DROP FOREIGN KEY `reservations_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `tables` DROP FOREIGN KEY `tables_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `venues` DROP FOREIGN KEY `venues_user_id_fkey`;

-- AlterTable
ALTER TABLE `reservations` ADD COLUMN `created_at` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    ADD COLUMN `updated_at` TIMESTAMP(0) NOT NULL,
    MODIFY `status` ENUM('PENDING', 'DOING', 'DONE') NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE `tables` DROP COLUMN `user_id`;

-- AlterTable
ALTER TABLE `venues` DROP COLUMN `user_id`;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
