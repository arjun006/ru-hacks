const express = require('express');
var cors = require('cors');

const vision = require('@google-cloud/vision');

const app = express();
  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: 'API-vision.json'
  });

  // Performs label detection on the image file
  async function image(req,res){
  const [result] = await client.labelDetection('./meme.png');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
  }
  //Call function
image();


//nutritionix (install unirest)
var unirest = require('unirest');

//searches the food
var req = unirest("GET", "https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%2520cheese");

req.query({
	"fields": "item_name%2Cnf_calories%2Cnf_total_fat"
});

req.headers({
	"x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
	"x-rapidapi-key": "2ed1a5be6emshc43763ec17ac9e3p1b4e24jsn9d02e0625f12",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});

app.get("/", (req, res) => {
    res.send('server started');
  });
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});