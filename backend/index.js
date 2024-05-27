require('dotenv').config()
const express = require('express')
const { createToDo, updateToDo } = require('./types')
const { ToDo } = require('./db')

const app = express()

app.use(express.json())

app.post('/todo', async (req,res)=> {
    const createPayLoad = req.body
    const parsedPayLoad = createToDo.safeParse(createPayLoad)

    if(!parsedPayLoad.success) {
        res.status(411).json({
            message : 'you sent the wrong inputs'
        })
    } else {
        const madeToDo = await ToDo.create({
            title : parsedPayLoad.data.title,
            description : parsedPayLoad.data.description,
            completed : false
        })
        if(madeToDo) {
            res.json({
                message: 'created a new todo',
                id : madeToDo._id
            })
        }
    }
})

app.get('/todos', async (req,res)=> {
    const todos = await ToDo.find({})
    res.json({
        todos
    })
})

app.put('/completed', (req,res)=> {
    const createPayLoad = req.body
    const parsedPayLoad = updateToDo.safeParse(createPayLoad)

    if(!parsedPayLoad.success) {
        res.status(411).json({
            message : 'you sent the wrong inputs'
        })
    } else {
        const data = ToDo.updateOne({
            _id : req.body.id
        }, {
            completed : true
        })
    }
})

const port = process.env.PORT

app.listen(port, () => {
    console.log('server started on port ' + port);
})