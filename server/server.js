const express = require('express');
var cors = require('cors');

const vision = require('@google-cloud/vision');

const app = express();
  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: 'API-vision.json'
  });

  // Performs label detection on the image file
  const [result] = await client.labelDetection('./meme.png');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));


app.get("/", (req, res) => {
    res.send('server started');
  });
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});