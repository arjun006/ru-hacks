const express = require('express');
var cors = require('cors');

const app = express();
app.get("/", (req, res) => {
    res.send('server started')
  });


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});