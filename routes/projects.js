const express = require('express')
const router = express.Router()
const projectsController = require('../controllers/projects')

router.get('/', projectsController.getProjects)

//router.post('/createTodo', todosController.createTodo)

//router.put('/markComplete', todosController.markComplete)

//router.put('/markIncomplete', todosController.markIncomplete)

//router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router