
const express = require('express')
const app = express()
app.use
app.listen(3000, () => { console.log('server started at port 3000') })

const cors = require('cors')
app.use(cors({
    origin: ['http://localhost:3001']
}))

app.use(express.json())



const dataservice = require('./services/data.service')

// get todo
app.get('/', (req, res) => {
    dataservice.getTodo()
        .then(result => {
            res.status(result.statusCode).json(result)

        })
})


// add todo
app.post('/addTodo', (req, res) => {
    console.log('inside addtodo');
    console.log(req.body);
    dataservice.addTodo(req.body.text)
        .then(result => {
            res.json(result)
        })
})

// update todo
app.put('/updateTodo', (req, res) => {
    const { id, text } = req.body
    console.log(id, text);
    dataservice.updateTodo(id, text)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})

// delete todo
app.post('/deleteTodo', (req, res) => {
    console.log('inside delete');
    console.log(req.body);
    dataservice.deleteTodo(req.body.text)
        .then(result => {
            res.status(result.statusCode).json(result)
        })
})