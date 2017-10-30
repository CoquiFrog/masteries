const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = "postgres://aksoxces:TAI5-mDa-FRtuhwddHyN8OtEA0TVZwbP@elmer.db.elephantsql.com:5432/aksoxces";
const data_controller = require('./data_controller.js');

var app = express(); 
app.use(bodyParser.json());
app.use(cors())


massive (connectionString).then( dbInstance => {
    
      app.set('db', dbInstance)
  }).catch(err => console.log(err))

//   app.get('/api/getNow', data_controller.getNow);




app.listen(3001, () => {
    console.log('Listening on port 3001');
})