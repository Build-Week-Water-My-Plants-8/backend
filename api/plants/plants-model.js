const db = require('../data/db-config')

module.exports = {
    getPlants,
}
 function getPlants(user_id) {
    return db("users")
		.leftJoin('plants', 'users.user_id', 'plants.user_id')
		.where("users.user_id", user_id)
}