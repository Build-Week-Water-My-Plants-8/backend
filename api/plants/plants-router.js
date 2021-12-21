const router = require('express').Router()
const Plants = require('./plants-model')
const { restricted } = require('./plants_middleware')


router.get('/', restricted, (req,res,next)=> {
    Plants.getPlants(req.decodedJwt.user_id)
    .then(plants => {
       res.status(201).json(plants)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    let plant = req.body
    Plants.addPlant(plant)
    .then(newPlant => {
        res.status(201).json(newPlant)
    }).catch(next)
})



module.exports = router