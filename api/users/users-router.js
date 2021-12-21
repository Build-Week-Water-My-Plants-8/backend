const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('./user-model')
const {tokenBuilder} = require('./../helpers/token-builder');
const req = require('express/lib/request');

router.post('/register', (req, res, next) => {
    let user= req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash

    User.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(next)
})

module.exports = router;