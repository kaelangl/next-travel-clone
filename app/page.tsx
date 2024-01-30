import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";  
import prisma from "@/lib/prisma";

export default async function Home() {
  // const prisma = new PrismaClient();
  console.log("Hello from Home")

  const allLocations = await prisma.location.findMany();
  const allRoutes = await prisma.route.findMany();
  const aRoute = await prisma.route.findFirst();
  // console.log(allLocations);
  // console.log(allRoutes);
  console.log(aRoute);

  return (
    <>
      <h2>Hello, {aRoute?.name}</h2>
      <Hero />
      <Camp aRoute={aRoute}/>
      <Guide />
    </>
  )
}
