const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/todo', ()=>{
    console.log('mongodb connected successfully');
})
const Todo=mongoose.model('Todo',{
    todo:String
})

module.exports={
    Todo
}