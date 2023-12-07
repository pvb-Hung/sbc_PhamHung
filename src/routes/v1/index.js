const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');
const customer = require('./customer')
const product = require('./product')

router.get('/status', (req, res) => {
    res.status(200).json({ msg: 'API are ready !'})
})

router.use('/users', userRouter)
router.use('/customer', customer)
router.use('/product', product)

module.exports = router;