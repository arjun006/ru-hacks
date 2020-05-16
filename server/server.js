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
//image();



//nutritionix (install unirest)
var unirest = require('unirest');

//searches the food
app.get = "https://trackapi.nutritionix.com/v2/natural/nutrients"

app.headers({
  "Content-Type" : "application/json", 
  "x-app-id" : "0be25bad",
  "x-app-key" : "dbbf560fe2b7bb29bbc243fa80a4d309"
});

app.query(
  {
    "query":"banana",
   }
   );

	console.log(res.body);


//api endpoint returning the fields from nutrtionix
app.get('/api/getfields', (req,res) => {

});

app.get("/", (req, res) => {
    res.send('server started');
  });
const PORT = process.env.PORT || 5000;
  
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});