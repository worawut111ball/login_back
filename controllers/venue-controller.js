const db = require("../models/db");
const { Status } = require("@prisma/client");

//ร้าน
exports.venueAll = async (req, res, next) => {
  try {
    const venues = await db.venue.findMany({});
    res.json({ venues });
  } catch (err) {
    next(err);
  }
};


//โต๊ะ
exports.tableAll = async (req, res, next) => {
  try {
    const tables = await db.table.findMany();
    res.json({ tables });
  } catch (err) {
    next(err);
  }
};
exports.tableBy = async (req, res, next) => {
  try {
    const { venueId } = req.params; 
    const tables = await db.table.findMany({
      where: { venueId: +venueId }, 
      include: { Venue: true },
    });
    res.json({ tables });
  } catch (err) {
    next(err);
  }
};

exports.getAllStatusTabel = async (req, res, next) => {
  res.json({ status: Object.values(Status) });
};
// exports.getAllStatusTabel = async (req, res, next) => {
//   const TABLESTATUS = {
//     OFF: "OFF",
//     OPEN: "OPEN"
//   };
//   res.json({ status: Object.values(TABLESTATUS) });
// }

//การจอง
exports.createReservation = async (req, res, next) => {
  const data = req.body;
  console.log("🚀 ~ exports.createReservation= ~ data:", data);
  try {
    const dataReservation = {
      userId: data.userId,
      tableId: data.tableId,
      venueId: data.venueId,
      dateTime: data.dateTime,
      numberCustomers: data.numberCustomers,
      status: data.status,
    };

    const newReservation = await db.reservation.create({
      data: dataReservation,
    });

    console.log(newReservation);
    res.json({ msg: "Create OK", result: newReservation });
  } catch (err) {
    next(err);
  }
};
