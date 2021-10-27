const express = require('express')
const path = require('path')
const app = express()
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')

//settings
app.set('title', 'App hecha en Node.js')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//Middlewares
app.use(loggedMiddleware.islogged)

app.use(express.static(path.join(__dirname, 'public')))

//Rutas
app.get('/', (req, res) => {
    res.render('index')
})

app.use('/users', user)

app.listen(app.get('port'), ()=>{
    console.log('Mi ' + app.get('title') + ' esta corriendo en el puerto 3000')
})