const db = require("../data/db-config")

module.exports = {
  add,
  // get,
  update,
  getById,
  findBy
}
//MIGHT NOT USE THIS 
// function get() {
// return db('users')
// }

function getById (user_id){
    return db('users').where('user_id', user_id)
}
function findBy(username) {
    return db('users').where('username', username).first()
}
async function add(user) {
    const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
    return newUserObject
}

async function update(user_id, changes) {
    const [updatedUser] = await db('users').where('user_id', user_id).update(changes,['user_id', 'username','password', 'phone_number'])
    return updatedUser
}
