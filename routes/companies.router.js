const express = require('express');
const router = express.Router();
const Companies = require('../services/companies.service');
const service = new Companies;


router.get('/', (req,res) => {
    const list = service.find()
    res.json(list);
})

router.get('/:id', (req,res) => {
    const {id} = req.params;
    const company = service.findOne(id);
    res.json(company);
})

router.post('/', (req,res) => {
    res.status(201);
    const body = req.body;
    res.json({
        message: 'Created',
        body : body,
    })
})

router.patch('/', (req,res) => {
    const body = req.body;
    res.json({
        message: 'Patch applied',
        body: body,
    })
})
module.exports = router;