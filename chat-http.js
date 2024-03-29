const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');


app.use(bodyParser.json());

const list =['ccc', 'ddd'];

app.get('/chat', (req, res)=>{
    res.sendFile(path.resolve('./chat.html'))
})

app.get('/list', (req, res) => {
    res.end(JSON.stringify(list))
})

app.post('/send', (req, res) => {
    list.push(req.body.message);
    res.end(JSON.stringify(list))
})

app.post('/clear', (req, res) => {
    list.length = 0;
    res.end(JSON.stringify(list))
})

app.listen(3008)