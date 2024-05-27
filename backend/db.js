const mongoose = require('mongoose')

mongoose,mongoose.connect(process.env.mongoDBString)

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const ToDo = mongoose.model('todos', todoSchema)

module.exports =  {
    ToDo
}