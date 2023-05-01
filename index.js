const express = require('express');
const app = express();
const port = 3000;
const routingFunction = require('./routes/routesIndex');

app.get('/', (req,res) => {
    res.send('Express Server!')
})

app.use(express.json());

routingFunction(app);

app.listen(port);
console.log(`Listening ${port}`);