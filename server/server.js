const express = require('express');
var cors = require('cors');



const app = express();


descriptions = [];

// Performs label detection on the image file
async function image(req,res){
  const vision = require('@google-cloud/vision');
// Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: 'API-vision.json'
  });
  
  const [result] = await client.labelDetection('./meme.png');
  const labels = result.labelAnnotations;
//Stores result into array
  labels.forEach(label => descriptions.push(label.description));
  console.log(descriptions)
  }
//Call function
image();

var request = require('request');

var headers = {
    'accept': 'application/json',
    'x-app-id': '0be25bad',
    'x-app-key': '27c1585453778711674404d293fea72d',
    'x-remote-user-id': '0',
    'Content-Type': 'application/json'
};

var dataString = '{ "query": "banana"}';

var options = {
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      calories = body.foods[0].nf_calories;
      total_fat = body.foods[0].nf_total_fat
      console.log(calories);
      console.log(total_fat);
    } else {
      console.log("Not Found")
    }
}

request(options, callback);

//api endpoint returning the fields from nutrtionix
app.get('/api/getfields', (req,res) => {

});

app.get("/", (req, res) => {
    res.send('server started');
  });
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});