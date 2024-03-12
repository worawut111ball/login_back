
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const password = bcrypt.hashSync('123456');
const userData = [
  {name: "worawut",username: "ball",password,email: "ball@gmail.com",  phone: "" },//Admin
  {name: "vobar",username: "bio",password,email: "booo@gmail.com",  phone: "" },
];
// const venueData = [
//   {name:"ร้าน A",  address:"มหาสารคาม", phone:"0826079703"}
// ];

const run = async () => {
  try {
    await prisma.user.createMany({
      data: userData,
    });
    // await prisma.venue.createMany({
    //   data: venueData,
    // });
    
    console.log('Seed successful!');
  } catch (error) {
    console.error('Seed failed with error:', error);
  } finally {
    await prisma.$disconnect(); 
  }
};

run();
