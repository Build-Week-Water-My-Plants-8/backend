const User = require('./user-model')

const checkUserExists = async (req, res, next) => {
    try {
        const user = await User.findBy( req.body.username )
        if(!user) {
            next({status:401, message: 'invalid credentials'})
        } else {
            req.user = user
            next()
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkUserExists,
}