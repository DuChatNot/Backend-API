const {faker} = require('@faker-js/faker');
const boom = require('boom');

const pool = require('../libs/pool') //Pool conection 

class Character {
    constructor () {
        this.characters = [];
        this.generate();
        this.pool = pool;
        this.pool.on('error', err => console.log(err))
    }

    async generate(){
        for (let i = 0; i < 30; i++){
            this.characters.push({
                id: faker.datatype.uuid(),
                name: faker.animal.crocodilia(),
                last_seen: faker.address.cityName(),
                company: faker.company.name(),
                aka: faker.commerce.productName().slice(0,10)
            });
        }
    }

    async create(obj){
        this.characters.push({
            id: faker.datatype.uuid(),
            ...obj
        });
    }

    async find(){
        const res = await this.pool.query('SELECT * FROM people');
        return res;
    }

    async findOne(id){ //Handling errors without Boom:
        const index = this.characters.findIndex(p => p.id === id)
        if (index !== -1){
            const foundOne = this.characters.find(p => p.id === id);
            return foundOne;
        } else {
            throw new Error('Object doesn´t exist')
        }
        
    }

    async update(id, update){
        const index = this.characters.findIndex(p => p.id === id)
        if (index === -1) {
            throw boom.notFound("The object you are intending to reach doesn´t exist")
        } else {
            const character = this.characters[index];
            this.characters[index] = {
                ...character,
                ...update
            };
        }
        
    }

    async delete(id) { 
        const index = this.characters.findIndex(p => p.id === id);
        if (index === -1){
            throw new Error("Error 404, Can´t delete an unexisting object")
        }
        this.characters.splice(index,1);
    }
}

module.exports = Character;