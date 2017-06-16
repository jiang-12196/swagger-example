var express = require('express');
var app = express();

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.send('hello world');
})

app.listen(3000, () => {
    console.log("Example app listen on port 3000!")
})