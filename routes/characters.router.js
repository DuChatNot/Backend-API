const Character = require('../services/characters.service');
const express = require('express');
const router = express.Router();
const service = new Character;


router.get('/', (req,res) => {
    res.json(service.find());
})

router.get('/:id',(req,res) => {
    const {id} = req.params
    const char = service.findOne(id)
    res.json(char);
});

router.post('/', (req,res) => {
    res.status(201);
    const body = req.body;
    res.json({
        message:'Created',
        body
    })
})

router.delete('/', (req,res) => {
    const {id} = req.params;
    res.json({
        message: 'Deleted',
        id: id
    })
})

module.exports = router;
