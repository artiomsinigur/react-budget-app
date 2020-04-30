const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    desc: {
        type: String
    },
    note: {
        type: String
    },
    amount: {
        type: Number
    },
    createdAt: {
        type: Number
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Expense = mongoose.model('Expense', expenseSchema)
module.exports = Expense
