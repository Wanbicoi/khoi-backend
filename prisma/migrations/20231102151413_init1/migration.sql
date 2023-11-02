/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `details` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listPrice` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_ownerId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "ownerId",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "details" JSONB NOT NULL,
ADD COLUMN     "listPrice" SMALLINT NOT NULL,
ADD COLUMN     "quantity" SMALLINT NOT NULL,
ADD COLUMN     "weight" SMALLINT NOT NULL,
ALTER COLUMN "price" SET DATA TYPE SMALLINT;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "userName" TEXT NOT NULL,
    "userPhone" TEXT NOT NULL,
    "userComment" TEXT NOT NULL,
    "userStar" SMALLINT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "createdAt" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "details" JSONB NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToProduct_AB_unique" ON "_CategoryToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToProduct_B_index" ON "_CategoryToProduct"("B");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToProduct" ADD CONSTRAINT "_CategoryToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
