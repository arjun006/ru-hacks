const express = require('express');
const bodyParser = require('body-parser');
const multer = require("multer");
const cors = require('cors');
const request = require('request');
const app = express();


app.use(cors());
app.use(bodyParser.json());

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

//nutritionix
app.post('/data',function(req, res) {
  let food = req.body.food;
  nutrition(food, res);
});
function nutrition(food, res){

  var headers = {
    'accept': 'application/json',
    'x-app-id': '093ca533',
    'x-app-key': '66bc88c6701d5ecc65e9b592d8c341ad',
    'x-remote-user-id': '0',
    'Content-Type': 'application/json'
};

 dataString=`{"query": "${food}"}`;

var options = {
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    method: 'POST',
    headers: headers,
    body: dataString
};
var nutrients = [];
function callback(error, response, body) {  
    if (!error && response.statusCode == 200) {
      body = JSON.parse(body);
      calories = body.foods[0].nf_calories;
      total_fat = body.foods[0].nf_total_fat;
      nutrients.push(calories)
      res.send(nutrients)
    } else {
      console.log("Not Found")
    }
}

request(options, callback);

return nutrients;
}



const PORT = process.env.PORT || 5000;
  
app.listen(PORT, ()=>{console.log(`Server running on ${PORT}`)});