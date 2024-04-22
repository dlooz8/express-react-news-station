/*
  Warnings:

  - You are about to drop the column `count_bookmarks` on the `Posts` table. All the data in the column will be lost.
  - You are about to drop the column `count_likes` on the `Posts` table. All the data in the column will be lost.
  - Added the required column `tags` to the `Posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Posts" DROP COLUMN "count_bookmarks",
DROP COLUMN "count_likes",
ADD COLUMN     "tags" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Comments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,

    CONSTRAINT "Comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NestedComments" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "parent_comment_id" TEXT NOT NULL,

    CONSTRAINT "NestedComments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "FK__Posts" FOREIGN KEY ("post_id") REFERENCES "Posts"("post_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Comments" ADD CONSTRAINT "FK__Users" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "NestedComments" ADD CONSTRAINT "FK__Posts" FOREIGN KEY ("post_id") REFERENCES "Posts"("post_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "NestedComments" ADD CONSTRAINT "NestedComments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NestedComments" ADD CONSTRAINT "ParentCommentId" FOREIGN KEY ("parent_comment_id") REFERENCES "Comments"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
