const charRouter = require('./characters.router');
const express = require('express');
//const router = express.Router();

const routingFunction = (app) => {
    //app.use('/api/v1', router)
    app.use('/characters' , charRouter);
}

module.exports = routingFunction;