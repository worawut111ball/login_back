const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const venueController = require('../controllers/venue-controller')

//ร้าน
router.get('/venue', authenticate, venueController.venueAll)


// โต๊ะ
router.get('/tableAll', authenticate, venueController.tableAll)
router.get('/tableBy:id', authenticate, venueController.tableBy)
router.get('/table-all-status', authenticate, venueController.getAllStatusTabel)

// การจอง
router.post('/reservation', authenticate, venueController.createReservation)

module.exports = router