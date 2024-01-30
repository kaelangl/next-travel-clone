import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const allLocations = await prisma.location.findMany()
    console.log(allLocations)

    const allRoutes = await prisma.route.findMany()
    console.log(allRoutes) 
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })