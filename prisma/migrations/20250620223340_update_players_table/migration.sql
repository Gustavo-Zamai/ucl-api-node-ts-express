/*
  Warnings:

  - You are about to drop the `Player` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Player";

-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "club" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "statistics" JSONB NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);
