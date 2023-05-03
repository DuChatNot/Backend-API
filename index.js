const express = require('express');
const app = express();
const port = 3000;
const routingFunction = require('./routes/routesIndex');

// -- Middleware Import {
const {errorLogger, errorHandler} = require('./middlewares/error.handler');
// -- }

app.get('/', (req,res) => {
    res.send('Express Server!')
})

app.use(express.json());

// -- Routing {
routingFunction(app);
// -- }

// -- Middleware (Error handlers){
app.use(errorLogger);
app.use(errorHandler);
// -- }

// -- Settings {
app.listen(port);
console.log(`Listening ${port}`);
// -- }