const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://dhruva0400:Dhruva%402000@week03-04.wsz0hf2.mongodb.net/');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}