const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(bodyParser.json())

app.get('/api/data', (req, res) => {
    res.json({message: 'Content added'});
});

app.listen(PORT, () => {
    console.log('Server listening on Port ${PORT}');
})