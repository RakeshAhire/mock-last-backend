const { default: mongoose, Schema } = require("mongoose");
const quizesSchema = Schema({
        category:String,
        type: String,
        difficulty: String,
        question: String,
        correct_answer: String,
        incorrect_answers: [String],
})
const quizeModel = mongoose.model('quizes', quizesSchema);

module.exports ={quizeModel}