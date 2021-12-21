const db = require("../data/db-config")

module.exports = {
  add,
  get,
  update,
  getById,
}


function get(){
return db('users')
}
function getById (id){
    return db('users').where('user_id', id)
}
async function add(user) {
    const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
    return newUserObject
}
function update() {

}