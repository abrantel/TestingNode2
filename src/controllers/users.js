const users = [
    {id:1, nombre: 'Pedro', edad: 25},
    {id:2, nombre: 'Juan', edad: 30},
    {id:3, nombre: 'Toby', edad: 50},
]


const getUsers = (req, res) => {
    res.render('users', {users: users})
}

const createUsers = (req, res) => {
    res.render('create-user')
}

const updateUsers = (req, res) => {
    res.render('update-user')
}

const deleteUsers = (req, res) => {
    res.render('delete-user')
}

module.exports = {getUsers, createUsers, updateUsers, deleteUsers}