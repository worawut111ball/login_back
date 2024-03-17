const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const adminController = require('../controllers/admin-controller')
//id
router.get('/id-all', authenticate, adminController.getAllUsers);
router.put('/iduser:id', authenticate, adminController.updateUsers)
router.delete('/iduser:id', authenticate, adminController.deleteUsers )
//ร้าน
router.get('/venue', authenticate, adminController.getByUser)
router.post('/venue', authenticate, adminController.createVenue)
router.put('/venue:id', authenticate, adminController.updateVenue)
router.delete('/venue:id', authenticate, adminController.deleteVenue )

// โต๊ะ
// router.get('/table', authenticate, adminController.getBytable)
// router.get('/table-all-status', authenticate, adminController.getAllStatustable)
router.post('/table', authenticate, adminController.createtable)
// router.put('/table:id', authenticate, adminController.updatetable)
// router.delete('/table:id', authenticate, adminController.deletetable )

//การจอง
router.get('/reservation-all', authenticate, adminController.getAllreservation)

module.exports = router