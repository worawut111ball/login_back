/*
  Warnings:

  - Added the required column `venue_id` to the `tables` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `venues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tables` ADD COLUMN `venue_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `venues` ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `tables` ADD CONSTRAINT `tables_venue_id_fkey` FOREIGN KEY (`venue_id`) REFERENCES `venues`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
