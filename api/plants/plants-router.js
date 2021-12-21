const router = require('express').Router()
const Plants = require('./plants-model')
const { restricted } = require('./plants_middleware')


router.get('/', restricted, (req,res,next)=> {
    Plants.getPlants(req.decodedJwt.user_id)
    .then(plants => {
       res.status(201).json(plants)
    }).catch(next)
})

router.post('/', restricted, (req, res, next) => {
    let plant = req.body
    Plants.addPlant(plant)
    .then(newPlant => {
        res.status(201).json(newPlant)
    }).catch(next)
})
//api/plants/id
router.put('/:id', restricted, (req, res, next) => {
    Plants.update(req.params.id, req.body)
    .then(updatedPlant => {
        res.status(200).json(updatedPlant)
    }).catch(next)
})



module.exports = router