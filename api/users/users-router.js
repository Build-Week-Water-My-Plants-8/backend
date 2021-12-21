const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('./user-model')
const {tokenBuilder} = require('./../helpers/token-builder');
const req = require('express/lib/request');
const { checkUserExists } =require('./users-middleware')

router.post('/register', (req, res, next) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 8)
    user.password = hash

    User.add(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(next)
})

router.post("/login", checkUserExists, (req, res, next) => {
    const { username, password } = req.body
    if (bcrypt.compareSync(password, req.user.password)) {
            const token = tokenBuilder(req.user)
            res.status(200).json({
              message: `${username} is back!`,
              token,
            })
          } else {
            next({status: 401, message: 'Invalid credentials'})
          }
  });


module.exports = router;