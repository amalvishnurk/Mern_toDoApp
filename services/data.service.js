const db = require('./db')

const getTodo = () => {
    return db.Todo.find()
        .then(result => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    message: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 404,
                    message: 'no data found'
                }
            }

        })
}
const addTodo = (text) => {
    return db.Todo.findOne({
        todo: text
    }).then((result) => {
        if (result || text == "") {
            return {
                status: false,
                statusCode: 404,
                message: 'already added or cannot add empty todo'
            }
        }
        else {
            let newTodo = new db.Todo({
                todo: text
            })
            newTodo.save()
            return {
                status: true,
                statusCode: 200,
                message: 'todo added'
            }
        }
    })
}

const updateTodo = (id, text) => {
    return db.Todo.updateOne({ _id: id }, { $set: { todo: text } })
        .then(result => {
            return {
                status: true,
                statusCode: 200,
                message: 'todo updated'
            }
        })
}


const deleteTodo = (text) => {
    console.log('inside deletetodo');
    console.log(text);
    return db.Todo.deleteOne({ todo: text })
        .then(result => {
            return {
                status: true,
                statusCode: 200,
                message: 'todo deleted'
            }
        })
}


module.exports = {
    getTodo,
    addTodo,
    updateTodo,
    deleteTodo
}