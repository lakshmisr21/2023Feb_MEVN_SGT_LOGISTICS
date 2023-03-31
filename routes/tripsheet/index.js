const router=require('express').Router()
const { route } = require('../user')
const controller = require('./Controller')
router.post('/newtripsheet',controller.newtripsheet)
router.get('/gettrips',controller.gettrips)
router.get('/getTripsheet',controller.getTripsheet)
module.exports = router