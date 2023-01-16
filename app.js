const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const Routes = require('./Routes/foodRoutes');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors())

app.use('/api/redOnion', Routes);

app.get('/', (req, res) => {
    try {
        res.status(200).send('Welcome to Red Onion')
    } catch (error) {
        res.status(500).send(error)
    }
})


module.exports = app;;