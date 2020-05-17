const express = require('express');
const nutrionix = require ('./nutritionix.js');
const vision = require ('./vision.js')
const up = require('./routes/api/upload');
const bodyParser = require('body-parser');
const multer = require("multer");
const cors = require('cors');
const request = require('request');
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use('/api/upload', up);

//image receiving


const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null,"public")
},
filename: function (req, file, cb) {
  cb(null,  'Fried-Rice.jpg' )
}
})
var upload = multer({ storage: storage }).single('file')

app.post('/img',function(req, res) {
    console.log('img upload');
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
         image().then(data=>{res.send(data)});

  })
});
app.post('/data',function(req, res) {
  let food = req.body.food;
  console.log(typeof food);
  nutrition(food);
});

app.get("/", (req, res) => {
    res.send('server started');
  });

  async function image(req,res){
    descriptions = [];
    const vision = require('@google-cloud/vision');
  // Creates a client
    const client = new vision.ImageAnnotatorClient({
      keyFilename: 'API-vision.json'
    });
    
    const [result] = await client.labelDetection('./public/Fried-Rice.jpg');
    const labels = result.labelAnnotations;
  //Stores result into array
    labels.forEach(label => descriptions.push(label.description));
    //console.log(descriptions);
    let desc = JSON.stringify(descriptions);
    return desc;
    }


    
function nutrition(food){

  var headers = {
    'accept': 'application/json',
    'x-app-id': '0be25bad',
    'x-app-key': '27c1585453778711674404d293fea72d',
    'x-remote-user-id': '0',
    'Content-Type': 'application/json'
};

 var dataString = {"query": ${food}};

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
    } else {
      console.log("Not Found")
    }
}

request(options, callback);
}



const PORT = process.env.PORT || 5000;
  
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});