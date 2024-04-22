-- AlterTable
ALTER TABLE "Posts" ADD COLUMN     "count_bookmarks" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "count_likes" INTEGER NOT NULL DEFAULT 0;
