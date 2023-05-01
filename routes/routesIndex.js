const charRouter = require('./characters.router');
const companyRouter = require('./companies.router');
const express = require('express');
const router = express.Router();

const routingFunction = (app) => {
    app.use('/api/v1', router)
        router.use('/characters' , charRouter);
        router.use('/companies', companyRouter);
}

module.exports = routingFunction;