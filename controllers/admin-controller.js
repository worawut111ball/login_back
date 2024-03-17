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
exports.updateUsers = async (req, res, next) => {
  const { id } = req.params; // Get the user ID from the URL parameter
  const { role, name, username,password, email,phone } = req.body; // Get updated user data from the request body

  try {
    // Find the user by ID
    const user = await db.user.findUnique({ where: { id: parseInt(id) } });

    // If user not found, return 404
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user with the provided data
    const updatedUser = await db.user.update({
      where: { id: parseInt(id) },
      data: { role, name, username,password, email,phone },
    });

    // Return the updated user
    res.status(200).json({ message: 'User updated successfully', user: updatedUser });
  } catch (err) {
    // Handle errors
    next(err);
  }
};
exports.deleteUsers = async (req, res, next) => {
  const { id } = req.params;
  try {
    // First, try to find the user by ID
    const user = await db.user.findUnique({ where: { id: parseInt(id) } });

    // If the user doesn't exist, return a 404 response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // If the user exists, proceed to delete it
    const rs = await db.user.delete({ where: { id: parseInt(id) } });

    // Return a success response
    res.status(200).json({ message: 'User deleted successfully', result: rs });
  } catch (err) {
    // Handle errors
    next(err);
  }
};






//โต๊ะ
// exports.getBytable = async (req, res, next) => {
//   try {
//     const tables = await db.table.findMany({
//       where : { userId : req.user.id},
//     })
//     res.json({tables})
//   } catch (err) {
//     next(err)
//   }
// }

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
// exports.updatetable = async (req, res, next) => {
//   // validate req.params + req.body
//   const {id} = req.params
//   const data = req.body
//   try {
//     const rs = await db.table.update({
//       data :  {...data},
//       where: { id : +id , venueId : req.venue.id} 
//     })
//     res.json({msg: 'Update ok', result: rs})
//   }catch(err){
//     next(err)
//   }
// }
// exports.deletetable = async (req, res, next) => {
//   const {id} = req.params
//   try {
//     const rs = await db.table.delete({ where : {id : +id, venueId: req.venue.id}})
//     res.json({msg: 'Delete ok', result : rs})
//   }catch(err) {
//     next(err)
//   }
// }
// exports.getAllStatustable = async (req, res, next) => {
//   res.json({status: Object.values(Status)})
// }


//การจอง
exports.getAllreservation = async (req, res, next) => {
  try {
    const reservations  = await db.reservation .findMany({
    });
    res.json({ reservations });
  } catch (err) {
    next(err);
  }
};
