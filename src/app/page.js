import HomeComponent from "@/components/HomeComponent";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getData() {
  const reflections = await prisma.reflectionList.findMany();

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const displayReflections = async () => {
    "use server";
    const items = await prisma.reflectionList.findMany();
    return items;
  };
  const createReflection = async (val) => {
    "use server";
    await prisma.reflectionList.create({
      data: val,
    });
  };
  return (
    <HomeComponent
      data={displayReflections}
      createReflection={createReflection}
    />
  );
}
