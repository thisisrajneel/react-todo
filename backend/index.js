const express = require('express')
const { createToDo, updateToDo } = require('./types')

const app = express()

app.use(express.json())

app.post('/todo', (req,res)=> {
    const createPayLoad = req.body
    const parsedPayLoad = createToDo.safeParse(createPayLoad)

    if(!parsedPayLoad.success) {
        res.status(411).json({
            message : 'you sent the wrong inputs'
        })
    }
})

app.get('/todos', (req,res)=> {
    
})

app.put('/completed', (req,res)=> {
    const createPayLoad = req.body
    const parsedPayLoad = updateToDo.safeParse(createPayLoad)

    if(!parsedPayLoad.success) {
        res.status(411).json({
            message : 'you sent the wrong inputs'
        })
    }
})

const PORT = 3000

app.listen(PORT, () => {
    console.log('server started on port 3000');
})