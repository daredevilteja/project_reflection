import HomeComponent from "@/components/HomeComponent";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();



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
