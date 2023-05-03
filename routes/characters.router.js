const Character = require('../services/characters.service');
const express = require('express');
const router = express.Router();
const service = new Character;


router.get('/', async (req,res) => {
    const list = await service.find()
    res.json(list);
})

router.get('/:id', async (req,res, next) => {
    try {
        const {id} = req.params
        const found = await service.findOne(id)
        res.json(found);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req,res) => {
    const body = req.body;
    await service.create(body);
    res.status(201).json({
        message:'Created',
        body: body
    })
});

router.patch('/:id', async (req,res,next) => {
    try {
        const {id} = req.params;
        const body = req.body;

        const patched = await service.update(id,body);
        res.json(patched);
    } catch (error) {
        next(error)
    }
    
});

router.delete('/:id', (req,res,next) => {
    try {
        const {id} = req.params;
        service.delete(id);
        res.json({
            message: 'Deleted',
            id: id
        });
    } catch (error){
        next(error);
    }
});

module.exports = router;
