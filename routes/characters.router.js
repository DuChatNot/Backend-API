const Character = require('../services/characters.service');
const express = require('express');
const router = express.Router();
const service = new Character;

const validator = require('../middlewares/joiValidator.handler');

// -- Joi Schemas {
const {characterSchema,  updateCharacter, getCharacter } = require('../JoiSchemas/schemas')
// -- }

router.get('/', async (req,res) => {
    const list = await service.find()
    res.json(list);
})

router.get('/:id', validator(getCharacter, 'params'),
async (req,res, next) => {
    try {
        const {id} = req.params;
        const found = await service.findOne(id)
        res.json(found);
    } catch (error) {
        next(error);
    }
});

router.post('/', validator(characterSchema, 'body'),
async (req,res,next) => {
    try {
        const body = req.body;
        await service.create(body);
        res.status(201).json({
            message:'Created',
            body: body
        })
    } catch (err){
        next(err);
    }
});

router.patch('/:id',
validator(getCharacter, 'params'), //Verify ID, if exists continue...
validator(updateCharacter, 'body'),
async (req,res,next) => {
    try {
        const {id} = req.params;
        const body = req.body;

        const patched = await service.update(id,body);
        res.json({
            message: "Object Updated",
            data: body
        });
    } catch (error) {
        next(error)
    }
    
});

router.delete('/:id', async (req,res,next) => { //BUG
    try {
        const {id} = req.params;
        await service.delete(id);
        res.json({
            message: 'Deleted',
            id: id
        });
    } catch (error){
        next(error);
    }
});

module.exports = router;
