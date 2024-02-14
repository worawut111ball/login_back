const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database login1')
  await prisma.$executeRawUnsafe('CREATE Database login1')
}
console.log('Reset DB')
run()