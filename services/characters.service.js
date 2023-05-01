const {faker} = require('@faker-js/faker');

class Character {
    constructor () {
        this.characters = [];
        this.generate();
    }

    generate(){
        for (let i = 0; i < 150; i++){
            this.characters.push({
                id: i,
                name: faker.animal.crocodilia(),
                last_seen: faker.address.cityName(),
                company: faker.company.name(),
                aka: faker.commerce.productName().slice(0,10)
            });
        }
    }

    find(){
        return this.characters;
    }

    findOne(id){
        return this.characters.find(p => p.id === id);
    }
}

module.exports = Character;