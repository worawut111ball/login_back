const db = require('../models/db')
const {Status} = require('@prisma/client')

//CRUD ร้าน
exports.getByUser = async (req, res, next) => {
  try {
    const venues = await db.venue.findMany({
      where : { userId : req.user.id},
    
    })
    res.json({venues})
  } catch (err) {
    next(err)
  }
}

exports.createVenue = async (req, res, next) => {
  // validate req.body
  const data = req.body
  try{
    const rs = await db.venue.create({
       data : { ...data, userId : req.user.id}
    })
    res.json({ msg: 'Create OK' , result : rs })
  }catch(err) {
    next(err)
  }
}

exports.updateVenue = async (req, res, next) => {
  // validate req.params + req.body
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.venue.update({
      data :  {...data},
      where: { id : +id , userId : req.user.id} 
    })
    res.json({msg: 'Update ok', result: rs})
  }catch(err){
    next(err)
  }
}

exports.deleteVenue = async (req, res, next) => {
  const {id} = req.params
  try {
    const rs = await db.venue.delete({ where : {id : +id, userId: req.user.id}})
    res.json({msg: 'Delete ok', result : rs})
  }catch(err) {
    next(err)
  }
}
exports.getAllStatus = async (req, res, next) => {
  res.json({status: Object.values(Status)})
}


// id
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await db.user.findMany({
    });
    res.json({ users });
  } catch (err) {
    next(err);
  }
};


//โต๊ะ
exports.tableAll = async (req, res, next) => {
  try {
    const tables = await db.table.findMany();
    res.json({tables})
  } catch (err) {
    next(err)
  }
}


exports.getBytable = async (req, res, next) => {
  try {
    const tables = await db.table.findMany({
      where : { venueId : req.venue.id},
    })
    res.json({tables})
  } catch (err) {
    next(err)
  }
}
exports.createtable = async (req, res, next) => {
  // validate req.body
  const data = req.body
  console.log("🚀 ~ exports.createtable= ~ data:", data)
  try{
    const dataTable = {...data};

    const rs = await db.table.create({ data: dataTable  })
    console.log(rs)
    res.json({ msg: 'Create OK' , result : rs })
  }catch(err) {
    next(err)
  }
}

exports.updatetable = async (req, res, next) => {
  // validate req.params + req.body
  const {id} = req.params
  const data = req.body
  try {
    const rs = await db.table.update({
      data :  {...data},
      where: { id : +id , venueId : req.venue.id} 
    })
    res.json({msg: 'Update ok', result: rs})
  }catch(err){
    next(err)
  }
}

exports.deletetable = async (req, res, next) => {
  const {id} = req.params
  try {
    const rs = await db.table.delete({ where : {id : +id, venueId: req.venue.id}})
    res.json({msg: 'Delete ok', result : rs})
  }catch(err) {
    next(err)
  }
}
exports.getAllStatustable = async (req, res, next) => {
  res.json({status: Object.values(Status)})
}