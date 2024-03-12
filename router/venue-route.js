const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const venueController = require('../controllers/venue-controller')

//ร้าน
router.get('/venue', authenticate, venueController.getByUser)
router.get('/venue-all-status', authenticate, venueController.getAllStatus)
// router.post('/', authenticate, venueController.createVenue)
// router.put('/:id', authenticate, venueController.updateVenue)
// router.delete('/:id', authenticate, venueController.deleteVenue )


// โต๊ะ
router.get('/table', authenticate, venueController.getByTable)
router.get('/table-all-status', authenticate, venueController.getAllStatusTabel)

// การจอง
module.exports = router