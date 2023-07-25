-- CreateTable
CREATE TABLE "ReflectionList" (
    "id" SERIAL NOT NULL,
    "reflectionLevel" INTEGER NOT NULL DEFAULT 1,
    "reflection" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "ReflectionList_pkey" PRIMARY KEY ("id")
);
