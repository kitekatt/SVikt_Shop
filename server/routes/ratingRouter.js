const express = require('express')
const router = new express.Router()
const authMiddleware = require('../middleware/authMiddleWare')
const RatingConroller = require('../controllers/ratingController')

router.get('/card/:cardId([0-9]+)', RatingConroller.getOne)
router.post('/card/:cardId([0-9]+)/rate/:rate([1-5])', /*authMiddleware,*/ RatingConroller.create)

module.exports = router