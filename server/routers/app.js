const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')

router.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="auth/google">google</a> <a href="auth/facebook">facebook</a> <a href="auth/twitter">twitter</a> <a href="auth/github">github</a>')
})

router.post('/api/create', async (req, res) => {
    try {
        const expense = {
            ...req.body,
            owner: req.user._id
        }

        const newExpense = new Expense(expense)
        await newExpense.save()

        res.status(201).send(newExpense)
    } catch (error) {
        res.status(500).send(error)
    }
})

/**
 * Get owner's expenses by owner id
 */
router.get('/api/expenses', async (req, res) => {
    try {
        const expenses = await Expense.find({ owner: req.user._id })
        .sort({createdAt: -1})
        .limit(20)

        res.send(expenses)
    } catch (error) {
        res.status(500).send(error)
    }
})

/**
 * Update expense by id
 */
router.post('/api/expense/update', async (req, res) => {
    try {
        const { id, expense } = req.body
        const updatedExpense = await Expense.findOneAndUpdate({ owner: req.user._id, _id: id }, expense, { new: true })
        res.send(updatedExpense)
    } catch (error) {
        res.status(500).send(error)
    }
})

/**
 * Remove expense by id
 */
router.post('/api/expense/remove', async (req, res) => {
    try {
        const deletedExpense = await Expense.findOneAndDelete({ owner: req.user._id, _id: req.body.id })
        res.send(deletedExpense._id)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router