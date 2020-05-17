const express = require('express');
const nutrionix = require ('./nutritionix.js');
const vision = require ('./vision.js')
const example = require('./routes/api/exampleApi');
const bodyParser = require('body-parser');
var cors = require('cors');



const app = express();

app.use(cors);
app.use(cors());
app.use(bodyParser.json());
app.use('/api/example', example);


app.get("/", (req, res) => {
    res.send('server started');
  });
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});