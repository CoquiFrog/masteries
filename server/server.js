const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://postgres:@localhost/paul";


var app = express(); 
app.use(bodyParser.json());
app.use(cors())


massive(connectionString).then(db => {
    app.set('db', db)
    app.get('db').init.seed_file().then(res => {
        console.log(res)
    })

}).catch(err => {
    console.log(err)
})



app.get('/api/whatever', (req, res) => {
    req.app.get('db').whatever().then(whatever => {
        res.send(whatever);
    })
})

app.post('/api/addName', (req, res) => {
    let { name, number} = req.body;
    req.app.get('db').addName([name, number]).then(whatever => {
        res.send(whatever)
    })
})



app.listen(3001, () => {
    console.log('Listening on port 3001');
})