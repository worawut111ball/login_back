const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const password = bcrypt.hashSync('123456');
const userData = [
  {name: "worawut",username: "ball",password,email: "ball@gmail.com",  phone: "" },
  {name: "vobar",username: "bio",password,email: "booo@gmail.com",  phone: "" },
  
];

const run = async () => {
  try {
    await prisma.user.createMany({
      data: userData,
    });
    console.log('Seed successful!');
  } catch (error) {
    console.error('Seed failed with error:', error);
  } finally {
    await prisma.$disconnect(); 
  }
};

run();
