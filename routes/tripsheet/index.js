const router=require('express').Router()
const { route } = require('../user')
const controller = require('./controller')
router.post('/newtripsheet',controller.newtripsheet)
router.get('/gettrips',controller.gettrips)
router.get('/getTripsheet',controller.getTripsheet)
router.get('/:id',controller.gettripid)
router.delete('/:id',controller.deletetripid)
router.put('/:id',controller.updatetripid)

module.exports = router