const db = require('../models/db')
const {Status} = require('@prisma/client')

//ร้าน
exports.getByUser = async (req, res, next) => {
  try {
    const venues = await db.venue.findMany({
    })
    res.json({venues})
  } catch (err) {
    next(err)
  }
}
exports.getAllStatus = async (req, res, next) => {
  res.json({status: Object.values(Status)})
}

//โต๊ะ
exports.getByTable = async (req, res, next) => {
  try {
    const tables = await db.table.findMany({
    })
    res.json({tables})
  } catch (err) {
    next(err)
  }
}
exports.getAllStatusTabel = async (req, res, next) => {
  res.json({status: Object.values(Status)})
}