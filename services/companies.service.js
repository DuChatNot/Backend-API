const {faker} = require('@faker-js/faker');

class Companies {
    constructor() {
        this.companies = [];
        this.generate();
    }

    generate(){
        for(let i = 0; i < 25; i++){
            this.companies.push({
                id: i,
                name: faker.company.name(),
                location: faker.address.direction(),
            })
        }
    }

    find(){
        return this.companies;
    }

    findOne(id){
        return this.companies.find(p => p.id === id);
    }
}

module.exports = Companies;