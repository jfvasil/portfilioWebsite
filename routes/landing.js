const express = require('express')
const router = express.Router()
const landingController = require('../controllers/landing')

router.get('/', landingController.getLanding)

//router.post('/createTodo', todosController.createTodo)

//router.put('/markComplete', todosController.markComplete)

//router.put('/markIncomplete', todosController.markIncomplete)

//router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router