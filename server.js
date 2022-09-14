const express = require('express')
const app = express()
//const connectDB = require('./config/database')
const landingRoutes = require('./routes/landing')
const projectsRoutes = require('./routes/projects')
require('dotenv').config({path: './config/.env'})

//connectDB()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

  

app.use('/', landingRoutes)
app.use('/projects', projectsRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    