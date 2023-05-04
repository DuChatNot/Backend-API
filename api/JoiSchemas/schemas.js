const joi = require('joi');

const id = joi.string().uuid();
const name = joi.string().min(5).max(20);
const last_seen = joi.string().min(3).max(15);
const company = joi.string().min(3).max(15);
const aka = joi.string().min(3).max(10);

const characterSchema = joi.object({
    name: name.required(),
    last_seen: last_seen.required(),
    company: company.required(),
    aka: aka.required()
});

const updateCharacter = joi.object({
    name: name,
    last_seen: last_seen,
    aka: aka
});

const getCharacter = joi.object({
    id: id.required()
})

module.exports = {characterSchema, updateCharacter, getCharacter};